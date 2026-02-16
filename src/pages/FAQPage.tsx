import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    title: string;
    icon: string;
    items: FAQItem[];
}

const faqData: FAQCategory[] = [
    {
        title: 'General',
        icon: '📱',
        items: [
            {
                question: 'What is aBig Tech?',
                answer: 'aBig Tech is a software development and consultancy company that also distributes verified Android applications. We build custom mobile apps, software solutions, and provide technical consultancy services.'
            },
            {
                question: 'Do I need to create an account?',
                answer: 'No, downloads are completely free and require no registration. You can download any app directly without signing up.'
            },
            {
                question: 'Is aBig Tech free to use?',
                answer: 'Yes, browsing and downloading apps from aBig Tech is completely free. There are no hidden fees or subscriptions.'
            }
        ]
    },
    {
        title: 'Downloads',
        icon: '⬇️',
        items: [
            {
                question: 'Are the APKs safe to download?',
                answer: 'Yes. Every application undergoes rigorous verification, malware scanning, and signature validation before being made available. We use SHA-256 checksums for file integrity verification.'
            },
            {
                question: 'Why are downloads in APK format?',
                answer: 'APK (Android Package Kit) is the standard format for Android applications. It allows direct installation without going through the Play Store, giving users more control over their devices.'
            },
            {
                question: 'Can I download older versions of apps?',
                answer: 'Yes, we maintain version history for all apps. Visit any app page and scroll to the version history section to download previous versions.'
            }
        ]
    },
    {
        title: 'Security',
        icon: '🔒',
        items: [
            {
                question: 'How do you verify apps?',
                answer: 'We use a multi-step verification process including source verification, static code analysis, malware scanning with multiple engines, signature verification, and permission review.'
            },
            {
                question: 'What is a checksum and how do I verify it?',
                answer: 'A checksum (SHA-256) is a unique fingerprint of a file. You can verify downloads by comparing the checksum shown on our site with the one generated locally using tools like sha256sum (Linux/Mac) or Get-FileHash (Windows).'
            },
            {
                question: 'What should I do if I find a security issue?',
                answer: 'Please report any security concerns immediately through our Contact page. We take all reports seriously and investigate thoroughly.'
            }
        ]
    },
    {
        title: 'Installation',
        icon: '📲',
        items: [
            {
                question: 'How do I install an APK file?',
                answer: 'Download the APK, go to Settings > Security, enable "Install from Unknown Sources" or "Install unknown apps" for your browser, then open the downloaded APK file to install.'
            },
            {
                question: 'Why does my phone say "App not installed"?',
                answer: 'This can happen if: (1) you have an older version installed - uninstall it first, (2) insufficient storage space, (3) the APK is corrupted - try re-downloading, or (4) the app is not compatible with your device.'
            },
            {
                question: 'What Android version do I need?',
                answer: 'Each app has specific Android version requirements listed on its download page. Check the "Requirements" section before downloading.'
            }
        ]
    }
];

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        setOpenItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <main style={{ background: '#f8fafc', minHeight: '100vh' }}>
            {/* Header */}
            <section style={{
                background: '#fff',
                borderBottom: '1px solid #e5e5e5',
                padding: 'clamp(48px, 8vw, 80px) 24px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <Link to="/support" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        color: '#f97316',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 500,
                        marginBottom: 16,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        ← Back to Support
                    </Link>
                    <h1 style={{
                        fontSize: 'clamp(32px, 7vw, 48px)',
                        fontWeight: 700,
                        color: '#0a0a0a',
                        marginBottom: 16,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Frequently Asked Questions
                    </h1>
                    <p style={{
                        color: '#525252',
                        fontSize: '16px',
                        lineHeight: 1.6
                    }}>
                        Find answers to common questions about aBig Tech
                    </p>
                </div>
            </section>

            {/* FAQ Categories */}
            <section style={{ padding: '48px 24px' }}>
                <div style={{ maxWidth: 800, margin: '0 auto' }}>
                    {faqData.map(category => (
                        <div key={category.title} style={{ marginBottom: 40 }}>
                            <h2 style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                fontSize: '20px',
                                fontWeight: 600,
                                color: '#0a0a0a',
                                marginBottom: 16,
                                fontFamily: 'Inter, system-ui, sans-serif'
                            }}>
                                <span>{category.icon}</span>
                                {category.title}
                            </h2>

                            <div style={{
                                background: '#fff',
                                borderRadius: 16,
                                border: '1px solid #e5e5e5',
                                overflow: 'hidden'
                            }}>
                                {category.items.map((item, index) => {
                                    const itemId = `${category.title}-${index}`;
                                    const isOpen = openItems.has(itemId);

                                    return (
                                        <div key={index} style={{
                                            borderTop: index > 0 ? '1px solid #e5e5e5' : 'none'
                                        }}>
                                            <button
                                                onClick={() => toggleItem(itemId)}
                                                style={{
                                                    width: '100%',
                                                    padding: '18px 20px',
                                                    background: 'transparent',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    textAlign: 'left'
                                                }}
                                            >
                                                <span style={{
                                                    fontSize: '15px',
                                                    fontWeight: 500,
                                                    color: '#0a0a0a',
                                                    fontFamily: 'Inter, system-ui, sans-serif'
                                                }}>
                                                    {item.question}
                                                </span>
                                                <span style={{
                                                    fontSize: '18px',
                                                    color: '#f97316',
                                                    transition: 'transform 0.2s ease',
                                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                                }}>
                                                    ▼
                                                </span>
                                            </button>
                                            {isOpen && (
                                                <div style={{
                                                    padding: '0 20px 18px',
                                                    fontSize: '14px',
                                                    color: '#525252',
                                                    lineHeight: 1.7,
                                                    fontFamily: 'Inter, system-ui, sans-serif'
                                                }}>
                                                    {item.answer}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Still need help? */}
            <section style={{
                background: '#fff',
                borderTop: '1px solid #e5e5e5',
                padding: '48px 24px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: 500, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 600,
                        color: '#0a0a0a',
                        marginBottom: 12,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Still have questions?
                    </h2>
                    <p style={{
                        color: '#525252',
                        fontSize: '15px',
                        marginBottom: 24
                    }}>
                        Can't find what you're looking for? Get in touch with our team.
                    </p>
                    <Link to="/support/contact" style={{
                        display: 'inline-flex',
                        background: '#f97316',
                        color: '#fff',
                        padding: '14px 28px',
                        borderRadius: 10,
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '15px',
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
