import React from "react";

export default function PrivacyPolicy() {
  return (
    <main style={{ 
      padding: 0, 
      margin: 0, 
      width: "100%", 
      background: "#fff",
      overflow: "hidden" 
    }}>
      <div style={{ 
        maxWidth: 1400, 
        margin: "0 auto", 
        padding: "80px 40px",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{ 
          maxWidth: 800,
          margin: "0 auto",
          width: "100%"
        }}>
          <h1 style={{ 
            fontSize: 48, 
            fontWeight: 700, 
            color: '#1976d2', 
            marginBottom: 16,
            letterSpacing: '-1px' 
          }}>
            Privacy Policy
          </h1>
          <p style={{ 
            fontSize: 18, 
            color: '#666', 
            marginBottom: 32,
            fontWeight: 600
          }}>
            <strong>Last Updated: August 2, 2025</strong>
          </p>
          <p style={{ 
            fontSize: 20, 
            color: '#333', 
            lineHeight: 1.6,
            marginBottom: 40
          }}>
            Welcome to eyClips! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
          </p>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#1976d2', 
              marginBottom: 20,
              letterSpacing: '-0.5px' 
            }}>
              Information We Collect
            </h2>
            <div style={{ 
              fontSize: 16, 
              color: '#333', 
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              <p style={{ marginBottom: 16 }}>
                <strong>Video Data:</strong> When you upload a video clip or record a scene, frames from that video are sent to our AI service provider (Google Gemini) for analysis. This data is used solely for the purpose of identifying the movie or TV show and is not stored by us after the analysis is complete.
              </p>
              <p style={{ marginBottom: 16 }}>
                <strong>Identification History:</strong> If you use the app, we store your successful movie identifications (title, poster, year, etc.) directly on your device using your browser's local storage. This data is not transmitted to our servers and remains private to you. You can clear this history at any time from the Settings page.
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Settings:</strong> Your app preferences, such as your chosen theme, are also stored in your browser's local storage. This data is for your convenience and is not sent to our servers.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#1976d2', 
              marginBottom: 20,
              letterSpacing: '-0.5px' 
            }}>
              How We Use Your Information
            </h2>
            <div style={{ 
              fontSize: 16, 
              color: '#333', 
              lineHeight: 1.6
            }}>
              <p style={{ marginBottom: 12 }}>• Provide, operate, and maintain the core functionality of our application.</p>
              <p style={{ marginBottom: 12 }}>• Enable you to keep a personal history of your identified clips.</p>
              <p style={{ marginBottom: 0 }}>• Allow you to customize your user experience.</p>
            </div>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#1976d2', 
              marginBottom: 20,
              letterSpacing: '-0.5px' 
            }}>
              Third-Party Services
            </h2>
            <div style={{ 
              fontSize: 16, 
              color: '#333', 
              lineHeight: 1.6
            }}>
              <p style={{ marginBottom: 16 }}>
                <strong>Google Gemini API:</strong> For AI-powered video analysis. We do not control their data handling practices. We recommend you review their privacy policy.
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>The Movie Database (TMDb) API:</strong> To fetch details (like posters, cast, and ratings) about identified movies and TV shows.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#1976d2', 
              marginBottom: 20,
              letterSpacing: '-0.5px' 
            }}>
              Data Security
            </h2>
            <p style={{ 
              fontSize: 16, 
              color: '#333', 
              lineHeight: 1.6,
              marginBottom: 0
            }}>
              Since we do not store your video data or history on our servers, the security of that data is primarily managed on your own device. We encourage you to maintain the security of your browser and device.
            </p>
          </section>

          <section style={{ marginBottom: 0 }}>
            <h2 style={{ 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#1976d2', 
              marginBottom: 20,
              letterSpacing: '-0.5px' 
            }}>
              Changes to This Privacy Policy
            </h2>
            <p style={{ 
              fontSize: 16, 
              color: '#333', 
              lineHeight: 1.6,
              marginBottom: 0
            }}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
