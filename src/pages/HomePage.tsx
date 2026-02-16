import { Link } from 'react-router-dom';
import { apps, formatFileSize } from '../data/apps';
import UpcomingApps from '../components/UpcomingApps';

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                background: '#fff',
                padding: 'clamp(80px, 15vw, 140px) 24px',
                color: '#0a0a0a'
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
                        background: 'rgba(249, 115, 22, 0.1)',
                        border: '1px solid rgba(249, 115, 22, 0.3)',
                        borderRadius: 100,
                        padding: '8px 16px',
                        marginBottom: 24
                    }}>
                        <span style={{
                            width: 8,
                            height: 8,
                            background: '#22c55e',
                            borderRadius: '50%'
                        }} />
                        <span style={{
                            fontSize: '13px',
                            color: '#f97316',
                            fontWeight: 500,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Software & Mobile App Development
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(36px, 7vw, 60px)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: 24,
                        fontFamily: 'Inter, system-ui, sans-serif',
                        letterSpacing: '-0.03em',
                        maxWidth: 900,
                        margin: '0 auto 24px',
                        color: '#0a0a0a'
                    }}>
                        Building <span style={{ color: '#f97316' }}>Innovative</span> Software Solutions
                    </h1>

                    <p style={{
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        lineHeight: 1.7,
                        color: '#525252',
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
                        <Link to="/about" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 10,
                            background: '#f97316',
                            color: '#fff',
                            padding: '16px 32px',
                            borderRadius: 12,
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '16px',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            boxShadow: '0 8px 24px rgba(249, 115, 22, 0.3)',
                            transition: 'all 0.2s ease'
                        }}>
                            Learn About Us
                            <span style={{ fontSize: '18px' }}>→</span>
                        </Link>

                        <Link to="/apps" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            background: 'transparent',
                            color: '#0a0a0a',
                            padding: '16px 32px',
                            borderRadius: 12,
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '16px',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            border: '2px solid #e5e5e5'
                        }}>
                            Our Apps
                        </Link>
                    </div>
                </div>
            </section>

            {/* What We Do - Services */}
            <section style={{
                background: '#fafafa',
                padding: 'clamp(64px, 12vw, 100px) 24px'
            }}>
                <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 56 }}>
                        <span style={{
                            display: 'inline-block',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#f97316',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: 12,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Our Services
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 40px)',
                            fontWeight: 700,
                            color: '#0a0a0a',
                            marginBottom: 12,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            What We Do
                        </h2>
                        <p style={{
                            color: '#525252',
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
                            <div key={service.title} style={{
                                background: '#fff',
                                borderRadius: 24,
                                padding: 32,
                                border: '1px solid #e5e5e5'
                            }}>
                                <div style={{
                                    width: 64,
                                    height: 64,
                                    background: 'rgba(249, 115, 22, 0.1)',
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
                                    color: '#0a0a0a',
                                    marginBottom: 12,
                                    fontFamily: 'Inter, system-ui, sans-serif'
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#525252',
                                    lineHeight: 1.7
                                }}>
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Apps Slider */}
            <UpcomingApps />

            {/* Our Apps Section */}
            <section style={{
                background: '#fff',
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
                            <span style={{
                                display: 'inline-block',
                                fontSize: '12px',
                                fontWeight: 600,
                                color: '#f97316',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: 8,
                                fontFamily: 'Inter, system-ui, sans-serif'
                            }}>
                                Our Products
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(28px, 5vw, 40px)',
                                fontWeight: 700,
                                color: '#0a0a0a',
                                fontFamily: 'Inter, system-ui, sans-serif'
                            }}>
                                Apps We've Built
                            </h2>
                        </div>
                        <Link to="/apps" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            color: '#f97316',
                            textDecoration: 'none',
                            fontWeight: 500,
                            fontSize: '14px',
                            fontFamily: 'Inter, system-ui, sans-serif'
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
                                <Link to={`/apps/${app.slug}`} key={app.slug} style={{
                                    background: '#fafafa',
                                    borderRadius: 24,
                                    padding: 24,
                                    border: '1px solid #e5e5e5',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 20,
                                    transition: 'all 0.3s ease'
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
                                                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
                                            }}
                                        />
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{
                                                fontSize: '20px',
                                                fontWeight: 600,
                                                color: '#0a0a0a',
                                                marginBottom: 6,
                                                fontFamily: 'Inter, system-ui, sans-serif'
                                            }}>
                                                {app.name}
                                            </h3>
                                            <p style={{
                                                fontSize: '14px',
                                                color: '#525252',
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
                                        borderTop: '1px solid #e5e5e5'
                                    }}>
                                        <span style={{
                                            fontSize: '13px',
                                            color: '#737373',
                                            fontFamily: 'Inter, system-ui, sans-serif'
                                        }}>
                                            v{latestVersion.versionName} • {formatFileSize(latestVersion.size)}
                                        </span>
                                        <span style={{
                                            background: '#f97316',
                                            color: '#fff',
                                            padding: '10px 20px',
                                            borderRadius: 10,
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            fontFamily: 'Inter, system-ui, sans-serif'
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
                background: '#fafafa',
                padding: 'clamp(64px, 12vw, 100px) 24px'
            }}>
                <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 56 }}>
                        <span style={{
                            display: 'inline-block',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#f97316',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: 12,
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Why Choose Us
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 40px)',
                            fontWeight: 700,
                            color: '#0a0a0a',
                            fontFamily: 'Inter, system-ui, sans-serif'
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
                                    background: '#fff',
                                    border: '1px solid #e5e5e5',
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
                                    color: '#0a0a0a',
                                    marginBottom: 8,
                                    fontFamily: 'Inter, system-ui, sans-serif'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '14px',
                                    color: '#525252',
                                    fontFamily: 'Inter, system-ui, sans-serif'
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
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                padding: 'clamp(64px, 12vw, 100px) 24px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: 700, margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(28px, 5vw, 40px)',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: 16,
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Ready to Build Something Great?
                    </h2>
                    <p style={{
                        color: 'rgba(255,255,255,0.9)',
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
                        background: '#fff',
                        color: '#f97316',
                        padding: '16px 32px',
                        borderRadius: 12,
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '16px',
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        Get in Touch
                        <span>→</span>
                    </Link>
                </div>
            </section>
        </>
    );
}
