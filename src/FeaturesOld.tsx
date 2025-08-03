import React from "react";

export default function Features() {
  return (
    <section style={{ 
      width: "100vw", 
      background: "#f8f9fa", 
      padding: "80px 0", 
      boxSizing: "border-box", 
      margin: 0 
    }}>
      <div style={{ 
        width: "100vw", 
        margin: "0", 
        padding: "0 5vw",
        boxSizing: "border-box"
      }}>
        <h2 style={{ 
          fontSize: 48, 
          fontWeight: 700, 
          marginBottom: 60, 
          color: "#1a1a1a",
          textAlign: "left"
        }}>
          New features
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: "3vw",
          width: "100%"
        }}>
          <div style={{ 
            background: "#fff", 
            borderRadius: 24, 
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)", 
            overflow: "hidden",
            border: "1px solid #e8e8e8"
          }}>
            <div style={{ 
              background: "#2d2d2d", 
              height: 320, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              color: "#ccc",
              fontSize: 16
            }}>
              eyClips Web Interface Screenshot
            </div>
            <div style={{ padding: 40 }}>
              <div style={{ 
                fontSize: 12, 
                fontWeight: 600, 
                color: "#666", 
                marginBottom: 12,
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>
                FEATURE
              </div>
              <h3 style={{ 
                fontSize: 28, 
                fontWeight: 700, 
                margin: "0 0 16px 0",
                color: "#1a1a1a"
              }}>
                Try AI in eyClips
              </h3>
              <p style={{ 
                fontSize: 18, 
                margin: 0, 
                color: "#555",
                lineHeight: 1.5
              }}>
                AI in eyClips is an assistant that helps you identify movies and TV shows, get recommendations, and answer questions about entertainment content. Available in eyClips Web.
              </p>
            </div>
          </div>

          <div style={{ 
            background: "#fff", 
            borderRadius: 24, 
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)", 
            overflow: "hidden",
            border: "1px solid #e8e8e8"
          }}>
            <div style={{ 
              background: "#2d2d2d", 
              height: 320, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              color: "#ccc",
              fontSize: 16
            }}>
              eyClips Mobile App Screenshot
            </div>
            <div style={{ padding: 40 }}>
              <div style={{ 
                fontSize: 12, 
                fontWeight: 600, 
                color: "#666", 
                marginBottom: 12,
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>
                FEATURE
              </div>
              <h3 style={{ 
                fontSize: 28, 
                fontWeight: 700, 
                margin: "0 0 16px 0",
                color: "#1a1a1a"
              }}>
                Identify anywhere with eyClips Mobile
              </h3>
              <p style={{ 
                fontSize: 18, 
                margin: 0, 
                color: "#555",
                lineHeight: 1.5
              }}>
                Try eyClips Mobile directly on your phone. Streamline your entertainment discovery and get instant results wherever you are. Try the Android app now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
