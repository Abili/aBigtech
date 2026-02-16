import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AppsPage from "./pages/AppsPage";
import AppPage from "./pages/AppPage";
import SecurityPage from "./pages/SecurityPage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import InstallGuidePage from "./pages/InstallGuidePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import AdminPage from "./pages/AdminPage";
import './App.css';

import SEO from "./components/SEO";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <SEO />
      <Header currentPath={location.pathname} />
      <main style={{ minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/apps/:slug" element={<AppPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/support/faq" element={<FAQPage />} />
          <Route path="/support/contact" element={<ContactPage />} />
          <Route path="/support/installation-guide" element={<InstallGuidePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
