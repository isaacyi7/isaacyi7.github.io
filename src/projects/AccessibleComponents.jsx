import React from 'react';
import styles from './AccessibleComponents.module.css';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/nointeractionba.jpg';
import image2 from '../assets/images/interaction.jpg';
import image3 from '../assets/images/myBAno.jpg';
import image4 from '../assets/images/myBAyes.jpg';


function AccessibleComponents() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <header className={styles.header}>
            <Link to="/" className={styles.backArrowLink} style={{ marginBottom: '2rem', display: 'inline-block' }}>
              ←
            </Link>
            <h3>2025</h3>
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

          <section className={styles.softwareUsed}>
            <h2>Figma</h2>
          </section>

          <section className={styles.section}>
            <p>I love cooking and baking, so Bon Appetit is a website I frequent often. I always found their dropdown menus complex and unique. Now taking a class on interaction design, I realize it is not the most user-friendly, especially to new users.
              It is difficult to learn, as it requires users to click the different options for the dropdown to appear, rather than just hovering over the text like other drowpdowns. As you can see in the Bon Appetit site, when hovering over an option, the corresponding menu does not appear.
              I decided to redesign the dropdown menu in figma to make it more user-friendly and accessible, adding on hover functionality. Additionally, some of the options are inaccessible to users
              just using a keyboard or screen reader. If I continue iterating on this, I would add the correct aria labels and roles to make the dropdown options accessible to all users.
            </p>
          </section>
        </div>

        <div className={styles.scrollableImagesContainer}>
          <img src={image1} alt="Bon Appetit Menu with no interaction" />
          <img src={image2} alt="Bon Appetit Menu with interaction" />
          <img src={image3} alt="My version with no interaction" />
          <img src={image4} alt="My version with interaction" />
        </div>
      </div>
    </div>
  );
}

export default AccessibleComponents;
