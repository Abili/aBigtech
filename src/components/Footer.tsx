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
            background: '#fafafa',
            color: '#525252',
            padding: 'clamp(40px, 8vw, 64px) 24px clamp(24px, 4vw, 32px)',
            boxSizing: 'border-box',
            borderTop: '1px solid #e5e5e5'
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
                                color: '#0a0a0a',
                                fontSize: '14px',
                                fontWeight: 600,
                                marginBottom: 16,
                                fontFamily: 'Inter, system-ui, sans-serif',
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
                                        <Link
                                            to={link.path}
                                            style={{
                                                color: '#525252',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                fontFamily: 'Inter, system-ui, sans-serif',
                                                transition: 'color 0.2s ease'
                                            }}
                                            onMouseOver={e => e.currentTarget.style.color = '#f97316'}
                                            onMouseOut={e => e.currentTarget.style.color = '#525252'}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid #e5e5e5',
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
                        fontFamily: 'Inter, system-ui, sans-serif'
                    }}>
                        <span style={{ fontSize: '20px' }}>📱</span>
                        <span style={{ fontWeight: 600, color: '#0a0a0a' }}>aBig Tech</span>
                    </div>

                    <div style={{
                        fontSize: '13px',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: '#737373'
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
                            color: '#737373',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                        }}>
                            <span style={{ color: '#22c55e' }}>●</span>
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
                    <Link to="/admin" style={{ fontSize: '10px', textDecoration: 'none', color: '#a3a3a3' }}>
                        🔒
                    </Link>
                </div>
            </div>
        </footer>
    );
}
