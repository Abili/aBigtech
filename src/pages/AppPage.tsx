import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAppBySlug, formatFileSize } from '../data/apps';
import { db, auth, googleProvider } from '../lib/firebase';
import { signInWithPopup, onAuthStateChanged, type User } from 'firebase/auth';
import { doc, onSnapshot, updateDoc, increment, setDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';

import ReviewsSection from '../components/ReviewsSection';
import StarRating from '../components/StarRating';
import SEO from '../components/SEO';

export default function AppPage() {
    const { slug } = useParams<{ slug: string }>();
    const appData = slug ? getAppBySlug(slug) : undefined;
    const [downloadCount, setDownloadCount] = useState(appData?.totalDownloads || 0);
    const [rating, setRating] = useState(appData?.rating || 0);
    const [ratingCount, setRatingCount] = useState(appData?.ratingCount || 0);
    const [updateUrl, setUpdateUrl] = useState<string | null>(null);
    const [latestVersionName, setLatestVersionName] = useState<string | null>(null);
    const [_latestVersionCode, setLatestVersionCode] = useState<number | null>(null);
    const [firestoreReleaseNotes, setFirestoreReleaseNotes] = useState<string | null>(null);
    const [fileSize, setFileSize] = useState<number>(appData?.versions[0].size || 0);
    const [user, setUser] = useState<User | null>(null);

    const app = appData;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!slug) return;

        // Subscribe to real-time app data (downloads + rating + updateUrl)
        const docRef = doc(db, 'apps', slug);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setDownloadCount(data.downloads || 0);
                if (data.rating) setRating(data.rating);
                if (data.ratingCount) setRatingCount(data.ratingCount);
                if (data.updateUrl) setUpdateUrl(data.updateUrl);
                if (data.latestVersionName) setLatestVersionName(data.latestVersionName);
                if (data.latestVersionCode) setLatestVersionCode(data.latestVersionCode);
                if (data.releaseNotes) setFirestoreReleaseNotes(data.releaseNotes);
                if (data.size) setFileSize(data.size);
            } else {
                // Initialize if document doesn't exist
                if (app) {
                    setDoc(docRef, {
                        downloads: app.totalDownloads,
                        rating: 0,
                        ratingCount: 0
                    }, { merge: true });
                }
            }
        });

        return () => unsubscribe();
    }, [slug, app]);

    if (!app) {
        return <div style={{ padding: 40, textAlign: 'center' }}>App not found</div>;
    }

    const latestVersion = app.versions[0];

    const handleDownload = async () => {
        if (!user) {
            try {
                await signInWithPopup(auth, googleProvider);
            } catch (error) {
                console.error("Login failed:", error);
            }
            return;
        }

        // Use dynamic updateUrl from Firestore if available, otherwise fallback to static
        const downloadUrl = updateUrl || latestVersion.downloadUrl;
        const versionName = latestVersionName || latestVersion.versionName;

        // Create an anchor element to trigger the download immediately
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `myuzek-${versionName}.apk`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Log download with location data
        if (slug) {
            try {
                // 1. Increment total counter
                const docRef = doc(db, 'apps', slug);
                await updateDoc(docRef, {
                    downloads: increment(1)
                });

                // 2. Fetch location and log detailed entry
                try {
                    const response = await fetch('https://ipapi.co/json/');
                    const locationData = await response.json();

                    const downloadsRef = collection(db, 'apps', slug, 'downloads');
                    await addDoc(downloadsRef, {
                        timestamp: serverTimestamp(),
                        country: locationData.country_name || 'Unknown',
                        city: locationData.city || 'Unknown',
                        ip: locationData.ip || 'Anonymized',
                        version: versionName,
                        platform: 'Android',
                        userId: user.uid,
                        userEmail: user.email
                    });
                } catch (err) {
                    console.error("Failed to log location:", err);
                    // Fallback: Log without location if the API fails
                    const downloadsRef = collection(db, 'apps', slug, 'downloads');
                    await addDoc(downloadsRef, {
                        timestamp: serverTimestamp(),
                        country: 'Unknown',
                        city: 'Unknown',
                        version: versionName,
                        error: 'Location fetch failed',
                        userId: user.uid,
                        userEmail: user.email
                    });
                }
            } catch (error) {
                console.error("Error updating download stats:", error);
            }
        }
    };

    return (
        <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
            <SEO
                title={`${app.name} - Download APK`}
                description={`Download latest version of ${app.name} for Android. ${app.description.slice(0, 150)}...`}
                image={app.iconUrl}
            />

            {/* Breadcrumb */}
            <div style={{
                background: '#fff',
                borderBottom: '1px solid #e5e5e5',
                padding: '12px 24px'
            }}>
                <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                    <nav style={{
                        fontSize: '13px',
                        color: '#737373',
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        <Link to="/" style={{ color: '#737373', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 8px', color: '#d4d4d4' }}>›</span>
                        <Link to="/apps" style={{ color: '#737373', textDecoration: 'none' }}>Apps</Link>
                        <span style={{ margin: '0 8px', color: '#d4d4d4' }}>›</span>
                        <span style={{ color: '#0a0a0a', fontWeight: 500 }}>{app.name}</span>
                    </nav>
                </div>
            </div>

            {/* Header */}
            <header style={{
                background: '#fafafa',
                borderBottom: '1px solid #e5e5e5',
                padding: 'clamp(32px, 5vw, 64px) 24px',
            }}>
                <div style={{
                    maxWidth: 1280,
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'clamp(24px, 4vw, 48px)',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <img
                        src={app.iconUrl}
                        alt={`${app.name} icon`}
                        style={{
                            width: 'clamp(80px, 15vw, 120px)',
                            height: 'clamp(80px, 15vw, 120px)',
                            borderRadius: '22%',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                            flexShrink: 0
                        }}
                    />

                    <div style={{ flex: 1, minWidth: '280px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                            <h1 style={{
                                fontSize: 'clamp(32px, 5vw, 48px)',
                                fontWeight: 800,
                                margin: 0,
                                color: '#0a0a0a',
                                letterSpacing: '-1px',
                                fontFamily: 'Inter, system-ui, sans-serif'
                            }}>
                                {app.name}
                            </h1>
                            <span style={{
                                background: '#dcfce7',
                                color: '#166534',
                                padding: '4px 12px',
                                borderRadius: 100,
                                fontSize: '13px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 4
                            }}>
                                ✓ Verified
                            </span>


                            <p style={{
                                color: '#f97316',
                                fontSize: '14px',
                                fontWeight: 500,
                                marginBottom: 6,
                                fontFamily: 'Inter, system-ui, sans-serif'
                            }}>
                                {app.developerName}
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    <span style={{ fontWeight: 700, fontSize: '18px' }}>{rating > 0 ? rating.toFixed(1) : 'New'}</span>
                                    <StarRating rating={rating} size={16} />
                                    <span style={{ color: '#737373', fontSize: '14px' }}>({ratingCount.toLocaleString()})</span>
                                </div>
                                <div style={{ width: 1, height: 24, background: '#e5e5e5' }} />
                                <div style={{ fontSize: '14px', color: '#525252' }}>
                                    {app.category.icon} {app.category.name}
                                </div>
                            </div>
                        </div>

                        {/* Download Button */}
                        <div>
                            {user ? (
                                <button
                                    onClick={handleDownload}
                                    style={{
                                        background: '#f97316',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '18px 36px',
                                        borderRadius: 14,
                                        fontSize: '17px',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12,
                                        fontFamily: 'Inter, system-ui, sans-serif',
                                        boxShadow: '0 8px 24px rgba(249, 115, 22, 0.4)',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <span style={{ fontSize: '22px' }}>⬇️</span>
                                    Download APK
                                    <span style={{
                                        background: 'rgba(255,255,255,0.2)',
                                        padding: '6px 12px',
                                        borderRadius: 8,
                                        fontSize: '14px'
                                    }}>
                                        {formatFileSize(fileSize)}
                                    </span>
                                </button>
                            ) : (
                                <button
                                    onClick={handleDownload}
                                    style={{
                                        background: '#1e293b',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '18px 36px',
                                        borderRadius: 14,
                                        fontSize: '17px',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12,
                                        fontFamily: 'Inter, system-ui, sans-serif',
                                        boxShadow: '0 8px 24px rgba(30, 41, 59, 0.3)',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <span style={{ fontSize: '22px' }}>🔒</span>
                                    Sign in to Download
                                </button>
                            )}
                            <button
                                onClick={async () => {
                                    const shareData = {
                                        title: app.name,
                                        text: `Check out ${app.name} on aBigTech!`,
                                        url: window.location.href
                                    };
                                    if (navigator.share) {
                                        try {
                                            await navigator.share(shareData);
                                        } catch (err) {
                                            console.error('Error sharing:', err);
                                        }
                                    } else {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert('Link copied to clipboard!');
                                    }
                                }}
                                style={{
                                    background: '#fff',
                                    color: '#0a0a0a',
                                    border: '1px solid #e5e5e5',
                                    padding: '18px 24px',
                                    borderRadius: 14,
                                    fontSize: '17px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    marginTop: 12, // For Mobile wrapping
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    transition: 'all 0.2s ease',
                                    marginLeft: 12
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = '#f5f5f5'}
                                onMouseOut={(e) => e.currentTarget.style.background = '#fff'}
                            >
                                <span>📤</span>
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Quick Info Bar */}
            <section style={{
                background: '#fff',
                borderBottom: '1px solid #e5e5e5',
                padding: '12px 16px'
            }}>
                <div style={{
                    maxWidth: 1280,
                    margin: '0 auto',
                    display: 'flex',
                    gap: 16,
                    flexWrap: 'wrap',
                    fontSize: '13px',
                    color: '#525252',
                    fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', width: '100%' }}>
                        <div><strong style={{ color: '#0a0a0a' }}>Version:</strong> {latestVersionName || latestVersion.versionName}</div>
                        <div><strong style={{ color: '#0a0a0a' }}>Size:</strong> {formatFileSize(latestVersion.size)}</div>
                        <div><strong style={{ color: '#0a0a0a' }}>Android:</strong> {app.requirements.minAndroidVersion}+</div>
                        <div><strong style={{ color: '#0a0a0a' }}>Downloads:</strong> {downloadCount.toLocaleString()}+</div>
                        <div><strong style={{ color: '#0a0a0a' }}>Updated:</strong> {latestVersion.releaseDate}</div>
                    </div>
                    <div style={{ width: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        <strong style={{ color: '#0a0a0a' }}>Package:</strong>{' '}
                        <code style={{
                            background: '#f5f5f5',
                            padding: '2px 8px',
                            borderRadius: 4,
                            fontSize: '12px',
                            fontFamily: 'Roboto Mono, monospace',
                            wordBreak: 'break-all'
                        }}>
                            {app.packageName}
                        </code>
                    </div>
                </div>
            </section>

            {/* Content */}
            <div className="apps-layout" style={{
                maxWidth: 1280,
                margin: '0 auto',
                padding: 'clamp(24px, 5vw, 40px) clamp(16px, 3vw, 24px)',
                display: 'grid',
                gridTemplateColumns: '1fr 340px',
                gap: 'clamp(24px, 4vw, 40px)'
            }}>
                {/* Main Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {/* Screenshots */}
                    {app.screenshots && app.screenshots.length > 0 && (
                        <section style={{
                            marginBottom: 8
                        }}>
                            <h2 style={{
                                fontSize: '18px',
                                fontWeight: 600,
                                color: '#0a0a0a',
                                marginBottom: 16,
                                fontFamily: 'Inter, system-ui, sans-serif'
                            }}>
                                Preview
                            </h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                                gap: 16,
                            }}>
                                {app.screenshots.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`${app.name} screenshot ${i + 1}`}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: 16,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                            border: '1px solid #e5e5e5',
                                            objectFit: 'contain',
                                            background: '#fff'
                                        }}
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Features */}
                    {app.features && app.features.length > 0 && (
                        <section style={{
                            background: '#fff',
                            borderRadius: 20,
                            padding: 28,
                            border: '1px solid #e5e5e5'
                        }}>
                            <h2 style={{
                                fontSize: '18px',
                                fontWeight: 600,
                                color: '#0a0a0a',
                                marginBottom: 16,
                                fontFamily: 'Inter, system-ui, sans-serif'
                            }}>
                                Features
                            </h2>
                            <ul style={{
                                margin: 0,
                                paddingLeft: 20,
                                fontSize: '15px',
                                color: '#525252',
                                lineHeight: 1.8,
                                fontFamily: 'Inter, system-ui, sans-serif'
                            }}>
                                {app.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Description */}
                    <section style={{
                        background: '#fff',
                        borderRadius: 20,
                        padding: 28,
                        border: '1px solid #e5e5e5'
                    }}>
                        <h2 style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#0a0a0a',
                            marginBottom: 16,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            About this app
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: '#525252',
                            lineHeight: 1.8,
                            whiteSpace: 'pre-line'
                        }}>
                            {app.description}
                        </p>
                    </section>

                    {/* Changelog */}
                    <section style={{
                        background: '#fff',
                        borderRadius: 20,
                        padding: 28,
                        border: '1px solid #e5e5e5'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            marginBottom: 16
                        }}>
                            <h2 style={{
                                fontSize: '18px',
                                fontWeight: 600,
                                color: '#0a0a0a',
                                fontFamily: 'Inter, system-ui, sans-serif'
                            }}>
                                What's New
                            </h2>
                            <span style={{
                                background: 'rgba(249, 115, 22, 0.1)',
                                color: '#f97316',
                                padding: '4px 10px',
                                borderRadius: 100,
                                fontSize: '12px',
                                fontWeight: 600,
                                fontFamily: 'Inter, system-ui, sans-serif'
                            }}>
                                v{latestVersionName || latestVersion.versionName}
                            </span>
                        </div>
                        <div style={{
                            fontSize: '14px',
                            color: '#525252',
                            lineHeight: 1.8,
                            whiteSpace: 'pre-line'
                        }}>
                            {firestoreReleaseNotes || latestVersion.changelog}
                        </div>
                    </section>

                    {/* Permissions */}
                    <section style={{
                        background: '#fff',
                        borderRadius: 20,
                        padding: 28,
                        border: '1px solid #e5e5e5'
                    }}>
                        <h2 style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#0a0a0a',
                            marginBottom: 16,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Permissions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {app.requirements.permissions.map(perm => (
                                <div key={perm.name} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '14px 18px',
                                    background: '#f5f5f5',
                                    borderRadius: 12
                                }}>
                                    <div>
                                        <div style={{
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            color: '#0a0a0a',
                                            marginBottom: 2,
                                            fontFamily: 'Inter, system-ui, sans-serif'
                                        }}>
                                            {perm.name.replace(/_/g, ' ')}
                                        </div>
                                        <div style={{ fontSize: '13px', color: '#737373' }}>
                                            {perm.description}
                                        </div>
                                    </div>
                                    <span style={{
                                        background: perm.level === 'dangerous' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                                        color: perm.level === 'dangerous' ? '#ef4444' : '#22c55e',
                                        padding: '4px 10px',
                                        borderRadius: 6,
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        fontFamily: 'Inter, system-ui, sans-serif'
                                    }}>
                                        {perm.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {/* Security Card */}
                    <section style={{
                        background: '#fff',
                        borderRadius: 20,
                        padding: 24,
                        border: '1px solid #e5e5e5'
                    }}>
                        <h3 style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#0a0a0a',
                            marginBottom: 20,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Security
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14
                            }}>
                                <span style={{
                                    width: 44,
                                    height: 44,
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    borderRadius: 12,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '20px'
                                }}>
                                    ✓
                                </span>
                                <div>
                                    <div style={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: '#0a0a0a',
                                        fontFamily: 'Inter, system-ui, sans-serif'
                                    }}>
                                        Malware Scan
                                    </div>
                                    <div style={{
                                        fontSize: '13px',
                                        color: '#22c55e',
                                        fontFamily: 'Inter, system-ui, sans-serif'
                                    }}>
                                        Clean - {latestVersion.scanDate}
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14
                            }}>
                                <span style={{
                                    width: 44,
                                    height: 44,
                                    background: 'rgba(249, 115, 22, 0.1)',
                                    borderRadius: 12,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '20px'
                                }}>
                                    🔏
                                </span>
                                <div>
                                    <div style={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: '#0a0a0a',
                                        fontFamily: 'Inter, system-ui, sans-serif'
                                    }}>
                                        Signed Package
                                    </div>
                                    <div style={{
                                        fontSize: '13px',
                                        color: '#737373',
                                        fontFamily: 'Inter, system-ui, sans-serif'
                                    }}>
                                        Verified signature
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Version Info Card */}
                    <section style={{
                        background: '#fff',
                        borderRadius: 20,
                        padding: 24,
                        border: '1px solid #e5e5e5'
                    }}>
                        <h3 style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#0a0a0a',
                            marginBottom: 20,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            App Info
                        </h3>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12,
                            fontSize: '14px'
                        }}>
                            {[
                                { label: 'Version', value: latestVersionName || latestVersion.versionName },
                                { label: 'Size', value: formatFileSize(fileSize) },
                                { label: 'Min Android', value: app.requirements.minAndroidVersion },
                                { label: 'Released', value: latestVersion.releaseDate },
                            ].map(item => (
                                <div key={item.label} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    paddingBottom: 12,
                                    borderBottom: '1px solid #f5f5f5'
                                }}>
                                    <span style={{ color: '#737373', fontFamily: 'Inter, system-ui, sans-serif' }}>
                                        {item.label}
                                    </span>
                                    <span style={{
                                        color: '#0a0a0a',
                                        fontWeight: 500,
                                        fontFamily: 'Inter, system-ui, sans-serif'
                                    }}>
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Report Card */}
                    <section style={{
                        background: '#fafafa',
                        borderRadius: 20,
                        padding: 24,
                        border: '1px solid #e5e5e5'
                    }}>
                        <h3 style={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#0a0a0a',
                            marginBottom: 8,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Found an issue?
                        </h3>
                        <p style={{
                            fontSize: '13px',
                            color: '#525252',
                            marginBottom: 16,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Report security concerns or bugs to help keep our platform safe.
                        </p>
                        <Link to="/support" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            color: '#f97316',
                            fontSize: '14px',
                            fontWeight: 500,
                            textDecoration: 'none',
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Report Issue
                            <span>→</span>
                        </Link>
                    </section>
                </div>
            </div>


            {/* Reviews Section */}
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 48px' }}>
                <ReviewsSection appSlug={slug || ''} />
            </div>
        </div>
    );
}
