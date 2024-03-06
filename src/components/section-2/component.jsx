import React from "react";

import styles from "./styles.module.scss";

export const Section2 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.section2_title}>Why Tuhduh?</h2>
        <div className={styles.section2}>
          <div>
            <h4 className={styles.teal}>Personalized Harmony</h4>
            <p>
              Tuhduh operates as your family's personal coach, understanding
              each member's unique personality traits. Say goodbye to
              misunderstandings and hello to a new understanding of how you are
              feeling, not just what you are doing.
            </p>
          </div>
          <div>
            <h4 className={styles.orange}>Streamlined Tasks</h4>
            <p>
              Just like CRM systems revolutionize business relationships, Tuhduh
              streamlines family tasks. From allocating chores to fostering
              understanding, Tuhduh ensures everyone is engaged and heard.
            </p>
          </div>
          <div>
            <h4 className={styles.green}>Innovative & Transformative</h4>
            <p>
              Experience innovation in every aspect of your family life. Tuhduh
              uses AI and neuroscience innovations to keep you organized and
              turns tasks into points of learning anc connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Section2.propTypes = {};

Section2.defaultProps = {};

export default Section2;
