import { Link, useSearchParams } from 'react-router-dom';
import { apps, categories, formatFileSize } from '../data/apps';

export default function AppsPage() {
    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category');

    const filteredApps = selectedCategory
        ? apps.filter(app => app.category.slug === selectedCategory)
        : apps;

    const selectedCategoryData = categories.find(c => c.slug === selectedCategory);
    return (
        <main style={{ background: 'var(--surface)', minHeight: '100vh' }}>
            {/* Header */}
            <section style={{
                background: 'var(--paper)',
                padding: 'clamp(40px, 8vw, 64px) 24px',
                borderBottom: '1px solid var(--line)'
            }}>
                <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                    <span style={{
                        display: 'inline-block',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--kelly)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: 12,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        App Catalog
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(32px, 6vw, 48px)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 12,
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}>
                        Browse Apps
                    </h1>
                    <p style={{
                        color: 'var(--ink-soft)',
                        fontSize: '16px',
                        maxWidth: 500
                    }}>
                        All apps verified with checksums and scanned for malware
                    </p>
                </div>
            </section>

            {/* Mobile Filter Toggle */}
            <div className="hide-desktop" style={{
                padding: '16px 24px',
                background: 'var(--paper)',
                borderBottom: '1px solid var(--line)'
            }}>
                <Link
                    to={selectedCategory ? '/apps' : '#'}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        padding: '12px',
                        background: selectedCategory ? 'var(--kelly-tint)' : 'var(--surface)',
                        borderRadius: 10,
                        color: selectedCategory ? 'var(--kelly)' : 'var(--ink-soft)',
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '14px',
                        fontFamily: 'IBM Plex Sans, sans-serif'
                    }}
                >
                    <span>🔽</span>
                    {selectedCategoryData ? selectedCategoryData.name : 'All Categories'}
                </Link>

                {/* Category quick links on mobile */}
                <div style={{
                    display: 'flex',
                    gap: 8,
                    overflowX: 'auto',
                    paddingTop: 12,
                    marginTop: 12,
                    borderTop: '1px solid var(--surface)'
                }}>
                    <Link
                        to="/apps"
                        style={{
                            padding: '8px 16px',
                            background: !selectedCategory ? 'var(--kelly)' : 'var(--surface)',
                            color: !selectedCategory ? '#0a0a0a' : 'var(--ink-soft)',
                            borderRadius: 100,
                            textDecoration: 'none',
                            fontSize: '13px',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}
                    >
                        All
                    </Link>
                    {categories.map(cat => (
                        <Link
                            key={cat.slug}
                            to={`/apps?category=${cat.slug}`}
                            style={{
                                padding: '8px 16px',
                                background: selectedCategory === cat.slug ? 'var(--kelly)' : 'var(--surface)',
                                color: selectedCategory === cat.slug ? '#0a0a0a' : 'var(--ink-soft)',
                                borderRadius: 100,
                                textDecoration: 'none',
                                fontSize: '13px',
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                                fontFamily: 'IBM Plex Sans, sans-serif'
                            }}
                        >
                            {cat.icon} {cat.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="apps-layout" style={{
                maxWidth: 1280,
                margin: '0 auto',
                padding: 'clamp(20px, 4vw, 40px) clamp(16px, 3vw, 24px)',
                display: 'grid',
                gridTemplateColumns: '260px 1fr',
                gap: 'clamp(20px, 4vw, 40px)'
            }}>
                {/* Sidebar Filters - Desktop only */}
                <aside className="hide-mobile" style={{
                    background: 'var(--paper)',
                    borderRadius: 20,
                    padding: 24,
                    border: '1px solid var(--line)',
                    height: 'fit-content',
                    position: 'sticky',
                    top: 88
                }}>
                    <h3 style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--ink-soft)',
                        marginBottom: 16,
                        fontFamily: 'IBM Plex Sans, sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}>
                        Categories
                    </h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4
                    }}>
                        <li>
                            <Link to="/apps" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                padding: '12px 14px',
                                borderRadius: 10,
                                textDecoration: 'none',
                                color: !selectedCategory ? 'var(--kelly)' : 'var(--ink-soft)',
                                background: !selectedCategory ? 'rgba(76, 184, 23, 0.08)' : 'transparent',
                                fontSize: '14px',
                                fontWeight: 500,
                                fontFamily: 'IBM Plex Sans, sans-serif'
                            }}>
                                <span>📱</span>
                                All Apps
                                <span style={{
                                    marginLeft: 'auto',
                                    background: 'var(--kelly)',
                                    color: '#0a0a0a',
                                    padding: '2px 8px',
                                    borderRadius: 100,
                                    fontSize: '12px',
                                    fontWeight: 600
                                }}>
                                    {apps.length}
                                </span>
                            </Link>
                        </li>
                        {categories.map(cat => {
                            const count = apps.filter(a => a.category.slug === cat.slug).length;
                            return (
                                <li key={cat.slug}>
                                    <Link to={`/apps?category=${cat.slug}`} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        padding: '12px 14px',
                                        borderRadius: 10,
                                        textDecoration: 'none',
                                        color: selectedCategory === cat.slug ? 'var(--kelly)' : 'var(--ink-soft)',
                                        background: selectedCategory === cat.slug ? 'rgba(76, 184, 23, 0.08)' : 'transparent',
                                        fontSize: '14px',
                                        fontFamily: 'IBM Plex Sans, sans-serif',
                                        transition: 'all 0.2s'
                                    }}>
                                        <span>{cat.icon}</span>
                                        {cat.name}
                                        {count > 0 && (
                                            <span style={{
                                                marginLeft: 'auto',
                                                color: 'var(--ink-soft)',
                                                fontSize: '13px'
                                            }}>
                                                {count}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </aside>

                {/* App Grid */}
                <div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 24
                    }}>
                        <span style={{
                            color: 'var(--ink-soft)',
                            fontSize: '14px',
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            {selectedCategoryData ? (
                                <>Showing <strong style={{ color: 'var(--ink)' }}>{filteredApps.length}</strong> {selectedCategoryData.name} app{filteredApps.length !== 1 ? 's' : ''}</>
                            ) : (
                                <>Showing <strong style={{ color: 'var(--ink)' }}>{filteredApps.length}</strong> app{filteredApps.length !== 1 ? 's' : ''}</>
                            )}
                        </span>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: 24
                    }}>
                        {filteredApps.map(app => {
                            const latestVersion = app.versions[0];
                            return (
                                <Link to={`/apps/${app.slug}`} key={app.slug} style={{
                                    background: 'var(--paper)',
                                    borderRadius: 20,
                                    padding: 24,
                                    border: '1px solid var(--line)',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 20,
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{ display: 'flex', gap: 16 }}>
                                        <div style={{
                                            width: 72,
                                            height: 72,
                                            borderRadius: 18,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            overflow: 'hidden',
                                            background: app.iconUrl ? '#fff' : 'linear-gradient(135deg, var(--kelly) 0%, var(--kelly-deep) 100%)',
                                            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
                                        }}>
                                            {app.iconUrl ? (
                                                <img src={app.iconUrl} alt={app.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                <span style={{ fontSize: '32px' }}>🎵</span>
                                            )}
                                        </div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <h3 style={{
                                                fontSize: '20px',
                                                fontWeight: 600,
                                                color: 'var(--ink)',
                                                marginBottom: 6,
                                                fontFamily: 'IBM Plex Sans, sans-serif'
                                            }}>
                                                {app.name}
                                            </h3>
                                            <p style={{
                                                fontSize: '14px',
                                                color: 'var(--ink-soft)',
                                                lineHeight: 1.5,
                                                overflow: 'hidden',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical'
                                            }}>
                                                {app.shortDescription}
                                            </p>
                                        </div>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        gap: 8,
                                        flexWrap: 'wrap'
                                    }}>
                                        <span style={{
                                            background: 'rgba(34, 197, 94, 0.1)',
                                            color: '#16a34a',
                                            padding: '6px 12px',
                                            borderRadius: 100,
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            fontFamily: 'IBM Plex Sans, sans-serif'
                                        }}>
                                            ✓ Verified
                                        </span>
                                        <span style={{
                                            background: 'var(--kelly-tint)',
                                            color: 'var(--kelly)',
                                            padding: '6px 12px',
                                            borderRadius: 100,
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            fontFamily: 'IBM Plex Sans, sans-serif'
                                        }}>
                                            🛡️ Scanned
                                        </span>
                                        <span style={{
                                            background: 'var(--surface)',
                                            color: 'var(--ink-soft)',
                                            padding: '6px 12px',
                                            borderRadius: 100,
                                            fontSize: '12px',
                                            fontFamily: 'IBM Plex Sans, sans-serif'
                                        }}>
                                            {app.category.icon} {app.category.name}
                                        </span>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: 'auto',
                                        paddingTop: 16,
                                        borderTop: '1px solid var(--surface)'
                                    }}>
                                        <span style={{
                                            fontSize: '13px',
                                            color: 'var(--ink-soft)',
                                            fontFamily: 'IBM Plex Sans, sans-serif'
                                        }}>
                                            v{latestVersion.versionName} • {formatFileSize(latestVersion.size)}
                                        </span>
                                        <span style={{
                                            background: 'var(--kelly)',
                                            color: '#0a0a0a',
                                            padding: '10px 20px',
                                            borderRadius: 10,
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            fontFamily: 'IBM Plex Sans, sans-serif'
                                        }}>
                                            Download
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {apps.length === 0 && (
                        <div style={{
                            textAlign: 'center',
                            padding: '80px 24px',
                            color: 'var(--ink-soft)',
                            background: 'var(--paper)',
                            borderRadius: 20,
                            border: '1px solid var(--line)'
                        }}>
                            <div style={{ fontSize: '56px', marginBottom: 20 }}>📱</div>
                            <p style={{ fontSize: '16px' }}>No apps available yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </main >
    );
}
