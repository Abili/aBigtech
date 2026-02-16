import { useState, useEffect } from 'react';
import { db, auth, googleProvider } from '../lib/firebase';
import {
    collection,
    query,
    orderBy,
    limit,
    onSnapshot,
    serverTimestamp,
    runTransaction,
    doc
} from 'firebase/firestore';
import { signInWithPopup, onAuthStateChanged, type User } from 'firebase/auth';
import StarRating from './StarRating';

interface Review {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    createdAt: any;
    userId?: string;
    userPhoto?: string;
}

interface ReviewsSectionProps {
    appSlug: string;
}

export default function ReviewsSection({ appSlug }: ReviewsSectionProps) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isWriting, setIsWriting] = useState(false);
    const [newRating, setNewRating] = useState(5);
    const [newComment, setNewComment] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    // Subscribe to Auth
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Subscribe to reviews
    useEffect(() => {
        if (!appSlug) return;

        const q = query(
            collection(db, 'apps', appSlug, 'reviews'),
            orderBy('createdAt', 'desc'),
            limit(20)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const reviewsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Review[];
            setReviews(reviewsData);
        });

        return () => unsubscribe();
    }, [appSlug]);

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error: any) {
            console.error("Login failed:", error);
            alert(`Login failed: ${error.message}`);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !newComment.trim()) return;

        setSubmitting(true);
        try {
            const appRef = doc(db, 'apps', appSlug);
            const reviewsRef = collection(db, 'apps', appSlug, 'reviews');

            await runTransaction(db, async (transaction) => {
                const appDoc = await transaction.get(appRef);

                // Calculate new aggregates
                let currentRating = 0;
                let currentCount = 0;

                if (appDoc.exists()) {
                    const data = appDoc.data();
                    currentRating = data.rating || 0;
                    currentCount = data.ratingCount || 0;
                }

                const newCount = currentCount + 1;
                const newAverage = ((currentRating * currentCount) + newRating) / newCount;

                // Update app document
                transaction.set(appRef, {
                    rating: newAverage,
                    ratingCount: newCount
                }, { merge: true });

                // Create review document
                const newReview = {
                    userId: user.uid,
                    userName: user.displayName || 'Anonymous',
                    userPhoto: user.photoURL,
                    rating: newRating,
                    comment: newComment,
                    createdAt: serverTimestamp()
                };

                // We can't easily add to collection in transaction without a generated ID first or custom ID
                // Ideally we use set on a new doc ref.
                const newReviewRef = doc(reviewsRef);
                transaction.set(newReviewRef, newReview);
            });

            // Reset form
            setIsWriting(false);
            setNewComment('');
            setNewRating(5);
        } catch (error: any) {
            console.error("Error submitting review:", error);
            alert(`Failed to submit review: ${error.message} (${error.code})`);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section style={{
            background: '#fff',
            borderRadius: 20,
            padding: 28,
            border: '1px solid #e5e5e5',
            marginTop: 24,
            fontFamily: 'Inter, system-ui, sans-serif'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <h2 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#0a0a0a'
                }}>
                    Reviews & Ratings
                </h2>
                {user ? (
                    <button
                        onClick={() => setIsWriting(!isWriting)}
                        style={{
                            padding: '8px 16px',
                            background: isWriting ? '#f5f5f5' : '#f97316',
                            color: isWriting ? '#525252' : 'white',
                            border: 'none',
                            borderRadius: 8,
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        {isWriting ? 'Cancel' : 'Write a Review'}
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleLogin}
                        style={{
                            padding: '8px 16px',
                            background: '#0a0a0a',
                            color: 'white',
                            border: 'none',
                            borderRadius: 8,
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                        }}
                    >
                        <span>G</span> Sign in to Review
                    </button>
                )}
            </div>

            {/* Write Review Form */}
            {isWriting && user && (
                <form onSubmit={handleSubmit} style={{ marginBottom: 32, padding: 20, background: '#fafafa', borderRadius: 12 }}>
                    <div style={{ marginBottom: 16 }}>
                        <label style={{ display: 'block', fontSize: '14px', marginBottom: 8, fontWeight: 500 }}>Your Rating</label>
                        <StarRating rating={newRating} interactive onChange={setNewRating} size={32} />
                    </div>

                    <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                        {user.photoURL && (
                            <img src={user.photoURL} alt="User" style={{ width: 32, height: 32, borderRadius: '50%' }} />
                        )}
                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#0a0a0a' }}>
                            Posting publicly as {user.displayName}
                        </span>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                        <label style={{ display: 'block', fontSize: '14px', marginBottom: 8, fontWeight: 500 }}>Review</label>
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Tell others what you think about this app..."
                            required
                            rows={4}
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                borderRadius: 8,
                                border: '1px solid #e5e5e5',
                                fontSize: '14px',
                                resize: 'vertical',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        style={{
                            width: '100%',
                            padding: '12px',
                            background: '#0a0a0a',
                            color: 'white',
                            border: 'none',
                            borderRadius: 8,
                            fontWeight: 600,
                            cursor: submitting ? 'not-allowed' : 'pointer',
                            opacity: submitting ? 0.7 : 1
                        }}
                    >
                        {submitting ? 'Submitting...' : 'Submit Review'}
                    </button>
                </form>
            )}

            {/* Reviews List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {reviews.length === 0 ? (
                    <div style={{ textAlign: 'center', color: '#737373', padding: 20 }}>
                        No reviews yet. Be the first to review!
                    </div>
                ) : (
                    reviews.map(review => (
                        <div key={review.id} style={{ display: 'flex', gap: 16 }}>
                            {review.userPhoto ? (
                                <img
                                    src={review.userPhoto}
                                    alt={review.userName}
                                    style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
                                />
                            ) : (
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    background: `hsl(${Math.random() * 360}, 70%, 80%)`, // Random pastel color
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: '#171717',
                                    flexShrink: 0
                                }}>
                                    {review.userName.charAt(0).toUpperCase()}
                                </div>
                            )}
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                                    <span style={{ fontWeight: 600, fontSize: '15px' }}>{review.userName}</span>
                                    <span style={{ fontSize: '12px', color: '#737373' }}>
                                        {review.createdAt?.toDate().toLocaleDateString() || 'Just now'}
                                    </span>
                                </div>
                                <div style={{ marginBottom: 6 }}>
                                    <StarRating rating={review.rating} size={14} />
                                </div>
                                <p style={{ margin: 0, fontSize: '14px', color: '#525252', lineHeight: 1.5 }}>
                                    {review.comment}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
