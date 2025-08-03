import React from "react";

export default function Hero() {
  return (
    <section style={{ 
      width: "100%", 
      background: "#f8f9fa", 
      padding: "40px 0", 
      boxSizing: "border-box", 
      margin: 0
    }}>
      <div style={{ 
        width: "100%", 
        margin: "0", 
        padding: "0"
      }}>
        <div style={{
          background: "#fff",
          borderRadius: 0,
          padding: "48px 24px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
          border: "1px solid #dadce0",
          borderLeft: "none",
          borderRight: "none",
          display: "flex",
          alignItems: "flex-start",
          gap: 80,
          minHeight: 400,
          margin: 0,
          width: "100%",
          boxSizing: "border-box"
        }}>
        <div style={{ 
          flex: 1,
          maxWidth: 600
        }}>
          <h1 style={{ 
            fontSize: 64, 
            fontWeight: 300, 
            marginBottom: 32, 
            lineHeight: 1.1,
            color: "#202124",
            fontFamily: "Google Sans, Arial, sans-serif",
            letterSpacing: "-2px"
          }}>
            eyClips
          </h1>
          <p style={{ 
            fontSize: 22, 
            marginBottom: 48, 
            lineHeight: 1.6,
            color: "#5f6368",
            fontFamily: "Roboto, Arial, sans-serif",
            maxWidth: 580
          }}>
            The premier platform for movie and TV show identification that revolutionizes your entertainment discovery with cutting-edge machine learning technology for web and Android.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            <a href="#" style={{ 
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#000", 
              color: "#fff", 
              fontWeight: 500, 
              fontSize: 14, 
              padding: "12px 24px", 
              borderRadius: 6, 
              textDecoration: "none",
              fontFamily: "Roboto, Arial, sans-serif",
              border: "none",
              width: "200px",
              height: "60px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              transition: "box-shadow 0.2s ease"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ 
                  fontSize: 24,
                  lineHeight: 1
                }}>
                  ▶️
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 10, lineHeight: 1.2, opacity: 0.8 }}>GET IT ON</div>
                  <div style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.2 }}>Google Play</div>
                </div>
              </div>
            </a>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 8,
              marginTop: 8,
              fontSize: 12,
              color: "#5f6368",
              fontFamily: "Roboto, Arial, sans-serif"
            }}>
              <span>🍎</span>
              <span>iOS App Coming Soon</span>
            </div>
          </div>
          <a href="#" style={{ 
            color: "#1a73e8", 
            textDecoration: "none", 
            fontSize: 14,
            fontFamily: "Roboto, Arial, sans-serif",
            fontWeight: 500
          }}>
            Read release notes
          </a>
        </div>
        <div style={{ 
          flex: 1,
          display: "flex", 
          justifyContent: "center",
          alignItems: "center",
          minHeight: 400
        }}>
          <div style={{
            width: "100%",
            maxWidth: 480,
            height: 320,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            color: "#ffffff",
            fontFamily: "Roboto, Arial, sans-serif",
            boxShadow: "0 12px 40px rgba(102, 126, 234, 0.4)"
          }}>
            eyClips Premium Interface
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
