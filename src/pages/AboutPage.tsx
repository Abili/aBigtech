import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <main style={{ background: '#fff' }}>
            {/* Hero */}
            <section style={{
                background: '#fafafa',
                padding: 'clamp(60px, 10vw, 100px) 24px',
                color: '#0a0a0a',
                borderBottom: '1px solid #e5e5e5'
            }}>
                <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: 'clamp(32px, 7vw, 52px)',
                        fontWeight: 700,
                        marginBottom: 20,
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: '#0a0a0a'
                    }}>
                        About aBig Tech
                    </h1>
                    <p style={{
                        fontSize: 'clamp(16px, 3vw, 20px)',
                        color: '#525252',
                        lineHeight: 1.6,
                        maxWidth: 600,
                        margin: '0 auto'
                    }}>
                        A software development and consultancy company building innovative solutions.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section style={{
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <div style={{ maxWidth: 800, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(24px, 5vw, 32px)',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: 24,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Our Mission
                    </h2>
                    <p style={{
                        fontSize: '17px',
                        color: '#475569',
                        lineHeight: 1.8,
                        marginBottom: 24
                    }}>
                        aBig Tech exists to provide users with a secure, transparent way to download Android applications outside of traditional app stores. We believe in user choice and the freedom to install applications directly.
                    </p>
                    <p style={{
                        fontSize: '17px',
                        color: '#475569',
                        lineHeight: 1.8
                    }}>
                        Unlike other APK sites, we prioritize security and trust above all else. Every application listed on our platform undergoes rigorous verification, malware scanning, and signature validation before being made available for download.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section style={{
                background: '#f8fafc',
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(24px, 5vw, 32px)',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: 32,
                        fontFamily: 'Inter, system-ui, sans-serif',
                        textAlign: 'center'
                    }}>
                        Our Values
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: 24
                    }}>
                        {[
                            {
                                icon: '🔐',
                                title: 'Security First',
                                desc: 'Every decision we make prioritizes user safety and security.'
                            },
                            {
                                icon: '🔍',
                                title: 'Transparency',
                                desc: 'We show exactly how we verify apps and encourage independent verification.'
                            },
                            {
                                icon: '⚡',
                                title: 'Simplicity',
                                desc: 'Direct downloads without accounts, tracking, or unnecessary friction.'
                            },
                            {
                                icon: '🛡️',
                                title: 'Trust',
                                desc: 'Building trust through consistent security practices and honest communication.'
                            }
                        ].map(item => (
                            <div key={item.title} style={{
                                background: '#fff',
                                borderRadius: 12,
                                padding: 24,
                                border: '1px solid #e2e8f0',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '32px', marginBottom: 16 }}>{item.icon}</div>
                                <h3 style={{
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: '#0f172a',
                                    marginBottom: 8,
                                    fontFamily: 'Inter, system-ui, sans-serif'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '14px',
                                    color: '#64748b',
                                    lineHeight: 1.6,
                                    margin: 0
                                }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{
                padding: 'clamp(48px, 10vw, 80px) 24px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(20px, 4vw, 28px)',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: 16,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Questions?
                    </h2>
                    <p style={{
                        color: '#64748b',
                        fontSize: '16px',
                        marginBottom: 24
                    }}>
                        We're here to help. Reach out to our support team anytime.
                    </p>
                    <Link to="/support/contact" style={{
                        display: 'inline-flex',
                        background: '#f97316',
                        color: '#fff',
                        padding: '14px 28px',
                        borderRadius: 10,
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '15px',
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
