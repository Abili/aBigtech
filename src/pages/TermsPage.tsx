export default function TermsPage() {
    return (
        <main style={{ background: '#fff' }}>
            <section style={{
                maxWidth: 800,
                margin: '0 auto',
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <h1 style={{
                    fontSize: 'clamp(32px, 7vw, 48px)',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: 16,
                    fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                    Terms of Service
                </h1>
                <p style={{
                    fontSize: '14px',
                    color: '#64748b',
                    marginBottom: 40
                }}>
                    Last Updated: February 2026
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#0f172a',
                            marginBottom: 16,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Acceptance of Terms
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8
                        }}>
                            By accessing or using aBig Tech, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#0f172a',
                            marginBottom: 16,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Use of Service
                        </h2>
                        <ul style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8,
                            paddingLeft: 24,
                            margin: 0
                        }}>
                            <li style={{ marginBottom: 8 }}>You may download APK files for personal use only</li>
                            <li style={{ marginBottom: 8 }}>You may not redistribute, sell, or modify APK files obtained from our platform</li>
                            <li>You are responsible for verifying compatibility with your device</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#0f172a',
                            marginBottom: 16,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Intellectual Property
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8
                        }}>
                            All applications listed on aBig Tech are the property of their respective developers. aBig Tech does not claim ownership of any third-party applications.
                        </p>
                    </section>

                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#0f172a',
                            marginBottom: 16,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Disclaimer
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8
                        }}>
                            While we make every effort to verify the safety and integrity of listed applications, aBig Tech is provided "as is" without warranties of any kind. You download and install applications at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#0f172a',
                            marginBottom: 16,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Limitation of Liability
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8
                        }}>
                            aBig Tech shall not be liable for any damages arising from the use or inability to use our services, including but not limited to damages caused by applications downloaded from our platform.
                        </p>
                    </section>

                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#0f172a',
                            marginBottom: 16,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Changes to Terms
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8
                        }}>
                            We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
                        </p>
                    </section>
                </div>
            </section>
        </main>
    );
}
