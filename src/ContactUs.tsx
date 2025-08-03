export default function ContactUs() {
  return (
    <div style={{ 
      width: "100%", 
      background: "#f8f9fa", 
      minHeight: "100vh",
      padding: "40px 0"
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
          marginBottom: 24,
          boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
          border: "1px solid #dadce0",
          borderLeft: "none",
          borderRight: "none",
          margin: "0 0 24px 0",
          width: "100%",
          boxSizing: "border-box"
        }}>
          <h1 style={{ 
            fontSize: 48, 
            fontWeight: 300, 
            marginBottom: 16, 
            color: "#202124",
            fontFamily: "Google Sans, Arial, sans-serif",
            letterSpacing: "-1px"
          }}>
            Contact Us
          </h1>
          
          <p style={{ 
            fontSize: 16, 
            color: "#5f6368", 
            lineHeight: 1.6,
            margin: 0,
            fontFamily: "Roboto, Arial, sans-serif"
          }}>
            We're here to help! Get in touch with the eyClips team for support, feedback, or account management.
          </p>
        </div>

        {/* Contact Information */}
        <div style={{
          background: "#fff",
          borderRadius: 0,
          padding: "32px 24px",
          marginBottom: 24,
          boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
          border: "1px solid #dadce0",
          borderLeft: "none",
          borderRight: "none",
          margin: "0 0 24px 0",
          width: "100%",
          boxSizing: "border-box"
        }}>
          <h2 style={{ 
            fontSize: 32, 
            fontWeight: 400, 
            marginBottom: 24, 
            color: "#202124",
            fontFamily: "Google Sans, Arial, sans-serif"
          }}>
            Get Support
          </h2>
          
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24
          }}>
            <div style={{ 
              background: "#f8f9fa", 
              padding: 24, 
              borderRadius: 12,
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
                marginBottom: 16,
                fontSize: 20
              }}>
                📧
              </div>
              <h3 style={{ 
                fontSize: 18, 
                fontWeight: 500, 
                marginBottom: 8, 
                color: "#202124",
                fontFamily: "Google Sans, Arial, sans-serif"
              }}>
                Email Support
              </h3>
              <p style={{ 
                fontSize: 14, 
                color: "#5f6368", 
                margin: 0,
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                Send us an email at{" "}
                <a href="mailto:support@eyclips.com" style={{ color: "#1a73e8", textDecoration: "none" }}>
                  support@eyclips.com
                </a>
              </p>
            </div>
            
            <div style={{ 
              background: "#f8f9fa", 
              padding: 24, 
              borderRadius: 12,
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
                marginBottom: 16,
                fontSize: 20
              }}>
                💬
              </div>
              <h3 style={{ 
                fontSize: 18, 
                fontWeight: 500, 
                marginBottom: 8, 
                color: "#202124",
                fontFamily: "Google Sans, Arial, sans-serif"
              }}>
                Response Time
              </h3>
              <p style={{ 
                fontSize: 14, 
                color: "#5f6368", 
                margin: 0,
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                We typically respond within 24-48 hours during business days.
              </p>
            </div>
            
            <div style={{ 
              background: "#f8f9fa", 
              padding: 24, 
              borderRadius: 12,
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
                marginBottom: 16,
                fontSize: 20
              }}>
                🌍
              </div>
              <h3 style={{ 
                fontSize: 18, 
                fontWeight: 500, 
                marginBottom: 8, 
                color: "#202124",
                fontFamily: "Google Sans, Arial, sans-serif"
              }}>
                Business Hours
              </h3>
              <p style={{ 
                fontSize: 14, 
                color: "#5f6368", 
                margin: 0,
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                Monday - Friday, 9:00 AM - 6:00 PM (UTC)
              </p>
            </div>
          </div>
        </div>

        {/* Account Deletion Section */}
        <div style={{
          background: "#fff",
          borderRadius: 0,
          padding: "32px 24px",
          marginBottom: 24,
          boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
          border: "1px solid #dadce0",
          borderLeft: "none",
          borderRight: "none",
          margin: "0 0 24px 0",
          width: "100%",
          boxSizing: "border-box"
        }}>
          <h2 style={{ 
            fontSize: 32, 
            fontWeight: 400, 
            marginBottom: 24, 
            color: "#202124",
            fontFamily: "Google Sans, Arial, sans-serif"
          }}>
            Account Deletion
          </h2>
          
          <div style={{ 
            background: "#fff3e0", 
            padding: 24, 
            borderRadius: 12,
            border: "1px solid #ffcc02",
            marginBottom: 24
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16
            }}>
              <div style={{
                width: 48,
                height: 48,
                background: "#fff8e1",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20
              }}>
                ⚠️
              </div>
              <h3 style={{ 
                fontSize: 20, 
                fontWeight: 500, 
                margin: 0,
                color: "#e8710a",
                fontFamily: "Google Sans, Arial, sans-serif"
              }}>
                Request Account Deletion
              </h3>
            </div>
            
            <p style={{ 
              fontSize: 16, 
              color: "#5f6368", 
              lineHeight: 1.6,
              marginBottom: 24,
              fontFamily: "Roboto, Arial, sans-serif"
            }}>
              If you wish to permanently delete your eyClips account and all associated data, please follow these steps:
            </p>
            
            <div style={{ marginBottom: 32 }}>
              <h4 style={{ 
                fontSize: 16, 
                fontWeight: 500, 
                marginBottom: 16, 
                color: "#202124",
                fontFamily: "Google Sans, Arial, sans-serif"
              }}>
                How to Request Account Deletion:
              </h4>
              
              <ol style={{ 
                fontSize: 14, 
                color: "#5f6368", 
                lineHeight: 1.6,
                paddingLeft: 20,
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                <li style={{ marginBottom: 8 }}>
                  Send an email to{" "}
                  <a href="mailto:privacy@eyclips.com" style={{ color: "#1a73e8", textDecoration: "none" }}>
                    privacy@eyclips.com
                  </a>
                </li>
                <li style={{ marginBottom: 8 }}>
                  Include your registered email address in the request
                </li>
                <li style={{ marginBottom: 8 }}>
                  Add "Account Deletion Request" in the subject line
                </li>
                <li style={{ marginBottom: 8 }}>
                  We'll send you a confirmation email within 24 hours
                </li>
                <li>
                  Account deletion will be processed within 7 business days
                </li>
              </ol>
            </div>
            
            <div style={{ 
              background: "#ffebee", 
              padding: 24, 
              borderRadius: 8,
              border: "1px solid #ffcdd2"
            }}>
              <h4 style={{ 
                fontSize: 16, 
                fontWeight: 500, 
                marginBottom: 12, 
                color: "#c62828",
                fontFamily: "Google Sans, Arial, sans-serif"
              }}>
                ⚠️ What Happens When Your Account Is Deleted:
              </h4>
              
              <ul style={{ 
                fontSize: 14, 
                color: "#5f6368", 
                lineHeight: 1.6,
                paddingLeft: 20,
                margin: 0,
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                <li style={{ marginBottom: 8 }}>
                  <strong>All personal data</strong> including your profile, preferences, and account information will be permanently deleted
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong>Search history</strong> and identification records will be removed from our servers
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong>Uploaded content</strong> such as video clips and screenshots will be permanently deleted
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong>App access</strong> will be immediately revoked and you won't be able to log in
                </li>
                <li style={{ marginBottom: 8 }}>
                  <strong>This action is irreversible</strong> - deleted data cannot be recovered
                </li>
                <li>
                  You can create a new account anytime, but previous data will not be restored
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{
          background: "#fff",
          borderRadius: 0,
          padding: "32px 24px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
          border: "1px solid #dadce0",
          borderLeft: "none",
          borderRight: "none",
          margin: 0,
          width: "100%",
          boxSizing: "border-box"
        }}>
          <h2 style={{ 
            fontSize: 32, 
            fontWeight: 400, 
            marginBottom: 24, 
            color: "#202124",
            fontFamily: "Google Sans, Arial, sans-serif"
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: 24
          }}>
            <div style={{ 
              background: "#f8f9fa", 
              padding: 24, 
              borderRadius: 12,
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
                marginBottom: 16,
                fontSize: 20
              }}>
                ⏰
              </div>
              <h3 style={{ 
                fontSize: 16, 
                fontWeight: 500, 
                marginBottom: 8, 
                color: "#202124",
                fontFamily: "Google Sans, Arial, sans-serif"
              }}>
                How long does account deletion take?
              </h3>
              <p style={{ 
                fontSize: 14, 
                color: "#5f6368", 
                margin: 0,
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                Account deletion is processed within 7 business days after your request is confirmed.
              </p>
            </div>
            
            <div style={{ 
              background: "#f8f9fa", 
              padding: 24, 
              borderRadius: 12,
              border: "1px solid #dadce0"
            }}>
              <div style={{
                width: 48,
                height: 48,
                background: "#fce8e6",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                fontSize: 20
              }}>
                🚫
              </div>
              <h3 style={{ 
                fontSize: 16, 
                fontWeight: 500, 
                marginBottom: 8, 
                color: "#202124",
                fontFamily: "Google Sans, Arial, sans-serif"
              }}>
                Can I recover my data after deletion?
              </h3>
              <p style={{ 
                fontSize: 14, 
                color: "#5f6368", 
                margin: 0,
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                No, account deletion is permanent and irreversible. All data is completely removed from our systems.
              </p>
            </div>
            
            <div style={{ 
              background: "#f8f9fa", 
              padding: 24, 
              borderRadius: 12,
              border: "1px solid #dadce0"
            }}>
              <div style={{
                width: 48,
                height: 48,
                background: "#fff3e0",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                fontSize: 20
              }}>
                ⏸️
              </div>
              <h3 style={{ 
                fontSize: 16, 
                fontWeight: 500, 
                marginBottom: 8, 
                color: "#202124",
                fontFamily: "Google Sans, Arial, sans-serif"
              }}>
                What if I just want to temporarily deactivate my account?
              </h3>
              <p style={{ 
                fontSize: 14, 
                color: "#5f6368", 
                margin: 0,
                fontFamily: "Roboto, Arial, sans-serif"
              }}>
                Currently, we only offer permanent account deletion. Contact us at{" "}
                <a href="mailto:support@eyclips.com" style={{ color: "#1a73e8", textDecoration: "none" }}>
                  support@eyclips.com
                </a>{" "}
                to discuss your options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
