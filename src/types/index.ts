// App and Version data models for aBig Tech APK Distribution Platform

export interface App {
    slug: string;
    name: string;
    packageName: string;
    category: Category;
    versions: Version[];
    description: string;
    shortDescription: string;
    features: string[];
    screenshots: string[];
    iconUrl: string;
    requirements: Requirements;
    developerName: string;
    totalDownloads: number;
    rating: number;
    ratingCount: number;
}

export interface Version {
    versionCode: number;
    versionName: string;
    releaseDate: string;
    size: number; // in bytes
    minSdk: number;
    targetSdk: number;
    checksum: string; // SHA-256
    signatureHash: string;
    scanDate: string;
    scanResult: 'clean' | 'suspicious' | 'pending';
    downloadUrl: string;
    changelog: string;
}

export interface Category {
    slug: string;
    name: string;
    description: string;
    icon: string;
}

export interface Requirements {
    minAndroidVersion: string;
    permissions: Permission[];
    storageRequired: number; // in bytes
}

export interface Permission {
    name: string;
    description: string;
    level: 'normal' | 'dangerous' | 'signature';
}

// Navigation types
export interface NavItem {
    label: string;
    path: string;
    children?: NavItem[];
}

// Trust badge types
export interface TrustBadge {
    type: 'verified' | 'scanned' | 'signed' | 'clean';
    label: string;
    description: string;
    timestamp?: string;
    value?: string;
}
