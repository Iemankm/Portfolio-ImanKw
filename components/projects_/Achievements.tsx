import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import styles from "../Projects/Achievements.module.css";
import { motion } from "framer-motion";
import { Heading2 } from "../styleGuid/components/text";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
  when: "afterChildren",
};

export default function Achievements({ achievements }) {
  console.log(achievements);
  return (
    <section className={styles.section2} id="proj">
       <div className={styles.row}>
        <div>
          <Heading2>
            Projects
          </Heading2>
        </div>
      </div>


      <div className={styles.aw}>
        <div className={styles.row}>
          <div className={styles.awardlist}>
            <div className={styles.awardlist__block}>
              <ul className={styles.ul}>
                {achievements.slice(0, 4).map((achievements, i) => (
                  <li className={styles.li} key={i}>
                    <motion.p
                      className={styles.awardlist__blocktitle}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {achievements.title}
                    </motion.p>
                    <p className={styles.awardlist__blockdate}>
                      {achievements.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.awardlist}>
            <div className={styles.awardlist__block2}>
              <ul className={styles.ul}>
                {achievements.slice(4, 11).map((achievements, i) => (
                  <li className={styles.li} key={i}>
                    <motion.p
                      className={styles.awardlist__blocktitle}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {achievements.title}
                    </motion.p>
                    <p className={styles.awardlist__blockdate}>
                      {achievements.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}
