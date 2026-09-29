import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct mailto link
        const mailtoLink = `mailto:abiliisaac@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Show success message (assuming they sent it)
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <main style={{ background: 'var(--surface)', minHeight: '100vh' }}>
            {/* Header */}
            <section style={{
                background: 'var(--paper)',
                borderBottom: '1px solid var(--line)',
                padding: 'clamp(48px, 8vw, 80px) 24px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <Link to="/support" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        color: 'var(--kelly)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: 500,
                        marginBottom: 16,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        ← Back to Support
                    </Link>
                    <h1 style={{
                        fontSize: 'clamp(32px, 7vw, 48px)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 16,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Contact Us
                    </h1>
                    <p style={{
                        color: 'var(--ink-soft)',
                        fontSize: '16px',
                        lineHeight: 1.6
                    }}>
                        Have a question or want to work with us? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section style={{ padding: '48px 24px' }}>
                <div style={{
                    maxWidth: 900,
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 32
                }}>
                    {/* Contact Form */}
                    <div style={{
                        background: 'var(--paper)',
                        borderRadius: 16,
                        padding: 32,
                        border: '1px solid var(--line)'
                    }}>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                                <div style={{ fontSize: '48px', marginBottom: 20 }}>✅</div>
                                <h2 style={{
                                    fontSize: '24px',
                                    fontWeight: 600,
                                    color: 'var(--ink)',
                                    marginBottom: 12,
                                    fontFamily: 'IBM Plex Sans, sans-serif'
                                }}>
                                    Message Sent!
                                </h2>
                                <p style={{
                                    color: 'var(--ink-soft)',
                                    fontSize: '15px',
                                    marginBottom: 24
                                }}>
                                    Thank you for reaching out. We'll get back to you soon.
                                </p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({ name: '', email: '', subject: '', message: '' });
                                    }}
                                    style={{
                                        background: 'var(--kelly)',
                                        color: '#0a0a0a',
                                        border: 'none',
                                        padding: '12px 24px',
                                        borderRadius: 8,
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        fontFamily: 'IBM Plex Sans, sans-serif'
                                    }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h2 style={{
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    color: 'var(--ink)',
                                    marginBottom: 24,
                                    fontFamily: 'IBM Plex Sans, sans-serif'
                                }}>
                                    Send us a message
                                </h2>

                                <div style={{ marginBottom: 20 }}>
                                    <label style={{
                                        display: 'block',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'var(--ink)',
                                        marginBottom: 8,
                                        fontFamily: 'IBM Plex Sans, sans-serif'
                                    }}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px 14px',
                                            borderRadius: 8,
                                            border: '1px solid var(--line)',
                                            fontSize: '15px',
                                            fontFamily: 'IBM Plex Sans, sans-serif',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div style={{ marginBottom: 20 }}>
                                    <label style={{
                                        display: 'block',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'var(--ink)',
                                        marginBottom: 8,
                                        fontFamily: 'IBM Plex Sans, sans-serif'
                                    }}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px 14px',
                                            borderRadius: 8,
                                            border: '1px solid var(--line)',
                                            fontSize: '15px',
                                            fontFamily: 'IBM Plex Sans, sans-serif',
                                            outline: 'none',
                                            boxSizing: 'border-box'
                                        }}
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div style={{ marginBottom: 20 }}>
                                    <label style={{
                                        display: 'block',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'var(--ink)',
                                        marginBottom: 8,
                                        fontFamily: 'IBM Plex Sans, sans-serif'
                                    }}>
                                        Subject
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px 14px',
                                            borderRadius: 8,
                                            border: '1px solid var(--line)',
                                            fontSize: '15px',
                                            fontFamily: 'IBM Plex Sans, sans-serif',
                                            outline: 'none',
                                            background: 'var(--paper)',
                                            cursor: 'pointer',
                                            boxSizing: 'border-box'
                                        }}
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="app-request">App Request</option>
                                        <option value="bug-report">Bug Report</option>
                                        <option value="security">Security Issue</option>
                                        <option value="business">Business / Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: 24 }}>
                                    <label style={{
                                        display: 'block',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'var(--ink)',
                                        marginBottom: 8,
                                        fontFamily: 'IBM Plex Sans, sans-serif'
                                    }}>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        style={{
                                            width: '100%',
                                            padding: '12px 14px',
                                            borderRadius: 8,
                                            border: '1px solid var(--line)',
                                            fontSize: '15px',
                                            fontFamily: 'IBM Plex Sans, sans-serif',
                                            outline: 'none',
                                            resize: 'vertical',
                                            boxSizing: 'border-box'
                                        }}
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        background: 'var(--kelly)',
                                        color: '#0a0a0a',
                                        border: 'none',
                                        padding: '14px 24px',
                                        borderRadius: 10,
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        fontFamily: 'IBM Plex Sans, sans-serif',
                                        transition: 'background 0.2s ease'
                                    }}
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <div style={{
                            background: 'var(--paper)',
                            borderRadius: 16,
                            padding: 24,
                            border: '1px solid var(--line)'
                        }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'var(--ink)',
                                marginBottom: 16,
                                fontFamily: 'IBM Plex Sans, sans-serif'
                            }}>
                                Other Ways to Reach Us
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <a href="mailto:support@abigtech256.com" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    textDecoration: 'none',
                                    color: 'var(--ink)'
                                }}>
                                    <div style={{
                                        width: 44,
                                        height: 44,
                                        background: 'var(--kelly-tint)',
                                        borderRadius: 10,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '20px'
                                    }}>
                                        ✉️
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            fontFamily: 'IBM Plex Sans, sans-serif'
                                        }}>
                                            Email
                                        </div>
                                        <div style={{
                                            fontSize: '13px',
                                            color: 'var(--kelly)',
                                            fontFamily: 'IBM Plex Sans, sans-serif'
                                        }}>
                                            support@abigtech256.com
                                        </div>
                                    </div>
                                </a>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12
                                }}>
                                    <div style={{
                                        width: 44,
                                        height: 44,
                                        background: 'var(--kelly-tint)',
                                        borderRadius: 10,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '20px'
                                    }}>
                                        🕐
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            color: 'var(--ink)',
                                            fontFamily: 'IBM Plex Sans, sans-serif'
                                        }}>
                                            Response Time
                                        </div>
                                        <div style={{
                                            fontSize: '13px',
                                            color: 'var(--ink-soft)',
                                            fontFamily: 'IBM Plex Sans, sans-serif'
                                        }}>
                                            Usually within 24-48 hours
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            background: 'var(--paper)',
                            borderRadius: 16,
                            padding: 24,
                            border: '1px solid var(--line)'
                        }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'var(--ink)',
                                marginBottom: 16,
                                fontFamily: 'IBM Plex Sans, sans-serif'
                            }}>
                                Quick Resources
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <Link to="/support/faq" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    color: 'var(--ink-soft)',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'IBM Plex Sans, sans-serif',
                                    padding: '10px 12px',
                                    borderRadius: 8,
                                    background: 'var(--surface)'
                                }}>
                                    <span>❓</span>
                                    Frequently Asked Questions
                                </Link>
                                <Link to="/support/installation-guide" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    color: 'var(--ink-soft)',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'IBM Plex Sans, sans-serif',
                                    padding: '10px 12px',
                                    borderRadius: 8,
                                    background: 'var(--surface)'
                                }}>
                                    <span>📲</span>
                                    Installation Guide
                                </Link>
                                <Link to="/security" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    color: 'var(--ink-soft)',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'IBM Plex Sans, sans-serif',
                                    padding: '10px 12px',
                                    borderRadius: 8,
                                    background: 'var(--surface)'
                                }}>
                                    <span>🛡️</span>
                                    Security & Verification
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
