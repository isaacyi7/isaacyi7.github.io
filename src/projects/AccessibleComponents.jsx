import React from 'react';
import styles from './AccessibleComponents.module.css';
import { Link } from 'react-router-dom';

function AccessibleComponents() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Link to="/" style={{ color: 'white', marginBottom: '2rem', display: 'inline-block' }}>
            ← Back to Home
          </Link>
          <h1>
            Accessible Components: {" "}
            <a 
              href="https://www.bonappetit.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.bonAppetitLink}
            >
              Bon Appetit 
              <span className={styles.externalLinkIcon}> ↗</span>
            </a>
          </h1>
        </header>

        <section className={styles.section}>
          <h2>Overview</h2>
          <p>This is a detailed description of my Accessible Components project...</p>
        </section>

        <section className={styles.section}>
          <h2>Component Examples</h2>
          <div className={styles.componentExample}>
            {/* Add your component examples here */}
            <h3>Example Component</h3>
            <p>Description of the component and its accessibility features...</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Implementation Details</h2>
          <p>Explanation of how these components were built with accessibility in mind...</p>
        </section>
      </div>
    </div>
  );
}

export default AccessibleComponents;