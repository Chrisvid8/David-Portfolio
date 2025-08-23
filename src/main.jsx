import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import CertificatesPage from './pages/CertificatesPage.jsx';
import ResumePage from './pages/ResumePage.jsx';

let isFirstLoad = !sessionStorage.getItem("visitedBefore");

window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("scrollPosition", window.scrollY);
  sessionStorage.setItem("visitedBefore", "true");
});

window.addEventListener("load", () => {
  if (isFirstLoad) {
    window.scrollTo(0, 0);
  } else {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  </StrictMode>
);