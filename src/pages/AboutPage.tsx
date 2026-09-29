import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <main style={{ background: 'var(--paper)' }}>
            {/* Hero */}
            <section style={{
                background: 'var(--surface)',
                padding: 'clamp(60px, 10vw, 100px) 24px',
                color: 'var(--ink)',
                borderBottom: '1px solid var(--line)'
            }}>
                <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: 'clamp(32px, 7vw, 52px)',
                        fontWeight: 700,
                        marginBottom: 20,
                        fontFamily: 'IBM Plex Sans, sans-serif',
                        color: 'var(--ink)'
                    }}>
                        About aBig Tech
                    </h1>
                    <p style={{
                        fontSize: 'clamp(16px, 3vw, 20px)',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.6,
                        maxWidth: 600,
                        margin: '0 auto'
                    }}>
                        A software development company building mobile apps, web apps, and custom software — and the team behind aBigTech Talent.
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
                        color: 'var(--ink)',
                        marginBottom: 24,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Our Mission
                    </h2>
                    <p style={{
                        fontSize: '17px',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.8,
                        marginBottom: 24
                    }}>
                        aBig Tech is a software development company. We design and build mobile apps, web apps, and custom software for businesses — from concept through to deployment — and we ship a handful of products of our own, like Myuzek.
                    </p>
                    <p style={{
                        fontSize: '17px',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.8
                    }}>
                        We're also the team behind <strong style={{ color: 'var(--ink)' }}>aBigTech Talent</strong>, a separate program that connects developers with remote opportunities abroad — no fee, ever, to the developer. Every app we publish directly goes through the same verification and security process, whether it's client work or one of our own.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section style={{
                background: 'var(--surface)',
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(24px, 5vw, 32px)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 32,
                        fontFamily: 'IBM Plex Sans, sans-serif',
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
                                desc: 'Every decision we make — in the software we build and the apps we publish — prioritizes safety and security.'
                            },
                            {
                                icon: '🔍',
                                title: 'Transparency',
                                desc: "We're upfront about how we build and ship software, and we publish verification details for every app we release directly."
                            },
                            {
                                icon: '⚡',
                                title: 'Simplicity',
                                desc: 'Clean products and a straightforward development process, with no unnecessary friction for clients or users.'
                            },
                            {
                                icon: '🛡️',
                                title: 'Trust',
                                desc: 'Building trust through consistent security practices and honest communication — with clients, users, and developers alike.'
                            }
                        ].map(item => (
                            <div key={item.title} style={{
                                background: 'var(--paper)',
                                borderRadius: 12,
                                padding: 24,
                                border: '1px solid var(--line)',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '32px', marginBottom: 16 }}>{item.icon}</div>
                                <h3 style={{
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: 'var(--ink)',
                                    marginBottom: 8,
                                    fontFamily: 'IBM Plex Sans, sans-serif'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '14px',
                                    color: 'var(--ink-soft)',
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

            {/* Talent */}
            <section style={{
                padding: 'clamp(48px, 10vw, 80px) 24px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(20px, 4vw, 28px)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 16,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Looking for remote work instead?
                    </h2>
                    <p style={{
                        color: 'var(--ink-soft)',
                        fontSize: '16px',
                        marginBottom: 24
                    }}>
                        aBigTech Talent connects developers with companies abroad hiring remote talent — no fee, ever.
                    </p>
                    <a
                        href="https://talent.abigtech256.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ textDecoration: 'none' }}
                    >
                        Explore aBigTech Talent
                        <span>↗</span>
                    </a>
                </div>
            </section>

            {/* CTA */}
            <section style={{
                background: 'var(--surface)',
                padding: 'clamp(48px, 10vw, 80px) 24px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(20px, 4vw, 28px)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 16,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Questions?
                    </h2>
                    <p style={{
                        color: 'var(--ink-soft)',
                        fontSize: '16px',
                        marginBottom: 24
                    }}>
                        We're here to help. Reach out to our support team anytime.
                    </p>
                    <Link to="/support/contact" style={{
                        display: 'inline-flex',
                        background: 'var(--kelly)',
                        color: '#0a0a0a',
                        padding: '14px 28px',
                        borderRadius: 10,
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '15px',
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
