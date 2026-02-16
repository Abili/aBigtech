import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

export default function SEO({
    title = 'aBig Tech - Secure Android APK Downloads',
    description = 'Download verified, scanned, and safe Android APKs. Fast, secure, and always up-to-date.',
    image = '/logo.png', // Ensure you have a default OG image
    url = window.location.href,
    type = 'website'
}: SEOProps) {
    const siteTitle = title === 'aBig Tech - Secure Android APK Downloads' ? title : `${title} | aBig Tech`;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="google-site-verification" content="RBUn1dgiSsASUWM39lcb9xbeylLnhktk4IfjzngorPY" />
            <link rel="canonical" href={url} />

            {/* Facebook Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}
