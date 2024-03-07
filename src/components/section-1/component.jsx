import React from "react";

import styles from "./styles.module.scss";

export const Section1 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.section1_top}>
          <div>
            <h3>Transform your household</h3>
            <h1>Build deeper family connections while getting tasks done</h1>
            <p>
              Life is hectic, and every family is complex. It can be hard to
              keep all the plates spinning, much less find a happy middle ground
              between family members of different ages.
            </p>
            <p>
              Tuhduh is your personal guide for navigating the dynamics of daily
              family life. it's not magic - it's cognitive learning paired with
              AI.
            </p>
          </div>
          <img
            src="./tuhduh-mood+engagement-insight.png"
            alt="TuhDuh Mood + Engagement and Insight, alongside graphic of happy child and parent birds"
          />
        </div>

        <div className={styles.section1_bottom}>
          <p>
            <strong>Your short-term win:</strong> Get your whole family
            organized, engaged, and working like a well-oiled machine. Tasks
            become opportunities, and you'll change the way your whole family
            operates.
          </p>
          <p>
            <strong>Your long-term win:</strong> Your children will learn the
            skills to form deeper connections and become better engaged, highly
            effective adults.
          </p>
        </div>
      </div>
    </section>
  );
};

Section1.propTypes = {};

Section1.defaultProps = {};

export default Section1;
