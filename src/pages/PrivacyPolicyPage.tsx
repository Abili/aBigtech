export default function PrivacyPolicyPage() {
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
                    Privacy Policy
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
                            Overview
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8
                        }}>
                            aBig Tech is committed to protecting your privacy. This policy explains what data we collect when you use our platform to download Android applications.
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
                            Data We Collect
                        </h2>
                        <ul style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8,
                            paddingLeft: 24,
                            margin: 0
                        }}>
                            <li style={{ marginBottom: 8 }}><strong>Usage Data:</strong> Basic analytics including page views and download counts. No personal identifiers are collected.</li>
                            <li style={{ marginBottom: 8 }}><strong>Technical Data:</strong> Standard server logs (IP address, browser type, device info) for security and debugging purposes.</li>
                            <li><strong>No Account Data:</strong> We do not require account creation. No email, name, or other personal information is collected.</li>
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
                            How We Use Data
                        </h2>
                        <ul style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8,
                            paddingLeft: 24,
                            margin: 0
                        }}>
                            <li style={{ marginBottom: 8 }}>To serve APK downloads</li>
                            <li style={{ marginBottom: 8 }}>To monitor platform security and prevent abuse</li>
                            <li>To improve our services through aggregate analytics</li>
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
                            Third-Party Services
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8
                        }}>
                            We may use third-party services for analytics and content delivery. These services have their own privacy policies governing data handling.
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
                            Data Security
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8
                        }}>
                            We implement appropriate technical and organizational measures to protect against unauthorized access, alteration, or destruction of data.
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
                            Contact Us
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: '#475569',
                            lineHeight: 1.8
                        }}>
                            If you have questions about this Privacy Policy, please contact us through our support page.
                        </p>
                    </section>
                </div>
            </section>
        </main>
    );
}
