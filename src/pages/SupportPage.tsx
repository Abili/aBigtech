import { Link } from 'react-router-dom';

export default function SupportPage() {
    return (
        <main style={{ background: '#f8fafc', minHeight: '100vh' }}>
            {/* Header */}
            <section style={{
                background: '#fff',
                borderBottom: '1px solid #e2e8f0',
                padding: 'clamp(48px, 8vw, 80px) 24px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <h1 style={{
                        fontSize: 'clamp(32px, 7vw, 48px)',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: 16,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Support Center
                    </h1>
                    <p style={{
                        color: '#64748b',
                        fontSize: '16px',
                        lineHeight: 1.6
                    }}>
                        Find answers to common questions or get in touch with our team.
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
                        background: '#fff',
                        borderRadius: 16,
                        padding: 32,
                        border: '1px solid #e2e8f0',
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
                            background: '#e0e7ff',
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
                            color: '#0f172a',
                            marginBottom: 8,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            FAQ
                        </h3>
                        <p style={{
                            fontSize: '14px',
                            color: '#64748b',
                            margin: 0
                        }}>
                            Common questions answered
                        </p>
                    </Link>

                    <Link to="/support/installation-guide" style={{
                        background: '#fff',
                        borderRadius: 16,
                        padding: 32,
                        border: '1px solid #e2e8f0',
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
                            background: '#dcfce7',
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
                            color: '#0f172a',
                            marginBottom: 8,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Installation Guide
                        </h3>
                        <p style={{
                            fontSize: '14px',
                            color: '#64748b',
                            margin: 0
                        }}>
                            How to install APK files
                        </p>
                    </Link>

                    <Link to="/support/contact" style={{
                        background: '#fff',
                        borderRadius: 16,
                        padding: 32,
                        border: '1px solid #e2e8f0',
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
                            background: '#fef3c7',
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
                            color: '#0f172a',
                            marginBottom: 8,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Contact Us
                        </h3>
                        <p style={{
                            fontSize: '14px',
                            color: '#64748b',
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
                    background: '#fff',
                    borderRadius: 16,
                    padding: 32,
                    border: '1px solid #e2e8f0'
                }}>
                    <h2 style={{
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#0f172a',
                        marginBottom: 24,
                        fontFamily: 'Inter, system-ui, sans-serif'
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
                            borderTop: i > 0 ? '1px solid #f1f5f9' : 'none'
                        }}>
                            <h4 style={{
                                fontSize: '15px',
                                fontWeight: 600,
                                color: '#0f172a',
                                marginBottom: 8,
                                fontFamily: 'Inter, system-ui, sans-serif'
                            }}>
                                {item.q}
                            </h4>
                            <p style={{
                                fontSize: '14px',
                                color: '#64748b',
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
                        color: '#f97316',
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
