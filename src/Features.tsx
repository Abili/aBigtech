export default function Features() {
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
        margin: 0,
        width: "100%",
        boxSizing: "border-box"
      }}>
        <h2 style={{ 
          fontSize: 48, 
          fontWeight: 300, 
          marginBottom: 64, 
          color: "#202124",
          textAlign: "center",
          fontFamily: "Google Sans, Arial, sans-serif",
          letterSpacing: "-1px"
        }}>
          Premium Features
        </h2>
        <div style={{ 
          textAlign: "center",
          fontSize: 16,
          color: "#5f6368",
          marginBottom: 48,
          fontFamily: "Roboto, Arial, sans-serif"
        }}>
          🌐 Web Platform • 📱 Android App • 🍎 iOS App Coming Soon
        </div>
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
                background: "#f8f9fa",
                border: "1px solid #dadce0",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                color: "#5f6368",
                fontFamily: "Roboto, Arial, sans-serif",
                marginBottom: 24
              }}>
                eyClips Smart Interface Screenshot
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
                fontSize: 32, 
                fontWeight: 300, 
                margin: "0 0 16px 0",
                color: "#202124",
                fontFamily: "Google Sans, Arial, sans-serif",
                letterSpacing: "-0.5px"
              }}>
                Intelligent Recognition Engine
              </h3>
              <p style={{ 
                fontSize: 16, 
                margin: "0 0 24px 0", 
                color: "#5f6368",
                lineHeight: 1.6,
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                Advanced machine learning algorithms power our intelligent recognition system that helps you identify movies and TV shows, discover new content, and get personalized recommendations. Available in eyClips Web.
              </p>
              <a href="#" style={{ 
                color: "#1a73e8", 
                textDecoration: "none", 
                fontSize: 14,
                fontFamily: "Google Sans, Arial, sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                Try Smart Recognition
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
                fontSize: 32, 
                fontWeight: 300, 
                margin: "0 0 16px 0",
                color: "#202124",
                fontFamily: "Google Sans, Arial, sans-serif",
                letterSpacing: "-0.5px"
              }}>
                Lightning-Fast Identification
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
                fontFamily: "Google Sans, Arial, sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                Experience Lightning Speed
              </a>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                width: "100%",
                height: 300,
                background: "#f8f9fa",
                border: "1px solid #dadce0",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                color: "#5f6368",
                fontFamily: "Roboto, Arial, sans-serif",
                marginTop: 40
              }}>
                Premium Identification Interface
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
