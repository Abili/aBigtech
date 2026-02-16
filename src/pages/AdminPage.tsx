import { useState, useEffect, useRef } from 'react';
import { auth, googleProvider, db, storage } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';
import { collection, getDocs, doc, updateDoc, getDoc, query, orderBy, limit } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const ADMIN_EMAIL = 'abiliisaac@gmail.com';

interface VersionInfo {
    latestVersionCode: number;
    latestVersionName: string;
    updateUrl: string;
    releaseNotes: string;
    forceUpdate: boolean;
}

export default function AdminPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState<any[]>([]);

    // Version Management State
    const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);
    const [newVersionCode, setNewVersionCode] = useState('');
    const [newVersionName, setNewVersionName] = useState('');
    const [releaseNotes, setReleaseNotes] = useState('');
    const [forceUpdate, setForceUpdate] = useState(false);
    const [apkFile, setApkFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Analytics State
    const [analyticsTab, setAnalyticsTab] = useState<'overview' | 'downloads'>('overview');
    const [downloadLogs, setDownloadLogs] = useState<any[]>([]);
    const [countryStats, setCountryStats] = useState<{ name: string, count: number }[]>([]);
    const [versionStats, setVersionStats] = useState<{ version: string, count: number }[]>([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser && currentUser.email === ADMIN_EMAIL) {
                fetchStats();
                fetchVersionInfo();
                fetchDownloadLogs();
            }
        });
        return () => unsubscribe();
    }, []);

    // ... (fetchStats and fetchVersionInfo remain same)

    // Helper to fetch stats
    const fetchStats = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'apps'));
            const appsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setStats(appsData);
        } catch (error) {
            console.error("Error fetching stats:", error);
        }
    };

    const fetchVersionInfo = async () => {
        try {
            const docRef = doc(db, 'apps', 'myuzek');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data() as VersionInfo;
                setVersionInfo(data);
                setNewVersionCode(String(data.latestVersionCode || ''));
                setNewVersionName(data.latestVersionName || '');
                setReleaseNotes(data.releaseNotes || '');
                setForceUpdate(data.forceUpdate || false);
            }
        } catch (error) {
            console.error("Error fetching version info:", error);
        }
    };

    const fetchDownloadLogs = async () => {
        try {
            // Fetch last 100 downloads for Myuzek
            const logsRef = collection(db, 'apps', 'myuzek', 'downloads');
            const q = query(logsRef, orderBy('timestamp', 'desc'), limit(100));
            const snapshot = await getDocs(q);

            const logs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                timestamp: doc.data().timestamp?.toDate()
            }));

            setDownloadLogs(logs);

            // Aggregate by Country
            const countryMap = new Map<string, number>();
            logs.forEach((log: any) => {
                const country = log.country || 'Unknown';
                countryMap.set(country, (countryMap.get(country) || 0) + 1);
            });

            const cStats = Array.from(countryMap.entries())
                .map(([name, count]) => ({ name, count }))
                .sort((a, b) => b.count - a.count);

            setCountryStats(cStats);

            // Aggregate by Version
            const versionMap = new Map<string, number>();
            logs.forEach((log: any) => {
                const ver = log.version || 'Unknown';
                versionMap.set(ver, (versionMap.get(ver) || 0) + 1);
            });

            const vStats = Array.from(versionMap.entries())
                .map(([version, count]) => ({ version, count }))
                .sort((a, b) => b.count - a.count); // Most popular first

            setVersionStats(vStats);

        } catch (error) {
            console.error("Error fetching download logs:", error);
        }
    };

    const handleUpload = async () => {
        if (!apkFile || !newVersionCode || !newVersionName) {
            alert('Please fill in all required fields and select an APK file.');
            return;
        }

        setUploading(true);
        setUploadProgress(0);

        try {
            // Upload to Storage: apps/Myuzek/{versionName}.apk
            const storageRef = ref(storage, `apps/Myuzek/${newVersionName}.apk`);
            const uploadTask = uploadBytesResumable(storageRef, apkFile);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(Math.round(progress));
                },
                (error) => {
                    console.error('Upload error:', error);
                    alert(`Upload failed: ${error.message}`);
                    setUploading(false);
                },
                async () => {
                    // Get download URL
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                    // Update Firestore
                    const docRef = doc(db, 'apps', 'myuzek');
                    await updateDoc(docRef, {
                        latestVersionCode: parseInt(newVersionCode),
                        latestVersionName: newVersionName,
                        updateUrl: downloadURL,
                        releaseNotes: releaseNotes,
                        forceUpdate: forceUpdate,
                        size: apkFile.size
                    });

                    alert('Upload successful! Version info updated.');
                    setUploading(false);
                    setApkFile(null);
                    if (fileInputRef.current) fileInputRef.current.value = '';
                    fetchVersionInfo();
                    fetchStats();
                }
            );
        } catch (error: any) {
            console.error('Upload error:', error);
            alert(`Upload failed: ${error.message}`);
            setUploading(false);
        }
    };

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const handleLogout = () => signOut(auth);

    if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Loading...</div>;

    if (!user) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80vh',
                fontFamily: 'Inter, system-ui, sans-serif'
            }}>
                <h1 style={{ marginBottom: 24 }}>Admin Login</h1>
                <button
                    onClick={handleLogin}
                    style={{
                        background: '#f97316',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: 8,
                        fontSize: '16px',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}
                >
                    Sign in with Google
                </button>
            </div>
        );
    }

    if (user.email !== ADMIN_EMAIL) {
        return (
            <div style={{ padding: 40, textAlign: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
                <h1 style={{ color: '#ef4444' }}>Access Denied</h1>
                <p>You are not authorized to view this page.</p>
                <div style={{ marginTop: 16, color: '#525252' }}>Signed in as: {user.email}</div>
                <button
                    onClick={handleLogout}
                    style={{
                        marginTop: 24,
                        padding: '8px 16px',
                        background: '#f5f5f5',
                        border: '1px solid #e5e5e5',
                        borderRadius: 6,
                        cursor: 'pointer'
                    }}
                >
                    Sign Out
                </button>
            </div>
        );
    }

    return (
        <div style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '40px 24px',
            fontFamily: 'Inter, system-ui, sans-serif'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 40
            }}>
                <h1 style={{ fontSize: '28px', fontWeight: 700 }}>Admin Dashboard</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ fontSize: '14px', color: '#525252' }}>{user.email}</span>
                    <button
                        onClick={handleLogout}
                        style={{
                            padding: '8px 16px',
                            background: 'white',
                            border: '1px solid #e5e5e5',
                            borderRadius: 6,
                            cursor: 'pointer',
                            fontSize: '14px',
                            color: '#0a0a0a',
                            fontWeight: 500
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = '#f5f5f5'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                    >
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Security Warning Banner */}
            <div style={{
                background: '#fef2f2',
                border: '1px solid #fee2e2',
                borderRadius: 12,
                padding: '16px 20px',
                marginBottom: 32,
                display: 'flex',
                alignItems: 'start',
                gap: 16
            }}>
                <div style={{
                    fontSize: '24px',
                    lineHeight: 1
                }}>
                    🛡️
                </div>
                <div>
                    <h3 style={{
                        color: '#991b1b',
                        fontSize: '15px',
                        fontWeight: 600,
                        margin: '0 0 4px 0'
                    }}>
                        Security Alert
                    </h3>
                    <p style={{
                        color: '#b91c1c',
                        fontSize: '14px',
                        lineHeight: 1.5,
                        margin: 0
                    }}>
                        Unauthorized access or tampering attempts are logged and will result in immediate account termination.
                        Ensure you are on a secure network before performing admin actions.
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 24, marginBottom: 32, borderBottom: '1px solid #e5e5e5' }}>
                <button
                    onClick={() => setAnalyticsTab('overview')}
                    style={{
                        padding: '12px 4px',
                        background: 'none',
                        border: 'none',
                        borderBottom: analyticsTab === 'overview' ? '2px solid #f97316' : '2px solid transparent',
                        color: analyticsTab === 'overview' ? '#f97316' : '#737373',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: '15px',
                        transition: 'all 0.2s ease'
                    }}
                >
                    Overview & Upload
                </button>
                <button
                    onClick={() => setAnalyticsTab('downloads')}
                    style={{
                        padding: '12px 4px',
                        background: 'none',
                        border: 'none',
                        borderBottom: analyticsTab === 'downloads' ? '2px solid #f97316' : '2px solid transparent',
                        color: analyticsTab === 'downloads' ? '#f97316' : '#737373',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: '15px',
                        transition: 'all 0.2s ease'
                    }}
                >
                    Download Analytics
                </button>
            </div>

            {analyticsTab === 'overview' ? (
                <>
                    {/* Stats Grid */}
                    <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: 16 }}>Download Stats</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 24,
                        marginBottom: 48
                    }}>
                        {stats.length > 0 ? stats.map((app: any) => (
                            <div key={app.id} style={{
                                background: 'white',
                                padding: 24,
                                borderRadius: 16,
                                border: '1px solid #e5e5e5',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 8, textTransform: 'capitalize' }}>
                                    {app.id}
                                </h3>
                                <div style={{ fontSize: '32px', fontWeight: 700, color: '#f97316' }}>
                                    {(app.downloads || 0).toLocaleString()}
                                </div>
                                <div style={{ fontSize: '14px', color: '#737373', marginTop: 4 }}>
                                    Total Downloads
                                </div>
                            </div>
                        )) : (
                            <div style={{ color: '#737373' }}>Loading stats...</div>
                        )}
                    </div>

                    {/* Version Management Section */}
                    <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: 16 }}>Manage App Version</h2>
                    <div style={{
                        background: 'white',
                        padding: 32,
                        borderRadius: 16,
                        border: '1px solid #e5e5e5',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}>
                        {/* Current Version Display */}
                        {versionInfo && (
                            <div style={{
                                background: '#f5f5f5',
                                padding: 16,
                                borderRadius: 12,
                                marginBottom: 24
                            }}>
                                <div style={{ fontSize: '14px', color: '#737373', marginBottom: 8 }}>Current Version</div>
                                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                                    <div>
                                        <span style={{ fontWeight: 600 }}>v{versionInfo.latestVersionName}</span>
                                        <span style={{ color: '#737373', marginLeft: 8 }}>(Code: {versionInfo.latestVersionCode})</span>
                                    </div>
                                    {versionInfo.forceUpdate && (
                                        <span style={{ background: '#fef2f2', color: '#ef4444', padding: '2px 8px', borderRadius: 4, fontSize: '12px' }}>
                                            Force Update
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Upload Form */}
                        <div style={{ display: 'grid', gap: 20 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: 6 }}>
                                        Version Code *
                                    </label>
                                    <input
                                        type="number"
                                        value={newVersionCode}
                                        onChange={(e) => setNewVersionCode(e.target.value)}
                                        placeholder="e.g., 17"
                                        style={{
                                            width: '100%',
                                            padding: '10px 12px',
                                            border: '1px solid #e5e5e5',
                                            borderRadius: 8,
                                            fontSize: '14px'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: 6 }}>
                                        Version Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={newVersionName}
                                        onChange={(e) => setNewVersionName(e.target.value)}
                                        placeholder="e.g., 1.7.0"
                                        style={{
                                            width: '100%',
                                            padding: '10px 12px',
                                            border: '1px solid #e5e5e5',
                                            borderRadius: 8,
                                            fontSize: '14px'
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: 6 }}>
                                    Release Notes
                                </label>
                                <textarea
                                    value={releaseNotes}
                                    onChange={(e) => setReleaseNotes(e.target.value)}
                                    placeholder="What's new in this version..."
                                    rows={3}
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px',
                                        border: '1px solid #e5e5e5',
                                        borderRadius: 8,
                                        fontSize: '14px',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: 6 }}>
                                    APK File *
                                </label>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".apk"
                                    onChange={(e) => setApkFile(e.target.files?.[0] || null)}
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px',
                                        border: '1px solid #e5e5e5',
                                        borderRadius: 8,
                                        fontSize: '14px',
                                        background: 'white'
                                    }}
                                />
                                {apkFile && (
                                    <div style={{ fontSize: '13px', color: '#737373', marginTop: 6 }}>
                                        Selected: {apkFile.name} ({(apkFile.size / (1024 * 1024)).toFixed(2)} MB)
                                    </div>
                                )}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <input
                                    type="checkbox"
                                    id="forceUpdate"
                                    checked={forceUpdate}
                                    onChange={(e) => setForceUpdate(e.target.checked)}
                                    style={{ width: 18, height: 18 }}
                                />
                                <label htmlFor="forceUpdate" style={{ fontSize: '14px', cursor: 'pointer' }}>
                                    Force Update (require users to update)
                                </label>
                            </div>

                            {/* Upload Progress */}
                            {uploading && (
                                <div style={{
                                    background: '#f5f5f5',
                                    borderRadius: 8,
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: `${uploadProgress}%`,
                                        height: 8,
                                        background: 'linear-gradient(90deg, #f97316, #ea580c)',
                                        transition: 'width 0.3s ease'
                                    }} />
                                    <div style={{ padding: '8px 12px', fontSize: '13px', color: '#525252' }}>
                                        Uploading... {uploadProgress}%
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handleUpload}
                                disabled={uploading}
                                style={{
                                    padding: '12px 24px',
                                    background: uploading ? '#d4d4d4' : 'linear-gradient(135deg, #f97316, #ea580c)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 8,
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    cursor: uploading ? 'not-allowed' : 'pointer',
                                    marginTop: 8
                                }}
                            >
                                {uploading ? 'Uploading...' : 'Upload & Publish Version'}
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
                    {/* Top Countries Card */}
                    <div style={{ background: 'white', padding: 24, borderRadius: 16, border: '1px solid #e5e5e5', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 16 }}>Top Countries</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {countryStats.map((stat, i) => (
                                <div key={stat.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <span style={{ fontSize: '14px', color: '#9ca3af', width: 20 }}>{i + 1}</span>
                                        <span style={{ fontWeight: 500 }}>{stat.name}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <div style={{ height: 6, width: 64, background: '#f3f4f6', borderRadius: 10, overflow: 'hidden' }}>
                                            <div style={{ height: '100%', width: `${(stat.count / Math.max(...countryStats.map(s => s.count))) * 100}%`, background: '#f97316' }} />
                                        </div>
                                        <span style={{ fontSize: '13px', color: '#525252', minWidth: 24, textAlign: 'right' }}>{stat.count}</span>
                                    </div>
                                </div>
                            ))}
                            {countryStats.length === 0 && <div style={{ color: '#737373', fontStyle: 'italic' }}>No data yet</div>}
                        </div>
                    </div>

                    {/* Version Popularity Card */}
                    <div style={{ background: 'white', padding: 24, borderRadius: 16, border: '1px solid #e5e5e5', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 16 }}>Downloads by Version</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {versionStats.map((stat, i) => (
                                <div key={stat.version} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <div style={{
                                            width: 32, height: 32,
                                            borderRadius: 8,
                                            background: i === 0 ? '#fff7ed' : '#f5f5f5',
                                            color: i === 0 ? '#ea580c' : '#525252',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontWeight: 600, fontSize: '13px'
                                        }}>
                                            v{stat.version}
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontWeight: 500, fontSize: '14px' }}>Version {stat.version}</span>
                                            {i === 0 && <span style={{ fontSize: '11px', color: '#ea580c', fontWeight: 500 }}>Latest / Most Popular</span>}
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <div style={{ height: 6, width: 64, background: '#f3f4f6', borderRadius: 10, overflow: 'hidden' }}>
                                            <div style={{ height: '100%', width: `${(stat.count / Math.max(...versionStats.map(s => s.count))) * 100}%`, background: i === 0 ? '#f97316' : '#9ca3af' }} />
                                        </div>
                                        <span style={{ fontSize: '13px', color: '#525252', minWidth: 24, textAlign: 'right' }}>{stat.count}</span>
                                    </div>
                                </div>
                            ))}
                            {versionStats.length === 0 && <div style={{ color: '#737373', fontStyle: 'italic' }}>No version data yet</div>}
                        </div>
                    </div>

                    {/* Recent Downloads Feed */}
                    <div style={{ background: 'white', padding: 24, borderRadius: 16, border: '1px solid #e5e5e5', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', gridColumn: '1 / -1' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 16 }}>Recent Downloads</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            {downloadLogs.map((log) => (
                                <div key={log.id} style={{ padding: '12px 0', borderBottom: '1px solid #f5f5f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontWeight: 500, fontSize: '14px' }}>{log.city}, {log.country}</div>
                                        <div style={{ fontSize: '12px', color: '#737373' }}>
                                            {log.timestamp ? log.timestamp.toLocaleString() : 'Just now'} • <span style={{ color: '#ea580c', fontWeight: 500 }}>v{log.version}</span>
                                        </div>
                                        {log.userEmail && (
                                            <div style={{ fontSize: '11px', color: '#525252', marginTop: 2 }}>
                                                👤 {log.userEmail}
                                            </div>
                                        )}
                                    </div>
                                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>{log.ip}</div>
                                </div>
                            ))}
                            {downloadLogs.length === 0 && <div style={{ color: '#737373', fontStyle: 'italic' }}>No downloads recorded yet</div>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
