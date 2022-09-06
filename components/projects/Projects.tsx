import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import styles from "./Projects.module.css";
import { motion } from "framer-motion";
import { Heading2, Heading3, Heading4 } from "../styleGuid/components/text";
import Image from 'next/image';

export default function Projects({ projects }) {
  console.log("aaa", projects);
  return (
    <section className={styles.section2} id="proj">
       <div className={styles.row}>
        <div>
          <Heading2 className={styles.title}>
            Projects
          </Heading2>
        </div>
      </div>

      {projects?.map((project, i) => {

        // let projectClasses = [styles.row];

        // if (i % 2) {
        //   projectClasses.push(styles.leftCard)
        // } else {
        //   projectClasses.push(styles.rightCard)
        // }


        // projectClasses.join(' ');
        
        return (
        <div key={i}>
          
      <div className={styles.aw}>
        <div className={styles.row}>
        <div className={styles.card1}>
          <Heading3>Project-1</Heading3> 
    
    <div className={styles.pic}>  <Image
        src={project.projpic.url}
        width={500}
        height={690}
      /></div> 
        <div className={styles.infos}>
                    <Heading3 className={styles.projectcard__title}>
                      {project.title}
                    </Heading3>
                    <Heading4 className={styles.projectcard__description}>
                      {project.description}
                    </Heading4>

                    <a href="" className={styles.projectcard__link}>
                      {project.date}
                    </a>
                  </div>
         </div>
    {/* <div className={styles.card2}>
      <Image
        src="/vercel.svg"
        width="300px"
        height="200px"
      />
      <h2>Card here </h2>
      <p> lorem ipsum here now to get here </p>
    </div>

    <div className={styles.card3}>
      <Image
        src="/vercel.svg"
        width="300px"
        height="200px"
      />
      <h2>Card here </h2>
      <p> lorem ipsum here now to get here </p>
    </div> */}
        </div>
       
      </div> 
        </div>
        )})}
    </section>
  );
}
