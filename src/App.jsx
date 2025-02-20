import React, { useEffect, useRef } from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";
import AccessibleComponents from "./projects/AccessibleComponents";
import ScrollToTop from "./components/ScrollToTop";

const MainContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when the location changes
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname === '/') {
      // Scroll to top when returning to home with no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
      <div className={styles.container}>
        {/* left static fixed side */}
        <div className={styles.leftPanel}>
          <h1>Hi, I'm Isaac</h1>
          <h3>Software Engineer @ Brown University</h3>
          <p>Building projects</p>
          <nav>
            <ul>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#experience">Experience</Link>
              </li>
              <li>
                <Link to="/#projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* right scroll side */}
        <div className={styles.contentWrapper}>
          <section id="about">
            <p>
              I am a senior at Brown University studying Computer Science and Economics.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>

          <section id="experience">
            <h2>Experience</h2>
            <a href="https://www.capitalone.com/tech/" target="_blank" rel="noopener noreferrer" className={styles.experienceItem}>
              <div className={styles.timeSpent}>
                <p>06/2024 - 08/2024</p>
              </div>
              <div className={styles.experienceDetails}>
                <h3>
                  Software Engineering Intern, Capital One
                  <span className={styles.externalIcon}>↗</span>
                </h3>
                <p className={styles.experienceDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident
                </p>
              </div>
            </a>
            {/* more experiences */}
            <div className={styles.experienceItem}>
              <div className={styles.timeSpent}>
                <p>2025-2026</p>
              </div>
              <div className={styles.experienceDetails}>
                <h3>Experience 2 goes here</h3>
                <p className={styles.experienceDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident
                </p>
              </div>
            </div>
          </section>

          <section id="projects">
            <h2>Projects</h2>
            <div className={styles.projectCards}>
              {/* Example project box */}
              <Link to="/accessible-components" className={styles.projectItem}>
                <div className={styles.projectLink}>
                    <p>02/2025</p>
                  <div className={styles.projectDetails}>
                    <h3>Accessible Components: Dropdown Menus</h3>
                    <p>An analysis on the learnability, memorability, efficiency, and accessibility of three different dropdown menus.</p>
                  </div>
                </div>
              </Link>

              <Link to="/accessible-components" className={styles.projectItem}>
                <div className={styles.projectLink}>
                    <p>My Awesome Project</p>
                  <div className={styles.projectDetails}>
                    <h3>Accessible Components: Bon Appetit</h3>
                    <p>A brief description of the project...</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
  );
}


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/accessible-components" element={<AccessibleComponents />} />
      </Routes>
    </Router>
  );
}

export default App;
