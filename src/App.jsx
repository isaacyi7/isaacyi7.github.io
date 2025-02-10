import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      {/* left static fixed side */}
      <div className={styles.leftPanel}>
        <h1>Isaac Yi</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
    </div>

    {/* right scroll side */}
    <div className={styles.rightPanel}>
      <section id="about">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section id="experience">
        <h2>Experiences</h2>
        <div className={styles.projectCards}>
          <div className={styles.projectCard}>
            <h3>experience 1 goes here</h3>
            <p>worked on things yay</p>
        </div>
        {/* more projects */}
        </div>
      </section>

      <section id="project">
        <h2>Projects</h2>
        <p>email and stuff here</p>
      </section>
    </div>
  </div>
  )
}

export default App;
