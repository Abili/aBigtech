import { Link } from 'react-router-dom';

export default function SecurityPage() {
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
                    <div style={{
                        fontSize: '48px',
                        marginBottom: 24
                    }}>
                        🛡️
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(32px, 7vw, 52px)',
                        fontWeight: 700,
                        marginBottom: 20,
                        fontFamily: 'IBM Plex Sans, sans-serif',
                        color: 'var(--ink)'
                    }}>
                        Security & Verification
                    </h1>
                    <p style={{
                        fontSize: 'clamp(16px, 3vw, 20px)',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.6,
                        maxWidth: 600,
                        margin: '0 auto'
                    }}>
                        Security is built into how we develop software, and into every app we publish directly — here's how we verify, scan, and secure them.
                    </p>
                </div>
            </section>

            {/* Our Commitment */}
            <section style={{
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(24px, 5vw, 32px)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 32,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Our Security Commitment
                    </h2>

                    <div style={{
                        display: 'grid',
                        gap: 24
                    }}>
                        {[
                            {
                                icon: '✓',
                                title: 'Checksum Verification',
                                description: 'Every APK is verified using SHA-256 cryptographic hashes. You can independently verify that the file you downloaded matches our published checksum.'
                            },
                            {
                                icon: '🔍',
                                title: 'Malware Scanning',
                                description: 'All applications undergo multi-layer malware scanning before being listed. Scans are repeated periodically to catch emerging threats.'
                            },
                            {
                                icon: '🔏',
                                title: 'Signature Verification',
                                description: 'We verify that APKs are signed with valid developer certificates and that signatures remain consistent across versions.'
                            },
                            {
                                icon: '📋',
                                title: 'Permission Analysis',
                                description: 'Each app\'s permissions are documented and displayed clearly, so you know exactly what access an app requests before installing.'
                            }
                        ].map(item => (
                            <div key={item.title} style={{
                                display: 'flex',
                                gap: 20,
                                padding: 24,
                                background: 'var(--surface)',
                                borderRadius: 12,
                                border: '1px solid var(--line)'
                            }}>
                                <div style={{
                                    width: 48,
                                    height: 48,
                                    background: 'var(--kelly-tint)',
                                    borderRadius: 12,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px',
                                    flexShrink: 0
                                }}>
                                    {item.icon}
                                </div>
                                <div>
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
                                        fontSize: '15px',
                                        color: 'var(--ink-soft)',
                                        lineHeight: 1.6,
                                        fontFamily: 'IBM Plex Sans, sans-serif',
                                        margin: 0
                                    }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Check */}
            <section style={{
                background: 'var(--surface)',
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(24px, 5vw, 32px)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 16,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Verification Process
                    </h2>
                    <p style={{
                        color: 'var(--ink-soft)',
                        fontSize: '16px',
                        marginBottom: 32,
                        maxWidth: 600
                    }}>
                        Before any app appears on aBig Tech, it goes through our multi-step verification process:
                    </p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0
                    }}>
                        {[
                            { step: '1', title: 'Source Verification', desc: 'Confirm the APK source and developer authenticity' },
                            { step: '2', title: 'Static Analysis', desc: 'Analyze code structure and detect suspicious patterns' },
                            { step: '3', title: 'Malware Scan', desc: 'Run through multiple malware detection engines' },
                            { step: '4', title: 'Signature Check', desc: 'Verify digital signature integrity and validity' },
                            { step: '5', title: 'Permission Review', desc: 'Document all requested permissions with explanations' },
                            { step: '6', title: 'Checksum Generation', desc: 'Generate and publish SHA-256 hash for verification' }
                        ].map((item, index, arr) => (
                            <div key={item.step} style={{
                                display: 'flex',
                                gap: 20,
                                padding: '24px 0',
                                borderBottom: index < arr.length - 1 ? '1px solid var(--line)' : 'none'
                            }}>
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    background: 'var(--kelly)',
                                    color: '#0a0a0a',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'IBM Plex Sans, sans-serif',
                                    flexShrink: 0
                                }}>
                                    {item.step}
                                </div>
                                <div>
                                    <h3 style={{
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: 'var(--ink)',
                                        marginBottom: 4,
                                        fontFamily: 'IBM Plex Sans, sans-serif'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '14px',
                                        color: 'var(--ink-soft)',
                                        fontFamily: 'IBM Plex Sans, sans-serif',
                                        margin: 0
                                    }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DIY Verification */}
            <section style={{
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(24px, 5vw, 32px)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 16,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Verify It Yourself
                    </h2>
                    <p style={{
                        color: 'var(--ink-soft)',
                        fontSize: '16px',
                        marginBottom: 32,
                        maxWidth: 600
                    }}>
                        We encourage you to verify downloads independently. Each app page displays its SHA-256 checksum.
                    </p>

                    <div style={{
                        background: '#1e293b',
                        borderRadius: 12,
                        padding: 24,
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        color: 'var(--ink-soft)',
                        overflowX: 'auto'
                    }}>
                        <div style={{ color: 'var(--ink-soft)', marginBottom: 8 }}># Linux / macOS</div>
                        <div style={{ color: 'var(--line)' }}>sha256sum downloaded-app.apk</div>
                        <div style={{ color: 'var(--ink-soft)', marginTop: 16, marginBottom: 8 }}># Windows (PowerShell)</div>
                        <div style={{ color: 'var(--line)' }}>Get-FileHash downloaded-app.apk -Algorithm SHA256</div>
                    </div>

                    <p style={{
                        color: 'var(--ink-soft)',
                        fontSize: '14px',
                        marginTop: 16
                    }}>
                        Compare the output with the checksum shown on the app's download page.
                    </p>
                </div>
            </section>

            {/* Report */}
            <section style={{
                background: 'rgba(179, 38, 30, 0.1)',
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <div style={{
                    maxWidth: 700,
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(20px, 4vw, 28px)',
                        fontWeight: 700,
                        color: 'var(--amber)',
                        marginBottom: 16,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Report a Security Issue
                    </h2>
                    <p style={{
                        color: 'var(--ink-soft)',
                        fontSize: '15px',
                        marginBottom: 24,
                        lineHeight: 1.6
                    }}>
                        Found something suspicious? We take security reports seriously and investigate all claims.
                    </p>
                    <Link to="/support/contact" style={{
                        display: 'inline-flex',
                        background: 'var(--amber)',
                        color: '#ffffff',
                        padding: '12px 24px',
                        borderRadius: 8,
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '14px',
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Report Issue
                    </Link>
                </div>
            </section>
        </main>
    );
}
