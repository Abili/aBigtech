import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { apps } from '../data/apps';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredApps = apps.filter(app =>
        app.name.toLowerCase().includes(query.toLowerCase()) ||
        app.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        app.category.name.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(4px)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingTop: '15vh'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: '#fff',
                    borderRadius: 16,
                    width: '100%',
                    maxWidth: 560,
                    maxHeight: '60vh',
                    overflow: 'hidden',
                    boxShadow: '0 24px 48px rgba(0, 0, 0, 0.2)'
                }}
                onClick={e => e.stopPropagation()}
            >
                {/* Search Input */}
                <div style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid #e5e5e5',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12
                }}>
                    <span style={{ fontSize: '20px', color: '#737373' }}>🔍</span>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search apps..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        style={{
                            flex: 1,
                            border: 'none',
                            outline: 'none',
                            fontSize: '16px',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            color: '#0a0a0a',
                            background: 'transparent'
                        }}
                    />
                    <button
                        onClick={onClose}
                        style={{
                            background: '#f5f5f5',
                            border: 'none',
                            borderRadius: 6,
                            padding: '4px 8px',
                            fontSize: '12px',
                            color: '#737373',
                            cursor: 'pointer',
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}
                    >
                        ESC
                    </button>
                </div>

                {/* Results */}
                <div style={{
                    maxHeight: 'calc(60vh - 60px)',
                    overflowY: 'auto',
                    padding: 8
                }}>
                    {query.length === 0 ? (
                        <div style={{
                            padding: '40px 20px',
                            textAlign: 'center',
                            color: '#737373',
                            fontSize: '14px',
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            Start typing to search apps...
                        </div>
                    ) : filteredApps.length === 0 ? (
                        <div style={{
                            padding: '40px 20px',
                            textAlign: 'center',
                            color: '#737373',
                            fontSize: '14px',
                            fontFamily: 'Inter, system-ui, sans-serif'
                        }}>
                            No apps found for "{query}"
                        </div>
                    ) : (
                        filteredApps.map(app => (
                            <Link
                                key={app.slug}
                                to={`/apps/${app.slug}`}
                                onClick={onClose}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 14,
                                    padding: '12px 14px',
                                    borderRadius: 10,
                                    textDecoration: 'none',
                                    transition: 'background 0.15s ease'
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = '#f5f5f5'}
                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                            >
                                <div style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 12,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    overflow: 'hidden',
                                    background: app.iconUrl ? '#fff' : 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
                                }}>
                                    {app.iconUrl ? (
                                        <img src={app.iconUrl} alt={app.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <span style={{ fontSize: '20px' }}>🎵</span>
                                    )}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        color: '#0a0a0a',
                                        marginBottom: 2,
                                        fontFamily: 'Inter, system-ui, sans-serif'
                                    }}>
                                        {app.name}
                                    </div>
                                    <div style={{
                                        fontSize: '13px',
                                        color: '#737373',
                                        fontFamily: 'Inter, system-ui, sans-serif',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {app.shortDescription}
                                    </div>
                                </div>
                                <span style={{
                                    background: 'rgba(249, 115, 22, 0.1)',
                                    color: '#f97316',
                                    padding: '4px 10px',
                                    borderRadius: 6,
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    fontFamily: 'Inter, system-ui, sans-serif'
                                }}>
                                    {app.category.name}
                                </span>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
