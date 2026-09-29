export default function PrivacyPolicyPage() {
    return (
        <main style={{ background: 'var(--paper)' }}>
            <section style={{
                maxWidth: 800,
                margin: '0 auto',
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <h1 style={{
                    fontSize: 'clamp(32px, 7vw, 48px)',
                    fontWeight: 700,
                    color: 'var(--ink)',
                    marginBottom: 16,
                    fontFamily: 'IBM Plex Sans, sans-serif'
                }}>
                    Privacy Policy
                </h1>
                <p style={{
                    fontSize: '14px',
                    color: 'var(--ink-soft)',
                    marginBottom: 40
                }}>
                    Last Updated: February 2026
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: 'var(--ink)',
                            marginBottom: 16,
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            Overview
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8
                        }}>
                            aBig Tech is a software development company. This policy covers this website (abigtech256.com) and the apps we publish directly for download here. It explains what data we collect and how we use it.
                        </p>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8,
                            marginTop: 12
                        }}>
                            aBigTech Talent, our remote developer placement program, runs on its own site at talent.abigtech256.com and handles applicant data separately — this policy does not cover it.
                        </p>
                    </section>

                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: 'var(--ink)',
                            marginBottom: 16,
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            Data We Collect
                        </h2>
                        <ul style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8,
                            paddingLeft: 24,
                            margin: 0
                        }}>
                            <li style={{ marginBottom: 8 }}><strong>Account Data:</strong> If you sign in with Google (to leave a review or access admin tools), we receive your name, email, and profile photo from Google.</li>
                            <li style={{ marginBottom: 8 }}><strong>Reviews:</strong> If you write a review, your name, photo, star rating, and comment are stored and shown publicly on the relevant app page.</li>
                            <li style={{ marginBottom: 8 }}><strong>Usage Data:</strong> Basic analytics including page views and download counts.</li>
                            <li><strong>Technical Data:</strong> Standard server logs (IP address, browser type, device info) for security and debugging purposes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: 'var(--ink)',
                            marginBottom: 16,
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            How We Use Data
                        </h2>
                        <ul style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8,
                            paddingLeft: 24,
                            margin: 0
                        }}>
                            <li style={{ marginBottom: 8 }}>To let you sign in, leave reviews, and download our apps</li>
                            <li style={{ marginBottom: 8 }}>To monitor site security and prevent abuse</li>
                            <li>To improve our services through aggregate analytics</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: 'var(--ink)',
                            marginBottom: 16,
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            Third-Party Services
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8
                        }}>
                            We use Google Sign-In for authentication and Firebase (Google Cloud) for hosting, data storage, and analytics. These providers have their own privacy policies governing how they handle data.
                        </p>
                    </section>

                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: 'var(--ink)',
                            marginBottom: 16,
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            Data Security
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8
                        }}>
                            We implement appropriate technical and organizational measures to protect against unauthorized access, alteration, or destruction of data.
                        </p>
                    </section>

                    <section>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            color: 'var(--ink)',
                            marginBottom: 16,
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            Contact Us
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
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
