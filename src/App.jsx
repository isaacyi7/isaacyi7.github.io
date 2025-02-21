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
          <h3>Computer Science Economics @ Brown University</h3>
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
            <p className={styles.aboutText}>
              I am a developer interested in stewarding technology and quantitative
              solutions to solve financial, environmental, and security problems. I hope
              the products I create ultimately benefit these industries and the people 
              they serve.
            </p>
            <p className={styles.aboutText}>
              From using large amounts of data to analyze the carbon footprint of NYC buildings for 
              New York City's Division of Energy Mangement to being a Teaching Assistant for 
              the largest CS class at Brown, I have had a variety of quantitative experiences 
              across various industries that have shaped me to be the engineer and creator I am today. 
            </p>
            <p className={styles.aboutText}>
              Currently, my offline pursuits include {" "}
              <span className={styles.squid}>
                reteaching myself the clarinet
              </span>
              , training for a half marathon, learning the Luigi zero-death combo, and binging Brooklyn 99.
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
                  Worked with the Cyber Reboot Team to develop and deploy an internal web app using FastAPI and React
                  to visualize live AWS service interdependencies. The app is used to ensure developers adhere to resources
                  requested in their project proposals and to identify excess spending. Also optimized concurrency and 
                  other performance improvements to handle up to 50 users while maintaining {"<"} 1 second response times.
                </p>
              </div>
            </a>
            {/* more experiences */}
            <div className={styles.experienceItem}>
              <div className={styles.timeSpent}>
                <p>01/2022-05/2024</p>
              </div>
              <div className={styles.experienceDetails}>
                <h3>Undergraduate Teaching Assistant, Brown University</h3>
                <p className={styles.experienceDescription}>
                  Teaching assistant for Ordinary Differential Equations,
                  Partial Differential Equations, and Data Structures and 
                  Algorithms. 
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
                <img 
                  src="./assets/images/nike1.jpg" 
                  alt="Project Preview" 
                  className={styles.projectPreviewImage}
                />
                   
                  <div className={styles.projectDetails}>
                  <p>02/2025</p>
                    <h3>Accessible Components: Dropdown Menus</h3>
                    <p>An analysis on the learnability, memorability, efficiency, and accessibility of three different dropdown menus.</p>
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
