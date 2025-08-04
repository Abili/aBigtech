import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";
import DeleteAccount from "./DeleteAccount";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import Features from "./Features";
import Logo from "./components/Logo";
import './App.css';

function RedirectHandler() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    if (redirect) {
      navigate(`/${redirect}`, { replace: true });
    }
  }, [navigate]);
  
  return null;
}

function App() {
  return (
    <Router basename="/aBigtech">
      <RedirectHandler />
      <header style={{ 
        width: "100%", 
        padding: "0", 
        background: "#fff", 
        borderBottom: "1px solid #dadce0",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <nav style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          width: "100%", 
          margin: "0", 
          padding: "16px 0"
        }}>
          <Link to="/" style={{ 
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontWeight: 400, 
            fontSize: 22, 
            textDecoration: "none", 
            color: "#5f6368",
            fontFamily: "Google Sans, Arial, sans-serif",
            marginLeft: "0"
          }}>
            <Logo size={32} />
            eyClips
          </Link>
          <div style={{ display: "flex", gap: 32, marginRight: "0" }}>
            <Link to="/privacy-policy" style={{ 
              fontSize: 14, 
              color: "#5f6368",
              textDecoration: "none",
              fontWeight: 400,
              fontFamily: "Roboto, Arial, sans-serif"
            }}>
              Privacy Policy
            </Link>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Link to="/contact-us" style={{
                fontSize: 14,
                color: "#5f6368",
                textDecoration: "none",
                fontWeight: 400,
                fontFamily: "Roboto, Arial, sans-serif",
                cursor: "pointer",
                padding: "8px 0"
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main style={{ width: "100%", background: "#fff", margin: 0, padding: 0 }}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Home />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <footer style={{ 
        width: "100%", 
        padding: "48px 0", 
        background: "#f8f9fa", 
        color: "#5f6368",
        borderTop: "1px solid #dadce0"
      }}>
        <div style={{ width: "100%", margin: "0", padding: "0" }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: 24, 
            marginBottom: 24,
            fontSize: 14,
            fontFamily: "Roboto, Arial, sans-serif"
          }}>
            <Link to="/privacy-policy" style={{ color: "#5f6368", textDecoration: "none" }}>Privacy Policy</Link>
            <span>•</span>
            <Link to="/delete-account" style={{ color: "#5f6368", textDecoration: "none" }}>Delete Account</Link>
          </div>
          <div style={{ 
            textAlign: "center", 
            fontSize: 12, 
            color: "#5f6368",
            fontFamily: "Roboto, Arial, sans-serif"
          }}>
            &copy; 2025 eyClips. All rights reserved.
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
