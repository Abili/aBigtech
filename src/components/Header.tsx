import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';
import Logo from './Logo';
import SearchModal from './SearchModal';

interface HeaderProps {
    currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error: any) {
            console.error("Login failed:", error);
            alert(`Login failed: ${error.message}`);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUserMenuOpen(false);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const navItems = [
        { path: '/apps', label: 'Apps' },
        { path: '/security', label: 'Security' },
        { path: '/about', label: 'About' },
        { path: '/support', label: 'Support' },
    ];

    const TALENT_URL = 'https://talent.abigtech256.com';

    const isActive = (path: string) => currentPath.startsWith(path);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Keyboard shortcut to open search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '/' && !isSearchOpen) {
                const target = e.target as HTMLElement;
                if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isSearchOpen]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header style={{
                background: 'var(--paper)',
                borderBottom: '1px solid var(--line)',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <div style={{
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 16px',
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    {/* Logo */}
                    <Link to="/" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        textDecoration: 'none'
                    }}>
                        <Logo size={32} />
                        <span style={{
                            fontSize: '18px',
                            fontWeight: 700,
                            color: 'var(--ink)',
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            aBig Tech
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hide-mobile" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8
                    }}>
                        {navItems.map(item => (
                            <Link
                                key={item.path}
                                to={item.path}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: 8,
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: isActive(item.path) ? 'var(--kelly)' : 'var(--ink-soft)',
                                    background: isActive(item.path) ? 'var(--kelly-tint)' : 'transparent',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                    fontFamily: 'IBM Plex Sans, sans-serif'
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href={TALENT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                                padding: '8px 16px',
                                borderRadius: 8,
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'var(--kelly)',
                                border: '1px solid var(--kelly)',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                fontFamily: 'IBM Plex Sans, sans-serif',
                                marginLeft: 4
                            }}
                        >
                            Talent
                            <span style={{ fontSize: '12px' }}>↗</span>
                        </a>
                    </nav>

                    {/* Right side: Search + Auth + Mobile Menu */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        {/* Search Button */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                background: 'var(--surface)',
                                padding: '8px 12px',
                                borderRadius: 8,
                                border: '1px solid var(--line)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <span style={{ color: 'var(--ink-soft)', fontSize: '14px' }}>🔍</span>
                            <span className="hide-mobile" style={{
                                color: 'var(--ink-soft)',
                                fontSize: '13px',
                                fontFamily: 'IBM Plex Sans, sans-serif'
                            }}>
                                Search...
                            </span>
                            <span className="hide-mobile" style={{
                                background: 'var(--line)',
                                color: 'var(--ink-soft)',
                                padding: '2px 6px',
                                borderRadius: 4,
                                fontSize: '11px',
                                fontFamily: 'IBM Plex Mono, monospace'
                            }}>
                                /
                            </span>
                        </button>

                        {/* Auth Button */}
                        {user ? (
                            <div style={{ position: 'relative' }}>
                                <button
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: 0
                                    }}
                                >
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName || 'User'}
                                            style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--line)' }}
                                        />
                                    ) : (
                                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--kelly)', color: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '14px' }}>
                                            {user.displayName?.charAt(0) || 'U'}
                                        </div>
                                    )}
                                </button>

                                {userMenuOpen && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '120%',
                                        right: 0,
                                        background: 'var(--paper)',
                                        border: '1px solid var(--line)',
                                        borderRadius: 8,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.35)',
                                        padding: 8,
                                        minWidth: 160,
                                        zIndex: 1000
                                    }}>
                                        <div style={{ padding: '8px 12px', fontSize: '13px', fontWeight: 500, color: 'var(--ink)', borderBottom: '1px solid var(--line)', marginBottom: 4 }}>
                                            {user.displayName}
                                        </div>

                                        {/* Admin Link */}
                                        {user.email === 'abiliisaac@gmail.com' && (
                                            <Link
                                                to="/admin"
                                                onClick={() => setUserMenuOpen(false)}
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    padding: '8px 12px',
                                                    background: 'transparent',
                                                    textDecoration: 'none',
                                                    fontSize: '13px',
                                                    color: 'var(--ink)',
                                                    cursor: 'pointer',
                                                    borderRadius: 4
                                                }}
                                                onMouseOver={(e) => e.currentTarget.style.background = 'var(--surface)'}
                                                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                            >
                                                Admin Dashboard
                                            </Link>
                                        )}

                                        <button
                                            onClick={handleLogout}
                                            style={{
                                                width: '100%',
                                                textAlign: 'left',
                                                padding: '8px 12px',
                                                background: 'transparent',
                                                border: 'none',
                                                fontSize: '13px',
                                                color: 'var(--amber)',
                                                cursor: 'pointer',
                                                borderRadius: 4
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.background = 'var(--surface)'}
                                            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={handleLogin}
                                style={{
                                    background: 'var(--kelly)',
                                    color: '#0a0a0a',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: 8,
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    fontFamily: 'IBM Plex Sans, sans-serif'
                                }}
                            >
                                Sign In
                            </button>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            className="hide-desktop"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 40,
                                height: 40,
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '20px',
                                color: 'var(--ink)',
                                zIndex: 102 // Ensure above other elements
                            }}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div
                        className="hide-desktop"
                        style={{
                            position: 'fixed',
                            top: 64,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'var(--paper)',
                            zIndex: 99,
                            padding: 24,
                            overflowY: 'auto'
                        }}
                    >
                        <nav style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            {navItems.map(item => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    style={{
                                        padding: '16px 20px',
                                        borderRadius: 12,
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: isActive(item.path) ? 'var(--kelly)' : 'var(--ink)',
                                        background: isActive(item.path) ? 'var(--kelly-tint)' : 'var(--surface)',
                                        textDecoration: 'none',
                                        fontFamily: 'IBM Plex Sans, sans-serif'
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href={TALENT_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: '16px 20px',
                                    borderRadius: 12,
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: 'var(--kelly)',
                                    background: 'var(--kelly-tint)',
                                    textDecoration: 'none',
                                    fontFamily: 'IBM Plex Sans, sans-serif',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                aBigTech Talent
                                <span>↗</span>
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </>
    );
}
