import type { App, Category } from '../types';

// Categories
export const categories: Category[] = [
    { slug: 'music', name: 'Music & Audio', description: 'Music players and audio apps', icon: '🎵' },
    { slug: 'productivity', name: 'Productivity', description: 'Tools to get things done', icon: '📊' },
    { slug: 'utilities', name: 'Utilities', description: 'System utilities and tools', icon: '🔧' },
    { slug: 'entertainment', name: 'Entertainment', description: 'Games and entertainment', icon: '🎬' },
    { slug: 'communication', name: 'Communication', description: 'Messaging and social apps', icon: '💬' },
];


// Helper to get Firebase Storage download URL from gs:// path
function getFirebaseDownloadUrl(gsPath: string): string {
    const match = gsPath.match(/gs:\/\/([^/]+)\/(.+)/);
    if (!match) return gsPath;
    const [, bucket, path] = match;
    const encodedPath = encodeURIComponent(path);
    return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodedPath}?alt=media`;
}

// Apps data
export const apps: App[] = [
    {
        slug: 'myuzek',
        name: 'Myuzek',
        packageName: 'com.abigtech.myuzek',
        category: categories[0], // Music & Audio
        description: `Myuzek is a feature-rich music player with social features. Create and share playlists, join music groups, and enjoy synchronized listening sessions with friends.

Key Features:
• Shuffle & Repeat modes for customized playback
• Queue-based playback across all screens
• Group music sessions with real-time sync
• Playlist sharing and collaboration
• Pending song approval for group admins
• Light and dark theme support
• Local music library integration`,
        shortDescription: 'Social music player with group listening sessions',
        features: [
            'Shuffle & Repeat modes',
            'Queue-based playback',
            'Group listening sessions',
            'Playlist sharing',
            'Real-time sync',
            'Light/Dark themes',
        ],
        screenshots: [
            '/screenshots/1000419638.jpg',
            '/screenshots/1000419640.jpg',
            '/screenshots/1000419642.jpg',
            '/screenshots/1000419646.jpg',
            '/screenshots/1000419648.jpg',
            '/screenshots/1000419653.jpg',
        ],
        iconUrl: '/myuzek-icon.png',
        requirements: {
            minAndroidVersion: '8.0',
            permissions: [
                { name: 'INTERNET', description: 'Required for streaming and sync', level: 'normal' },
                { name: 'READ_EXTERNAL_STORAGE', description: 'Access local music files', level: 'dangerous' },
                { name: 'FOREGROUND_SERVICE', description: 'Background music playback', level: 'normal' },
            ],
            storageRequired: 50 * 1024 * 1024, // 50MB
        },
        developerName: 'aBig Tech',
        totalDownloads: 15430, // Initial static value, overridden by real-time data
        rating: 0,
        ratingCount: 0,
        versions: [
            {
                versionCode: 16,
                versionName: '1.6.0',
                releaseDate: '2026-01-15',
                size: 23872544, // ~22.7MB (debug APK size)
                minSdk: 26,
                targetSdk: 34,
                checksum: '', // Add SHA-256 when available
                signatureHash: '',
                scanDate: '2026-01-15',
                scanResult: 'clean',
                downloadUrl: getFirebaseDownloadUrl('gs://abigtech-c2f76.firebasestorage.app/apps/Myuzek/app-debug.apk'),
                changelog: `## Version 1.6.0 (January 2026)

### 🎵 Music Player Enhancements
- **Shuffle Mode**: Toggle shuffle for randomized playback
- **Repeat Modes**: Repeat Off, Repeat One, and Repeat All
- **Queue Navigation**: Next/previous song with full queue support

### 👥 Group Features
- **Pending Song Visibility**: See all pending songs in group playlists
- **Deactivated State**: Pending songs appear grayed out until approved
- **Upload Permissions**: Uploaders can remove/cancel their pending songs

### 📝 Playlist Management
- **Edit Playlist**: Modify name and description
- **Share Playlist**: Share via system share sheet
- **Unique View Counting**: One view per user per playlist

### 🐛 Bug Fixes
- Fixed queue navigation issues
- Improved shuffle randomization
- Fixed repeat mode visual indicators`,
            },
        ],
    },
];

// Helper functions
export function getAppBySlug(slug: string): App | undefined {
    return apps.find(app => app.slug === slug);
}

export function getAppsByCategory(categorySlug: string): App[] {
    return apps.filter(app => app.category.slug === categorySlug);
}

export function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}
