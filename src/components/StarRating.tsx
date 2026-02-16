import { useState } from 'react';

interface StarRatingProps {
    rating: number;
    max?: number;
    size?: number;
    interactive?: boolean;
    onChange?: (rating: number) => void;
}

export default function StarRating({
    rating,
    max = 5,
    size = 20,
    interactive = false,
    onChange
}: StarRatingProps) {
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    const displayRating = hoverRating !== null ? hoverRating : rating;

    return (
        <div style={{ display: 'flex', gap: 2 }}>
            {[...Array(max)].map((_, i) => {
                const starValue = i + 1;
                const filled = starValue <= displayRating;

                return (
                    <span
                        key={i}
                        style={{
                            fontSize: size,
                            color: filled ? '#f97316' : '#e5e5e5', // Orange for filled, gray for empty
                            cursor: interactive ? 'pointer' : 'default',
                            transition: 'color 0.2s ease',
                            lineHeight: 1
                        }}
                        onMouseEnter={() => interactive && setHoverRating(starValue)}
                        onMouseLeave={() => interactive && setHoverRating(null)}
                        onClick={() => interactive && onChange && onChange(starValue)}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
}
