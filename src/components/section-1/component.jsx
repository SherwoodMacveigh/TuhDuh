import React from "react";
import SVG from "../svg";
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
              family life. it's not magic - It's cognitive learning paired with
              AI.
            </p>
            <a
              className={styles.button}
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/proto/gQ1l7GSYJgyZ46YLF2OUHM/TuhDuh---Final?type=design&node-id=115-1459&t=iyLfhmGLjxByWCxf-1&scaling=scale-down&page-id=108%3A2121&starting-point-node-id=115%3A1459&show-proto-sidebar=1&mode=design"
            >
              View Prototype <SVG name="arrow" />
            </a>
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
