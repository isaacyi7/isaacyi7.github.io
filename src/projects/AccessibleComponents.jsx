import React, { useState } from 'react';
import styles from './AccessibleComponents.module.css';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/nointeractionba.jpg';
import image2 from '../assets/images/interaction.jpg';
import image3 from '../assets/images/myBAno.jpg';
import image4 from '../assets/images/myBAyes.jpg';
import nike1 from '../assets/images/nike1.jpg';
import nike2 from '../assets/images/nike2.jpg';
import nike3 from '../assets/images/nike3.jpg';
import nike4 from '../assets/images/nike4.jpg';
import aws1 from '../assets/images/aws1.jpg';
import aws2 from '../assets/images/aws2.jpg';
import aws3 from '../assets/images/aws3.jpg';
import aws4 from '../assets/images/aws4.jpg';
import aws5 from '../assets/images/aws5.jpg';
import diagram1 from '../assets/images/diagram1.jpg'
import diagram2 from '../assets/images/diagram2.jpg'
import diagram3 from '../assets/images/diagram3.jpg'
import diagram4 from '../assets/images/diagram4.jpg'


function AccessibleComponents() {
  const [isBAExpanded, setIsBAExpanded] = useState(false);
  const [isNikeExpanded, setIsNikeExpanded] = useState(false);
  const [isAWSExpanded, setIsAWSExpanded] = useState(false);


  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <header className={styles.header}>
            <Link to="/" className={styles.backArrowLink} style={{ marginBottom: '2rem', display: 'inline-block' }}>
              ←
            </Link>
            <h3>2025</h3>
            <h1>Accessible Components: Dropdown Menus</h1>
          </header>

          <section className={styles.softwareUsed}>
            <h2>Figma</h2>
          </section>

          <p className={styles.introText}> A component that I really like on websites is the dropdown menu. When done right, they store a large amount of information in a small space while looking sleek. As a now aspiring UX designer with a new perspective on component design,
            I see that many dropdown menus can be improved in terms of learnability, memorability, efficiency, and accessibility. This page is my exploration of dropdown menus from three different websites.

          </p>

          <div className={styles.sectionGroup}>
            <div className={styles.section}>
              <h2 className={styles.bonAppetitHeading}>
                <a
                  href="https://www.bonappetit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bonAppetitLink}
                >
                  Bon Appetit
                  <span className={styles.externalLinkIcon}> ↗</span>
                </a>
              </h2>
              <p>I love cooking and baking, so Bon Appetit is a website I frequent often. However, I always found their dropdown menus complex and unique. I realize now it is not the most user-friendly, especially to new users. Some cons include:
              </p>
              <button
                onClick={() => setIsBAExpanded(!isBAExpanded)}
                className={styles.expandButton}
                >
                  {isBAExpanded ? '(Less -)' : '(More + )'}
                </button>
                {isBAExpanded && (
                  <>
                    <ul>
                      <li>Clicking is slightly less efficient compared to hover, as it requires a click. It can also be argued as harder to learn, as users have to "explore" their inputs more.</li>
                      <li>Keyboard inaccessibility. The subcategories within the menus are unreachable with just keyboard controls</li>
                    </ul>
                    <p>
                      I decided to redesign the menu in figma to make it more user-friendly and accessible by adding on hover functionality. This design is more learnable, memorable, and efficient as it requires less clicks and less exploration to figure out. The last two images are my designs.
                    </p>
                  </>
                )}
              
            </div>
            <div className={styles.scrollableImagesContainer}>
              <img src={image1} alt="Bon Appetit Menu with no interaction" />
              <img src={image2} alt="Bon Appetit Menu with interaction" />
              <img src={diagram1} alt="Bon Appetit Menu with interaction" />
              <img src={diagram2} alt="Bon Appetit Menu with interaction" />
              <img src={diagram3} alt="Bon Appetit Menu with interaction" />
              <img src={diagram4} alt="Bon Appetit Menu with interaction" />
              <img src={image3} alt="My version with no interaction" />
              <img src={image4} alt="My version with interaction" />
            </div>
          </div>

          <div className={styles.sectionGroup}>
            <div className={styles.section}>
              <h2>
                <a
                  href="https://www.nike.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bonAppetitLink}
                >
                  Nike
                  <span className={styles.externalLinkIcon}> ↗</span>
                </a>
              </h2>
              <p>Out of the three menus I analyzed, the Nike dropdown is the best. It does everything well and looks good doing so.
              </p>
              <button
                onClick={() => setIsNikeExpanded(!isNikeExpanded)}
                className={styles.expandButton}
                >
                  {isNikeExpanded ? '(Less -)' : '(More + )'}
                </button>
                {isNikeExpanded && (
                  <>
                    
              <ul>
                <li>Learnability: it uses on hover functionality, similar to many other sites. The change in states is also intuitive.</li>
                <li>Memorability: the menu is simple, thus also easy to pick up.</li>
                <li>Efficiency: The hover is very quick and efficient. Has a smooth feel. The menu is able to display a vast amount of options efficiently.</li>
                <li>Accessiblity: all website functionalities are clear and available using screenreader and keyboard inputs.</li>
              </ul>
              <p>
                All in all, the Nike dropdown achieves its purpose within the broader website, looks amazing, and is easy to use for all inputs.
              </p>
                  </>
                )}
            </div>
            <div className={styles.scrollableImagesContainer}>
              <img src={nike1} alt="My version with no interaction" />
              <img src={nike2} alt="My version with interaction" />
              <img src={nike3} alt="My version with interaction" />
              <img src={nike4} alt="My version with interaction" />
            </div>
          </div>

          <div className={styles.sectionGroup}>
            <div className={styles.section}>
              <h2>
                <a
                  href="https://aws.amazon.com/?nc2=h_lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bonAppetitLink}
                >
                  AWS
                  <span className={styles.externalLinkIcon}> ↗</span>
                </a>
              </h2>
              <p>This menu is the worst of the three in terms of form and function. 
              </p>
              <button
                onClick={() => setIsAWSExpanded(!isAWSExpanded)}
                className={styles.expandButton}
                >
                  {isAWSExpanded ? '(Less -)' : '(More + )'}
                </button>
                {isAWSExpanded && (
                  <>
                    
                    <ul>
                <li>Learnability: AWS also uses hover functionality. It is learnable for mouse users, but keyboard users may have a difficult time learning because some parts are inaccessible. </li>
                <li>Memorability: The memorability is fine, as it is simple. There are some bugs that might distract, but overall it is an intuitive design.</li>
                <li>Efficiency: The hover is quick and simple. However, it is buggy and often shows two overlapping menus at once when moving too quickly through options, which shouldn't happen.</li>
                <li>Accessiblity: The dropdown options are inaccessible to keyboard users. The screenreader also is unclear and has unnecessary speech.</li>
              </ul>
              <p>
                These dropdowns could use many fixes to be more accessible and honestly just look better. I wonder if they need someone to fix it...
              </p>
                  </>
                )}

            </div>
            <div className={styles.scrollableImagesContainer}>
              <img src={aws1} alt="My version with no interaction" />
              <img src={aws2} alt="My version with interaction" />
              <img src={aws3} alt="My version with no interaction" />
              <img src={aws4} alt="My version with interaction" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessibleComponents;
