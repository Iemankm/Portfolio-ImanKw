import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import styles from "./Projects.module.css";
import { ProjectType } from "../../types";
import { motion } from "framer-motion";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <section className={styles.section3} id="proj">
      <div className={styles.row}>
        <div>
          <h2 className={styles.section__title}>Projects_</h2>
        </div>
      </div>
      <div>
        {projects.map((projects, i) => (
          <div key={i}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.portfoliocards}
            >
              <div className={styles.projectcard}>
                <div className={styles.projectcard__info}>
                  <div className={styles.projectcard__img}>
                    <img
                      className={styles.image}
                      src={projects.projpic.url}
                      alt="project-img"
                    />
                  </div>
                  <div className={styles.infos}>
                    <h3 className={styles.projectcard__title}>
                      {projects.title}
                    </h3>
                    <p className={styles.projectcard__description}>
                      {projects.description}
                    </p>

                    <a href="" className={styles.projectcard__link}>
                      {projects.date}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
