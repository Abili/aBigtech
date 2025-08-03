import React from "react";

export default function Features() {
  return (
    <section style={{ 
      width: "100%", 
      background: "#f8f9fa", 
      padding: "80px 0", 
      boxSizing: "border-box", 
      margin: 0 
    }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: "0 auto", 
        padding: "0 24px" 
      }}>
        <h2 style={{ 
          fontSize: 32, 
          fontWeight: 400, 
          marginBottom: 64, 
          color: "#202124",
          textAlign: "left",
          fontFamily: "Google Sans, Arial, sans-serif"
        }}>
          New features
        </h2>
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          gap: 80 
        }}>
          {/* Feature 1 */}
          <div style={{
            display: "flex",
            gap: 60,
            alignItems: "flex-start"
          }}>
            <div style={{ flex: 1 }}>
              <div style={{
                width: "100%",
                height: 300,
                background: "#202124",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                color: "#9aa0a6",
                fontFamily: "Roboto, Arial, sans-serif",
                marginBottom: 24
              }}>
                eyClips AI Interface Screenshot
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ 
                fontSize: 12, 
                fontWeight: 500, 
                color: "#5f6368", 
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                FEATURE
              </div>
              <h3 style={{ 
                fontSize: 28, 
                fontWeight: 400, 
                margin: "0 0 16px 0",
                color: "#202124",
                fontFamily: "Google Sans, Arial, sans-serif"
              }}>
                Try AI in eyClips
              </h3>
              <p style={{ 
                fontSize: 16, 
                margin: "0 0 24px 0", 
                color: "#5f6368",
                lineHeight: 1.6,
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                AI in eyClips is an assistant that helps you identify movies and TV shows, get recommendations, and answer questions about entertainment content. Available in eyClips Web.
              </p>
              <a href="#" style={{ 
                color: "#1a73e8", 
                textDecoration: "none", 
                fontSize: 14,
                fontFamily: "Roboto, Arial, sans-serif",
                fontWeight: 500
              }}>
                Try AI in eyClips
              </a>
            </div>
          </div>

          {/* Feature 2 */}
          <div style={{
            display: "flex",
            gap: 60,
            alignItems: "flex-start"
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ 
                fontSize: 12, 
                fontWeight: 500, 
                color: "#5f6368", 
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                FEATURE
              </div>
              <h3 style={{ 
                fontSize: 28, 
                fontWeight: 400, 
                margin: "0 0 16px 0",
                color: "#202124",
                fontFamily: "Google Sans, Arial, sans-serif"
              }}>
                Instant movie identification
              </h3>
              <p style={{ 
                fontSize: 16, 
                margin: "0 0 24px 0", 
                color: "#5f6368",
                lineHeight: 1.6,
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                Upload any video clip or screenshot and get instant movie or TV show identification with detailed information including cast, ratings, and streaming availability.
              </p>
              <a href="#" style={{ 
                color: "#1a73e8", 
                textDecoration: "none", 
                fontSize: 14,
                fontFamily: "Roboto, Arial, sans-serif",
                fontWeight: 500
              }}>
                Try movie identification
              </a>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                width: "100%",
                height: 300,
                background: "#202124",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                color: "#9aa0a6",
                fontFamily: "Roboto, Arial, sans-serif",
                marginTop: 40
              }}>
                Movie Identification Screenshot
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
