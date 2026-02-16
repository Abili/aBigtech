import { useState, useEffect, useRef } from 'react';

const apps = [
    {
        id: 'eyclips',
        name: 'eyClips',
        tagline: 'Movie Identifier',
        description: 'The movie detector that identifies movies from short clips from social media. Never wonder "what movie is this?" again.',
        icon: '🎬',
        color: 'from-purple-500 to-indigo-600',
        status: 'Coming Soon'
    },
    {
        id: 'abv2ray',
        name: 'ABV2ray',
        tagline: 'Advanced VPN Client',
        description: 'A powerful V2Ray VPN client. Build your own privacy network, bypass censorship with advanced traffic obfuscation, and reclaim your digital freedom.',
        icon: '🛡️',
        color: 'from-orange-500 to-red-600',
        status: 'In Development'
    }
];

export default function UpcomingApps() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                const nextIndex = (activeIndex + 1) % apps.length;
                const scrollAmount = nextIndex * scrollContainerRef.current.offsetWidth;
                scrollContainerRef.current.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
                setActiveIndex(nextIndex);
            }
        }, 5000); // 5 seconds per slide

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const width = scrollContainerRef.current.offsetWidth;
            const index = Math.round(scrollLeft / width);
            setActiveIndex(index);
        }
    };

    return (
        <section style={{
            padding: '24px',
            maxWidth: 1280,
            margin: '0 auto 40px',
        }}>
            <div style={{
                marginBottom: 24,
                textAlign: 'center'
            }}>
                <span style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#f97316',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                    In The Pipeline
                </span>
                <h2 style={{
                    fontSize: 'clamp(24px, 4vw, 32px)',
                    fontWeight: 700,
                    color: '#0a0a0a',
                    marginTop: 8,
                    fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                    Upcoming Projects
                </h2>
            </div>

            <div
                style={{
                    position: 'relative',
                    borderRadius: 24,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    background: 'linear-gradient(135deg, #f0fdf4 0%, #fff7ed 100%)', // Subtle gradient base
                    border: '1px solid rgba(255,255,255,0.5)'
                }}
            >
                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {apps.map((app) => (
                        <div
                            key={app.id}
                            style={{
                                minWidth: '100%',
                                scrollSnapAlign: 'center',
                                padding: 'clamp(32px, 8vw, 64px) clamp(24px, 5vw, 48px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                textAlign: 'center',
                                position: 'relative'
                            }}
                        >
                            {/* Glassy Card Content */}
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.65)',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)',
                                borderRadius: 32,
                                padding: 'clamp(24px, 5vw, 40px)',
                                border: '1px solid rgba(255, 255, 255, 0.8)',
                                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.07)',
                                maxWidth: 700,
                                width: '100%',
                                position: 'relative',
                                zIndex: 10
                            }}>
                                <span style={{
                                    display: 'inline-block',
                                    background: '#0a0a0a',
                                    color: '#fff',
                                    padding: '6px 16px',
                                    borderRadius: 100,
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    marginBottom: 24,
                                    letterSpacing: '0.5px'
                                }}>
                                    {app.status}
                                </span>

                                <div style={{
                                    fontSize: '64px',
                                    marginBottom: 16,
                                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))'
                                }}>
                                    {app.icon}
                                </div>

                                <h3 style={{
                                    fontSize: 'clamp(28px, 5vw, 40px)',
                                    fontWeight: 800,
                                    color: '#0a0a0a',
                                    marginBottom: 8,
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    background: `-webkit-linear-gradient(45deg, #0a0a0a, #404040)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    {app.name}
                                </h3>

                                <div style={{
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: '#f97316',
                                    marginBottom: 16,
                                    fontFamily: 'Inter, system-ui, sans-serif'
                                }}>
                                    {app.tagline}
                                </div>

                                <p style={{
                                    fontSize: 'clamp(15px, 2vw, 17px)',
                                    lineHeight: 1.6,
                                    color: '#525252',
                                    maxWidth: 500,
                                    margin: '0 auto',
                                    fontFamily: 'Inter, system-ui, sans-serif'
                                }}>
                                    {app.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div style={{
                    position: 'absolute',
                    bottom: 24,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 8,
                    zIndex: 20
                }}>
                    {apps.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (scrollContainerRef.current) {
                                    scrollContainerRef.current.scrollTo({
                                        left: i * scrollContainerRef.current.offsetWidth,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            style={{
                                width: activeIndex === i ? 24 : 8,
                                height: 8,
                                borderRadius: 4,
                                background: activeIndex === i ? '#f97316' : 'rgba(0,0,0,0.2)',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
