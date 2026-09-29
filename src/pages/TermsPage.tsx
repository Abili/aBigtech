export default function TermsPage() {
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
                    Terms of Service
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
                            Acceptance of Terms
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8
                        }}>
                            By accessing or using aBig Tech (abigtech256.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services. aBigTech Talent, our remote developer placement program, is a separate program at talent.abigtech256.com with its own terms.
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
                            Our Services
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8
                        }}>
                            aBig Tech is a software development company. We build mobile apps, web apps, and custom software for clients, and we publish a small number of our own apps directly for download on this site.
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
                            Use of Our Apps
                        </h2>
                        <ul style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8,
                            paddingLeft: 24,
                            margin: 0
                        }}>
                            <li style={{ marginBottom: 8 }}>You may download and use our published apps for personal use</li>
                            <li style={{ marginBottom: 8 }}>You may not redistribute, sell, or modify APK files obtained from our site</li>
                            <li>You are responsible for verifying compatibility with your device before installing</li>
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
                            Intellectual Property
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8
                        }}>
                            Apps published directly on abigtech256.com are built and owned by aBig Tech unless otherwise noted. Custom software we build for clients is governed by the agreement with that client, not by these terms.
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
                            Disclaimer
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8
                        }}>
                            While we make every effort to verify the safety and integrity of apps we publish, they are provided "as is" without warranties of any kind. You download and install applications at your own risk.
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
                            Limitation of Liability
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
                            lineHeight: 1.8
                        }}>
                            aBig Tech shall not be liable for any damages arising from the use or inability to use our services, including but not limited to damages caused by apps downloaded from our site.
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
                            Changes to Terms
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-soft)',
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
