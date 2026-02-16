export default function InstallGuidePage() {
    return (
        <main style={{ background: '#fff' }}>
            {/* Header */}
            <section style={{
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                padding: 'clamp(48px, 8vw, 80px) 24px'
            }}>
                <div style={{ maxWidth: 700, margin: '0 auto' }}>
                    <h1 style={{
                        fontSize: 'clamp(28px, 6vw, 40px)',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: 16,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        How to Install APK Files
                    </h1>
                    <p style={{
                        color: '#64748b',
                        fontSize: '16px',
                        lineHeight: 1.6
                    }}>
                        A step-by-step guide to installing Android applications from APK files.
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section style={{ padding: 'clamp(48px, 10vw, 80px) 24px' }}>
                <div style={{ maxWidth: 700, margin: '0 auto' }}>
                    {[
                        {
                            step: '1',
                            title: 'Download the APK',
                            description: 'Click the Download button on any app page. The APK file will be saved to your device\'s Downloads folder.',
                            tip: 'Make note of the checksum displayed on the download page to verify the file later.'
                        },
                        {
                            step: '2',
                            title: 'Enable Unknown Sources',
                            description: 'Go to Settings → Security (or Privacy) → Enable "Install unknown apps" for your browser or file manager.',
                            tip: 'On Android 8+, you grant this permission per-app rather than system-wide.'
                        },
                        {
                            step: '3',
                            title: 'Open the APK File',
                            description: 'Navigate to your Downloads folder and tap the APK file. You can also tap the download notification.',
                            tip: 'Use a file manager app if you can\'t find the Downloads folder.'
                        },
                        {
                            step: '4',
                            title: 'Confirm Installation',
                            description: 'Review the permissions the app requests, then tap "Install" to proceed.',
                            tip: 'Only install apps from sources you trust.'
                        },
                        {
                            step: '5',
                            title: 'Launch the App',
                            description: 'Once installed, tap "Open" or find the app in your app drawer.',
                            tip: 'You can disable "Install unknown apps" after installation for added security.'
                        }
                    ].map((item, index) => (
                        <div key={item.step} style={{
                            display: 'flex',
                            gap: 24,
                            marginBottom: index < 4 ? 40 : 0,
                            paddingBottom: index < 4 ? 40 : 0,
                            borderBottom: index < 4 ? '1px solid #f1f5f9' : 'none'
                        }}>
                            <div style={{
                                width: 48,
                                height: 48,
                                background: '#4f46e5',
                                color: '#fff',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '18px',
                                fontFamily: 'Inter, system-ui, sans-serif',
                                flexShrink: 0
                            }}>
                                {item.step}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h2 style={{
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    color: '#0f172a',
                                    marginBottom: 12,
                                    fontFamily: 'Inter, system-ui, sans-serif'
                                }}>
                                    {item.title}
                                </h2>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#475569',
                                    lineHeight: 1.7,
                                    marginBottom: 12
                                }}>
                                    {item.description}
                                </p>
                                <div style={{
                                    background: '#f0fdf4',
                                    border: '1px solid #bbf7d0',
                                    borderRadius: 8,
                                    padding: '12px 16px',
                                    fontSize: '13px',
                                    color: '#166534'
                                }}>
                                    <strong>Tip:</strong> {item.tip}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Troubleshooting */}
            <section style={{
                background: '#f8fafc',
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <div style={{ maxWidth: 700, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: 24,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Troubleshooting
                    </h2>

                    {[
                        { q: '"App not installed" error', a: 'This usually means a conflicting version is already installed. Uninstall the existing app first.' },
                        { q: '"Parse error" or "Problem parsing package"', a: 'The APK may be corrupted or incompatible with your Android version. Try re-downloading.' },
                        { q: 'Can\'t find the APK file', a: 'Check your Downloads folder. You can also search for ".apk" in your file manager.' }
                    ].map((item, i) => (
                        <div key={i} style={{
                            background: '#fff',
                            borderRadius: 12,
                            padding: 20,
                            border: '1px solid #e2e8f0',
                            marginBottom: i < 2 ? 16 : 0
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
                </div>
            </section>
        </main>
    );
}
