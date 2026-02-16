import { Link } from 'react-router-dom';

export default function SecurityPage() {
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
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: '#0a0a0a'
                    }}>
                        Security & Verification
                    </h1>
                    <p style={{
                        fontSize: 'clamp(16px, 3vw, 20px)',
                        color: '#525252',
                        lineHeight: 1.6,
                        maxWidth: 600,
                        margin: '0 auto'
                    }}>
                        Transparency in how we verify, scan, and secure every application on our platform.
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
                        color: '#0f172a',
                        marginBottom: 32,
                        fontFamily: 'Inter, system-ui, sans-serif'
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
                                background: '#f8fafc',
                                borderRadius: 12,
                                border: '1px solid #e2e8f0'
                            }}>
                                <div style={{
                                    width: 48,
                                    height: 48,
                                    background: 'rgba(249, 115, 22, 0.1)',
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
                                        color: '#0f172a',
                                        marginBottom: 8,
                                        fontFamily: 'Inter, system-ui, sans-serif'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '15px',
                                        color: '#64748b',
                                        lineHeight: 1.6,
                                        fontFamily: 'Inter, system-ui, sans-serif',
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
                background: '#f8fafc',
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(24px, 5vw, 32px)',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: 16,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Verification Process
                    </h2>
                    <p style={{
                        color: '#64748b',
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
                                borderBottom: index < arr.length - 1 ? '1px solid #e2e8f0' : 'none'
                            }}>
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    background: '#f97316',
                                    color: '#fff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    fontFamily: 'Inter, system-ui, sans-serif',
                                    flexShrink: 0
                                }}>
                                    {item.step}
                                </div>
                                <div>
                                    <h3 style={{
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: '#0f172a',
                                        marginBottom: 4,
                                        fontFamily: 'Inter, system-ui, sans-serif'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '14px',
                                        color: '#64748b',
                                        fontFamily: 'Inter, system-ui, sans-serif',
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
                        color: '#0f172a',
                        marginBottom: 16,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Verify It Yourself
                    </h2>
                    <p style={{
                        color: '#64748b',
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
                        color: '#94a3b8',
                        overflowX: 'auto'
                    }}>
                        <div style={{ color: '#64748b', marginBottom: 8 }}># Linux / macOS</div>
                        <div style={{ color: '#e2e8f0' }}>sha256sum downloaded-app.apk</div>
                        <div style={{ color: '#64748b', marginTop: 16, marginBottom: 8 }}># Windows (PowerShell)</div>
                        <div style={{ color: '#e2e8f0' }}>Get-FileHash downloaded-app.apk -Algorithm SHA256</div>
                    </div>

                    <p style={{
                        color: '#64748b',
                        fontSize: '14px',
                        marginTop: 16
                    }}>
                        Compare the output with the checksum shown on the app's download page.
                    </p>
                </div>
            </section>

            {/* Report */}
            <section style={{
                background: '#fef2f2',
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
                        color: '#991b1b',
                        marginBottom: 16,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Report a Security Issue
                    </h2>
                    <p style={{
                        color: '#b91c1c',
                        fontSize: '15px',
                        marginBottom: 24,
                        lineHeight: 1.6
                    }}>
                        Found something suspicious? We take security reports seriously and investigate all claims.
                    </p>
                    <Link to="/support/contact" style={{
                        display: 'inline-flex',
                        background: '#dc2626',
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: 8,
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '14px',
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Report Issue
                    </Link>
                </div>
            </section>
        </main>
    );
}
