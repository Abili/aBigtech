export default function InstallGuidePage() {
    return (
        <main style={{ background: 'var(--paper)' }}>
            {/* Header */}
            <section style={{
                background: 'var(--surface)',
                borderBottom: '1px solid var(--line)',
                padding: 'clamp(48px, 8vw, 80px) 24px'
            }}>
                <div style={{ maxWidth: 700, margin: '0 auto' }}>
                    <h1 style={{
                        fontSize: 'clamp(28px, 6vw, 40px)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 16,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        How to Install APK Files
                    </h1>
                    <p style={{
                        color: 'var(--ink-soft)',
                        fontSize: '16px',
                        lineHeight: 1.6
                    }}>
                        A step-by-step guide to installing the apps we publish directly, like Myuzek.
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
                            borderBottom: index < 4 ? '1px solid var(--line)' : 'none'
                        }}>
                            <div style={{
                                width: 48,
                                height: 48,
                                background: 'var(--kelly)',
                                color: '#0a0a0a',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '18px',
                                fontFamily: 'IBM Plex Sans, sans-serif',
                                flexShrink: 0
                            }}>
                                {item.step}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h2 style={{
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    color: 'var(--ink)',
                                    marginBottom: 12,
                                    fontFamily: 'IBM Plex Sans, sans-serif'
                                }}>
                                    {item.title}
                                </h2>
                                <p style={{
                                    fontSize: '15px',
                                    color: 'var(--ink-soft)',
                                    lineHeight: 1.7,
                                    marginBottom: 12
                                }}>
                                    {item.description}
                                </p>
                                <div style={{
                                    background: 'var(--kelly-tint)',
                                    border: '1px solid var(--line)',
                                    borderRadius: 8,
                                    padding: '12px 16px',
                                    fontSize: '13px',
                                    color: 'var(--kelly)'
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
                background: 'var(--surface)',
                padding: 'clamp(48px, 10vw, 80px) 24px'
            }}>
                <div style={{ maxWidth: 700, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 24,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Troubleshooting
                    </h2>

                    {[
                        { q: '"App not installed" error', a: 'This usually means a conflicting version is already installed. Uninstall the existing app first.' },
                        { q: '"Parse error" or "Problem parsing package"', a: 'The APK may be corrupted or incompatible with your Android version. Try re-downloading.' },
                        { q: 'Can\'t find the APK file', a: 'Check your Downloads folder. You can also search for ".apk" in your file manager.' }
                    ].map((item, i) => (
                        <div key={i} style={{
                            background: 'var(--paper)',
                            borderRadius: 12,
                            padding: 20,
                            border: '1px solid var(--line)',
                            marginBottom: i < 2 ? 16 : 0
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
                </div>
            </section>
        </main>
    );
}
