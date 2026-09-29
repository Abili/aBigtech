import { Link } from 'react-router-dom';

export default function SupportPage() {
    return (
        <main style={{ background: 'var(--surface)', minHeight: '100vh' }}>
            {/* Header */}
            <section style={{
                background: 'var(--paper)',
                borderBottom: '1px solid var(--line)',
                padding: 'clamp(48px, 8vw, 80px) 24px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <h1 style={{
                        fontSize: 'clamp(32px, 7vw, 48px)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 16,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Support Center
                    </h1>
                    <p style={{
                        color: 'var(--ink-soft)',
                        fontSize: '16px',
                        lineHeight: 1.6
                    }}>
                        Find answers to common questions, get help installing our apps, or get in touch about a project.
                    </p>
                </div>
            </section>

            {/* Support Options */}
            <section style={{ padding: '48px 24px' }}>
                <div style={{
                    maxWidth: 900,
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 24
                }}>
                    <Link to="/support/faq" style={{
                        background: 'var(--paper)',
                        borderRadius: 16,
                        padding: 32,
                        border: '1px solid var(--line)',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        transition: 'all 0.2s ease'
                    }}>
                        <div style={{
                            width: 64,
                            height: 64,
                            background: 'var(--kelly-tint)',
                            borderRadius: 16,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '28px',
                            marginBottom: 20
                        }}>
                            ❓
                        </div>
                        <h3 style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: 'var(--ink)',
                            marginBottom: 8,
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            FAQ
                        </h3>
                        <p style={{
                            fontSize: '14px',
                            color: 'var(--ink-soft)',
                            margin: 0
                        }}>
                            Common questions answered
                        </p>
                    </Link>

                    <Link to="/support/installation-guide" style={{
                        background: 'var(--paper)',
                        borderRadius: 16,
                        padding: 32,
                        border: '1px solid var(--line)',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        transition: 'all 0.2s ease'
                    }}>
                        <div style={{
                            width: 64,
                            height: 64,
                            background: 'var(--kelly-tint)',
                            borderRadius: 16,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '28px',
                            marginBottom: 20
                        }}>
                            📲
                        </div>
                        <h3 style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: 'var(--ink)',
                            marginBottom: 8,
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            Installation Guide
                        </h3>
                        <p style={{
                            fontSize: '14px',
                            color: 'var(--ink-soft)',
                            margin: 0
                        }}>
                            How to install APK files
                        </p>
                    </Link>

                    <Link to="/support/contact" style={{
                        background: 'var(--paper)',
                        borderRadius: 16,
                        padding: 32,
                        border: '1px solid var(--line)',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        transition: 'all 0.2s ease'
                    }}>
                        <div style={{
                            width: 64,
                            height: 64,
                            background: 'var(--kelly-tint)',
                            borderRadius: 16,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '28px',
                            marginBottom: 20
                        }}>
                            ✉️
                        </div>
                        <h3 style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: 'var(--ink)',
                            marginBottom: 8,
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            Contact Us
                        </h3>
                        <p style={{
                            fontSize: '14px',
                            color: 'var(--ink-soft)',
                            margin: 0
                        }}>
                            Get in touch with our team
                        </p>
                    </Link>
                </div>
            </section>

            {/* Quick Help */}
            <section style={{ padding: '0 24px 48px' }}>
                <div style={{
                    maxWidth: 700,
                    margin: '0 auto',
                    background: 'var(--paper)',
                    borderRadius: 16,
                    padding: 32,
                    border: '1px solid var(--line)'
                }}>
                    <h2 style={{
                        fontSize: '20px',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        marginBottom: 24,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Quick Answers
                    </h2>

                    {[
                        { q: 'Are the APKs safe to download?', a: 'Yes. Every app undergoes malware scanning and checksum verification before listing.' },
                        { q: 'How do I install an APK?', a: 'Download the file, enable "Install unknown apps" in settings, then open the APK.' },
                        { q: 'Do I need to create an account?', a: 'No. Downloads are completely free and require no registration.' }
                    ].map((item, i) => (
                        <div key={i} style={{
                            padding: '16px 0',
                            borderTop: i > 0 ? '1px solid var(--line)' : 'none'
                        }}>
                            <h4 style={{
                                fontSize: '15px',
                                fontWeight: 600,
                                color: 'var(--ink)',
                                marginBottom: 8,
                                fontFamily: 'IBM Plex Sans, sans-serif'
                            }}>
                                {item.q}
                            </h4>
                            <p style={{
                                fontSize: '14px',
                                color: 'var(--ink-soft)',
                                margin: 0,
                                lineHeight: 1.6
                            }}>
                                {item.a}
                            </p>
                        </div>
                    ))}

                    <Link to="/support/faq" style={{
                        display: 'inline-block',
                        marginTop: 16,
                        color: 'var(--kelly)',
                        fontSize: '14px',
                        fontWeight: 500,
                        textDecoration: 'none'
                    }}>
                        View all FAQs →
                    </Link>
                </div>
            </section>
        </main>
    );
}
