import React from "react";

export default function DeleteAccount() {
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
            marginBottom: 32,
            letterSpacing: '-1px' 
          }}>
            Request Account Deletion
          </h1>
          
          <div style={{
            padding: 32,
            background: "#f8f9fa",
            borderRadius: 16,
            border: "1px solid #e9ecef",
            marginBottom: 40
          }}>
            <p style={{ 
              fontSize: 20, 
              color: '#333', 
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              To request deletion of your eyClips account, please email us at{" "}
              <a 
                href="mailto:support@eyclips.com?subject=Account%20Deletion%20Request" 
                style={{ 
                  color: '#1976d2', 
                  textDecoration: 'none', 
                  fontWeight: 600,
                  borderBottom: '2px solid #1976d2'
                }}
              >
                support@eyclips.com
              </a>
              {" "}with your account details.
            </p>
            <p style={{ 
              fontSize: 16, 
              color: '#666', 
              marginBottom: 0,
              fontWeight: 500
            }}>
              ⏱️ We will process your request within 7 business days.
            </p>
          </div>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#1976d2', 
              marginBottom: 20,
              letterSpacing: '-0.5px' 
            }}>
              What Happens Next?
            </h2>
            <div style={{ 
              fontSize: 16, 
              color: '#333', 
              lineHeight: 1.6
            }}>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                marginBottom: 16
              }}>
                <span style={{ color: "#1976d2", fontSize: 18, fontWeight: 700 }}>1.</span>
                <p style={{ margin: 0 }}>Your account and all associated data will be permanently deleted from our systems.</p>
              </div>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                marginBottom: 0
              }}>
                <span style={{ color: "#1976d2", fontSize: 18, fontWeight: 700 }}>2.</span>
                <p style={{ margin: 0 }}>You will receive a confirmation email once the deletion is complete.</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: 0 }}>
            <h2 style={{ 
              fontSize: 28, 
              fontWeight: 700, 
              color: '#1976d2', 
              marginBottom: 20,
              letterSpacing: '-0.5px' 
            }}>
              Need Help?
            </h2>
            <div style={{
              padding: 24,
              background: "#e3f2fd",
              borderRadius: 12,
              border: "1px solid #bbdefb"
            }}>
              <p style={{ 
                fontSize: 16, 
                color: '#333', 
                lineHeight: 1.6,
                marginBottom: 0
              }}>
                If you have any questions about the account deletion process, please contact our support team at{" "}
                <a 
                  href="mailto:support@eyclips.com" 
                  style={{ 
                    color: '#1976d2', 
                    textDecoration: 'none', 
                    fontWeight: 600,
                    borderBottom: '2px solid #1976d2'
                  }}
                >
                  support@eyclips.com
                </a>
                . We're here to help!
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
