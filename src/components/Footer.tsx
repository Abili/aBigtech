import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Apps',
            links: [
                { label: 'All Apps', path: '/apps' },
                { label: 'Categories', path: '/apps#categories' },
                { label: 'New Releases', path: '/apps?sort=newest' },
            ]
        },
        {
            title: 'Company',
            links: [
                { label: 'About Us', path: '/about' },
                { label: 'Security', path: '/security' },
                { label: 'Talent', path: 'https://talent.abigtech256.com', external: true },
            ]
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Terms of Service', path: '/terms' },
            ]
        },
        {
            title: 'Help',
            links: [
                { label: 'FAQ', path: '/support/faq' },
                { label: 'Contact', path: '/support/contact' },
                { label: 'Install Guide', path: '/support/installation-guide' },
            ]
        }
    ];

    return (
        <footer style={{
            width: '100%',
            background: 'var(--surface)',
            color: 'var(--ink-soft)',
            padding: 'clamp(40px, 8vw, 64px) 24px clamp(24px, 4vw, 32px)',
            boxSizing: 'border-box',
            borderTop: '1px solid var(--line)'
        }}>
            <div style={{
                maxWidth: 1400,
                margin: '0 auto'
            }}>
                {/* Footer links grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: 'clamp(24px, 5vw, 48px)',
                    marginBottom: 'clamp(32px, 6vw, 48px)'
                }}>
                    {footerSections.map(section => (
                        <div key={section.title}>
                            <h4 style={{
                                color: 'var(--ink)',
                                fontSize: '14px',
                                fontWeight: 600,
                                marginBottom: 16,
                                fontFamily: 'IBM Plex Sans, sans-serif',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {section.title}
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10
                            }}>
                                {section.links.map(link => (
                                    <li key={link.path}>
                                        {link.external ? (
                                            <a
                                                href={link.path}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: 'var(--ink-soft)',
                                                    textDecoration: 'none',
                                                    fontSize: '14px',
                                                    fontFamily: 'IBM Plex Sans, sans-serif',
                                                    transition: 'color 0.2s ease'
                                                }}
                                                onMouseOver={e => e.currentTarget.style.color = 'var(--kelly)'}
                                                onMouseOut={e => e.currentTarget.style.color = 'var(--ink-soft)'}
                                            >
                                                {link.label} ↗
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                style={{
                                                    color: 'var(--ink-soft)',
                                                    textDecoration: 'none',
                                                    fontSize: '14px',
                                                    fontFamily: 'IBM Plex Sans, sans-serif',
                                                    transition: 'color 0.2s ease'
                                                }}
                                                onMouseOver={e => e.currentTarget.style.color = 'var(--kelly)'}
                                                onMouseOut={e => e.currentTarget.style.color = 'var(--ink-soft)'}
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid var(--line)',
                    paddingTop: 24,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 16
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: '14px',
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        <span style={{ fontSize: '20px' }}>📱</span>
                        <span style={{ fontWeight: 600, color: 'var(--ink)' }}>aBig Tech</span>
                    </div>

                    <div style={{
                        fontSize: '13px',
                        fontFamily: 'IBM Plex Sans, sans-serif',
                        color: 'var(--ink-soft)'
                    }}>
                        © {currentYear} aBig Tech. All rights reserved.
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: 16,
                        alignItems: 'center'
                    }}>
                        <span style={{
                            fontSize: '12px',
                            color: 'var(--ink-soft)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                        }}>
                            <span style={{ color: 'var(--kelly)' }}>●</span>
                            All apps verified & scanned
                        </span>
                    </div>
                </div>

                {/* Secret Admin Link */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 20,
                    opacity: 0.3
                }}>
                    <Link to="/admin" style={{ fontSize: '10px', textDecoration: 'none', color: 'var(--ink-soft)' }}>
                        🔒
                    </Link>
                </div>
            </div>
        </footer>
    );
}
