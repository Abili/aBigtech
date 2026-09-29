import { Link } from 'react-router-dom';
import { apps, formatFileSize } from '../data/apps';
import UpcomingApps from '../components/UpcomingApps';

const TALENT_URL = 'https://talent.abigtech256.com';

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                background: 'var(--paper)',
                padding: 'clamp(80px, 15vw, 140px) 24px',
                color: 'var(--ink)'
            }}>
                <div style={{
                    maxWidth: 1280,
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        background: 'var(--kelly-tint)',
                        border: '1px solid var(--kelly)',
                        borderRadius: 100,
                        padding: '8px 16px',
                        marginBottom: 24
                    }}>
                        <span style={{
                            width: 8,
                            height: 8,
                            background: 'var(--kelly)',
                            borderRadius: '50%'
                        }} />
                        <span className="eyebrow" style={{ marginBottom: 0 }}>
                            Software & Mobile App Development
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(36px, 7vw, 60px)',
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: 24,
                        letterSpacing: '-0.02em',
                        maxWidth: 900,
                        margin: '0 auto 24px',
                        color: 'var(--ink)'
                    }}>
                        Building <span style={{ color: 'var(--kelly)' }}>Innovative</span> Software Solutions
                    </h1>

                    <p style={{
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        lineHeight: 1.7,
                        color: 'var(--ink-soft)',
                        marginBottom: 40,
                        maxWidth: 700,
                        margin: '0 auto 40px'
                    }}>
                        We design, develop, and deliver custom mobile applications and software solutions.
                        From concept to deployment, we partner with businesses to bring their ideas to life.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: 16,
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <Link to="/about" className="btn-primary" style={{ textDecoration: 'none' }}>
                            Learn About Us
                            <span style={{ fontSize: '18px' }}>→</span>
                        </Link>

                        <Link to="/apps" className="btn-secondary" style={{ textDecoration: 'none' }}>
                            Our Apps
                        </Link>
                    </div>
                </div>
            </section>

            {/* What We Do - Services */}
            <section style={{
                background: 'var(--surface)',
                padding: 'clamp(64px, 12vw, 100px) 24px'
            }}>
                <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 56 }}>
                        <span className="eyebrow">Our Services</span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 40px)',
                            fontWeight: 600,
                            color: 'var(--ink)',
                            marginBottom: 12
                        }}>
                            What We Do
                        </h2>
                        <p style={{
                            color: 'var(--ink-soft)',
                            fontSize: '16px',
                            maxWidth: 600,
                            margin: '0 auto'
                        }}>
                            From startups to enterprises, we help businesses succeed with technology
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 32
                    }}>
                        {[
                            {
                                icon: '📱',
                                title: 'Mobile App Development',
                                desc: 'Native Android and iOS applications built with modern frameworks. From social apps to enterprise solutions.'
                            },
                            {
                                icon: '💻',
                                title: 'Software Development',
                                desc: 'Custom software solutions tailored to your business needs. Web applications, APIs, and backend systems.'
                            },
                            {
                                icon: '🎯',
                                title: 'Technical Consultancy',
                                desc: 'Expert guidance on technology decisions, architecture design, and digital transformation strategies.'
                            }
                        ].map(service => (
                            <div key={service.title} className="card">
                                <div style={{
                                    width: 64,
                                    height: 64,
                                    background: 'var(--kelly-tint)',
                                    borderRadius: 16,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '28px',
                                    marginBottom: 20
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    color: 'var(--ink)',
                                    marginBottom: 12
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{
                                    fontSize: '15px',
                                    color: 'var(--ink-soft)',
                                    lineHeight: 1.7
                                }}>
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* aBigTech Talent Section */}
            <section style={{
                background: 'var(--paper)',
                padding: 'clamp(64px, 12vw, 100px) 24px',
                borderTop: '1px solid var(--line)',
                borderBottom: '1px solid var(--line)'
            }}>
                <div style={{
                    maxWidth: 1000,
                    margin: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 48,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ flex: '1 1 480px' }}>
                        <span className="eyebrow">A separate program from aBig Tech</span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 40px)',
                            fontWeight: 600,
                            color: 'var(--ink)',
                            marginBottom: 16
                        }}>
                            aBigTech Talent
                        </h2>
                        <p style={{
                            color: 'var(--ink-soft)',
                            fontSize: '16px',
                            lineHeight: 1.7,
                            marginBottom: 24,
                            maxWidth: 560
                        }}>
                            We connect developers in this community with companies abroad hiring remote talent —
                            no fee, ever, to the developer. Sign in with GitHub, get vetted, and get placed.
                        </p>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: '0 0 32px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10
                        }}>
                            {[
                                'Zero cost to developers — ever',
                                'Real, vetted clients — no unpaid trials',
                                'Stay remote — no relocation required',
                            ].map(item => (
                                <li key={item} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    color: 'var(--ink-soft)',
                                    fontSize: '15px'
                                }}>
                                    <span style={{ color: 'var(--kelly)' }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={TALENT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ textDecoration: 'none' }}
                        >
                            Explore aBigTech Talent
                            <span>↗</span>
                        </a>
                    </div>

                    <div style={{
                        flex: '1 1 280px',
                        maxWidth: 340,
                        background: 'var(--surface)',
                        border: '1px solid var(--line)',
                        borderRadius: 24,
                        padding: 32
                    }}>
                        <div style={{
                            width: 48,
                            height: 48,
                            borderRadius: 12,
                            background: 'var(--kelly)',
                            color: '#0a0a0a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Fraunces, serif',
                            fontWeight: 700,
                            fontSize: '18px',
                            marginBottom: 16
                        }}>
                            aBt
                        </div>
                        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', color: 'var(--ink-soft)', marginBottom: 8 }}>
                            talent.abigtech256.com
                        </div>
                        <p style={{ color: 'var(--ink-soft)', fontSize: '14px', lineHeight: 1.6 }}>
                            Remote Developer Placement, Uganda. Apply with GitHub — no application fee, no training charge.
                        </p>
                    </div>
                </div>
            </section>

            {/* Upcoming Apps Slider */}
            <UpcomingApps />

            {/* Our Apps Section */}
            <section style={{
                background: 'var(--surface)',
                padding: 'clamp(64px, 12vw, 100px) 24px'
            }}>
                <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 40,
                        flexWrap: 'wrap',
                        gap: 16
                    }}>
                        <div>
                            <span className="eyebrow">Our Products</span>
                            <h2 style={{
                                fontSize: 'clamp(28px, 5vw, 40px)',
                                fontWeight: 600,
                                color: 'var(--ink)'
                            }}>
                                Apps We've Built
                            </h2>
                        </div>
                        <Link to="/apps" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            color: 'var(--kelly)',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '14px'
                        }}>
                            View all apps
                            <span>→</span>
                        </Link>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: 24
                    }}>
                        {apps.slice(0, 3).map(app => {
                            const latestVersion = app.versions[0];
                            return (
                                <Link to={`/apps/${app.slug}`} key={app.slug} className="card" style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 20
                                }}>
                                    <div style={{ display: 'flex', gap: 16 }}>
                                        <img
                                            src={app.iconUrl}
                                            alt={`${app.name} icon`}
                                            style={{
                                                width: 72,
                                                height: 72,
                                                borderRadius: 18,
                                                objectFit: 'cover',
                                                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)'
                                            }}
                                        />
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{
                                                fontSize: '20px',
                                                fontWeight: 600,
                                                color: 'var(--ink)',
                                                marginBottom: 6
                                            }}>
                                                {app.name}
                                            </h3>
                                            <p style={{
                                                fontSize: '14px',
                                                color: 'var(--ink-soft)',
                                                lineHeight: 1.5
                                            }}>
                                                {app.shortDescription}
                                            </p>
                                        </div>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: 'auto',
                                        paddingTop: 16,
                                        borderTop: '1px solid var(--line)'
                                    }}>
                                        <span style={{
                                            fontSize: '13px',
                                            color: 'var(--ink-soft)',
                                            fontFamily: 'IBM Plex Mono, monospace'
                                        }}>
                                            v{latestVersion.versionName} • {formatFileSize(latestVersion.size)}
                                        </span>
                                        <span style={{
                                            background: 'var(--kelly)',
                                            color: '#0a0a0a',
                                            padding: '10px 20px',
                                            borderRadius: 10,
                                            fontSize: '14px',
                                            fontWeight: 700
                                        }}>
                                            Download
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section style={{
                background: 'var(--paper)',
                padding: 'clamp(64px, 12vw, 100px) 24px'
            }}>
                <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 56 }}>
                        <span className="eyebrow">Why Choose Us</span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 40px)',
                            fontWeight: 600,
                            color: 'var(--ink)'
                        }}>
                            Built for Success
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 32
                    }}>
                        {[
                            { icon: '⚡', title: 'Fast Delivery', desc: 'Agile development with quick iterations' },
                            { icon: '🔒', title: 'Secure Code', desc: 'Security-first approach in all projects' },
                            { icon: '📈', title: 'Scalable', desc: 'Built to grow with your business' },
                            { icon: '🤝', title: 'Collaborative', desc: 'Close partnership throughout the process' }
                        ].map(item => (
                            <div key={item.title} style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: 64,
                                    height: 64,
                                    background: 'var(--surface)',
                                    border: '1px solid var(--line)',
                                    borderRadius: 16,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 16px',
                                    fontSize: '24px'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: 'var(--ink)',
                                    marginBottom: 8
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '14px',
                                    color: 'var(--ink-soft)'
                                }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                background: 'linear-gradient(135deg, var(--kelly-deep) 0%, var(--kelly) 100%)',
                padding: 'clamp(64px, 12vw, 100px) 24px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: 700, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(28px, 5vw, 40px)',
                        fontWeight: 600,
                        color: '#0a0a0a',
                        marginBottom: 16
                    }}>
                        Ready to Build Something Great?
                    </h2>
                    <p style={{
                        color: 'rgba(10,10,10,0.75)',
                        fontSize: '16px',
                        marginBottom: 32,
                        lineHeight: 1.7
                    }}>
                        Let's discuss your project and see how we can help bring your ideas to life.
                    </p>
                    <Link to="/support" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        background: '#0a0a0a',
                        color: 'var(--kelly)',
                        padding: '16px 32px',
                        borderRadius: 12,
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '16px'
                    }}>
                        Get in Touch
                        <span>→</span>
                    </Link>
                </div>
            </section>
        </>
    );
}
