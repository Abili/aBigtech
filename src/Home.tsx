export default function Home() {
  return (
    <section style={{ 
      padding: 0, 
      margin: 0, 
      width: "100%", 
      background: "#f8f9fa",
      overflow: "hidden" 
    }}>
      <div style={{ 
        width: "100%", 
        margin: "0", 
        padding: "0"
      }}>
        <div style={{
          background: "#fff",
          borderRadius: 0,
          padding: "32px 24px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
          border: "1px solid #dadce0",
          borderLeft: "none",
          borderRight: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
        <div style={{ 
          textAlign: "center",
          maxWidth: 600,
          marginBottom: 60
        }}>
          <h2 style={{ 
            fontSize: 40, 
            fontWeight: 300, 
            color: '#202124', 
            marginBottom: 20,
            fontFamily: "Google Sans, Arial, sans-serif",
            letterSpacing: "-1px"
          }}>
            Experience the Future
          </h2>
          <p style={{ 
            fontSize: 16, 
            color: '#5f6368', 
            lineHeight: 1.6,
            marginBottom: 16,
            fontFamily: "Roboto, Arial, sans-serif"
          }}>
            Join thousands of users who are already discovering movies and TV shows faster with eyClips.
          </p>
          <div style={{ 
            fontSize: 14, 
            color: '#1a73e8', 
            marginBottom: 32,
            fontFamily: "Roboto, Arial, sans-serif",
            fontWeight: 500
          }}>
            📱 Available on Web & Android • 🍎 iOS Coming Soon
          </div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" style={{ 
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#1a73e8", 
              color: "#fff", 
              fontWeight: 500, 
              fontSize: 14, 
              padding: "16px 32px", 
              borderRadius: 8, 
              textDecoration: "none",
              fontFamily: "Google Sans, Arial, sans-serif",
              border: "none",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}>
              Launch eyClips Web
            </a>
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
              height: "60px"
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
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
          width: "100%",
          maxWidth: 900
        }}>
          <div style={{
            textAlign: "center",
            padding: 32,
            background: "#f8f9fa",
            borderRadius: 16,
            border: "1px solid #dadce0",
            color: "#202124"
          }}>
            <div style={{
              width: 56,
              height: 56,
              background: "#e8f0fe",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px auto",
              fontSize: 24
            }}>
              🎬
            </div>
            <h3 style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#202124",
              marginBottom: 12,
              fontFamily: "Google Sans, Arial, sans-serif"
            }}>
              Instant Recognition
            </h3>
            <p style={{
              fontSize: 14,
              color: "#5f6368",
              lineHeight: 1.5,
              margin: 0,
              fontFamily: "Roboto, Arial, sans-serif"
            }}>
              Upload or record any scene and get results in seconds
            </p>
          </div>

          <div style={{
            textAlign: "center",
            padding: 24,
            background: "#f8f9fa",
            borderRadius: 8,
            border: "1px solid #dadce0"
          }}>
            <div style={{
              width: 48,
              height: 48,
              background: "#e8f0fe",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px auto",
              fontSize: 20
            }}>
              🤖
            </div>
            <h3 style={{
              fontSize: 16,
              fontWeight: 500,
              color: "#202124",
              marginBottom: 8,
              fontFamily: "Google Sans, Arial, sans-serif"
            }}>
              Machine Learning
            </h3>
            <p style={{
              fontSize: 14,
              color: "#5f6368",
              lineHeight: 1.5,
              margin: 0,
              fontFamily: "Roboto, Arial, sans-serif"
            }}>
              Advanced neural networks for precise content identification
            </p>
          </div>

          <div style={{
            textAlign: "center",
            padding: 32,
            background: "#f8f9fa",
            borderRadius: 16,
            border: "1px solid #dadce0",
            color: "#202124"
          }}>
            <div style={{
              width: 56,
              height: 56,
              background: "#e8f0fe",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px auto",
              fontSize: 24
            }}>
              🤖
            </div>
            <h3 style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#202124",
              marginBottom: 12,
              fontFamily: "Google Sans, Arial, sans-serif"
            }}>
              Machine Learning
            </h3>
            <p style={{
              fontSize: 14,
              color: "#5f6368",
              lineHeight: 1.5,
              margin: 0,
              fontFamily: "Roboto, Arial, sans-serif"
            }}>
              Advanced neural networks for precise content identification
            </p>
          </div>

          <div style={{
            textAlign: "center",
            padding: 32,
            background: "#f8f9fa",
            borderRadius: 16,
            border: "1px solid #dadce0",
            color: "#202124"
          }}>
            <div style={{
              width: 56,
              height: 56,
              background: "#e8f0fe",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px auto",
              fontSize: 24
            }}>
              📱
            </div>
            <h3 style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#202124",
              marginBottom: 12,
              fontFamily: "Google Sans, Arial, sans-serif"
            }}>
              Multi-Platform
            </h3>
            <p style={{
              fontSize: 14,
              color: "#5f6368",
              lineHeight: 1.5,
              margin: 0,
              fontFamily: "Roboto, Arial, sans-serif"
            }}>
              Available on web and Android, iOS coming soon
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
