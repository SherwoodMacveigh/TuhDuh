import React from "react";

import SVG from "../svg";

import styles from "./styles.module.scss";

export const Section3 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.section3}>
          <img
            src="./tuhduh-task-management.png"
            alt="TuhDuh Task Management, alongside graphic of happy child birds playing"
          />
          <div>
            <h2>Be the First to Experience&nbsp;Tuhduh!</h2>
            <p>
              We're inviting you to be part of our prototype launch! Sign up now
              to get exclusive access and a firsthand experience of how Tuhduh
              can elevate your family's unity by connecting through everyday
              tasks!
            </p>
            <ul>
              <li>
                <SVG name="checkmark-circle-icon" />
                Personalized Task Allocation
              </li>
              <li>
                <SVG name="messages-icon" />
                Harmonious Communication Framework
              </li>
              <li>
                <SVG name="home-icon" />
                Streamlined Household Logistics
              </li>
              <li>
                <SVG name="mood-icon" />
                Innovative Family Experiences
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Section3.propTypes = {};

Section3.defaultProps = {};

export default Section3;
