import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import styles from "./Projects.module.css";
import { motion } from "framer-motion";
import { Heading2, Heading3, Heading4 } from "../styleGuid/components/text";
import Image from 'next/image';
import { iterateObserversSafely } from "@apollo/client/utilities";

export default function Projects({ projects }) {

  return (
    <section className={styles.section2} id="proj">
       <div className={styles.row}>
        <div>
          <Heading2 className={styles.title}>
            Projects
          </Heading2>
        </div>
      </div>

<div className={styles.carditems}>
      {projects?.map((project, i) => {
        return(
          
        <div key={i} className={styles.carditem}>
          <div className={styles.row}>
          <div className={styles.card1}>
            
      
          <div className={styles.pic}> 
           <Image
            src={project.projpic.url}
            width={1180}
            height={600}
            alt="project Picture"
          /></div>  

          <div className={styles.infos}>
                      <Heading3 className={styles.projectcard__title}>
                        {project.title}
                      </Heading3>
                      <Heading4 className={styles.projectcard__description}>
                        {project.description}
                      </Heading4>

                      {/* <a href="" className={styles.projectcard__link}>
                        {project.date}
                      </a> */}
          </div>
          </div>
          </div>
        
        </div> 

        

      
      
        )}
    )}
    </div>
    </section>
  );
}

