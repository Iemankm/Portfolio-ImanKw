import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import styles from "./Projects.module.css";
import { motion, Variants } from "framer-motion";
import { Heading2, Heading3, Heading4 } from "../styleGuid/components/text";
import Image from 'next/image';
import { iterateObserversSafely } from "@apollo/client/utilities";
import { Parallax } from "react-parallax";



export default function Projects({ projects }) {

  return (
    <Parallax  strength={600} className={styles.section3} id="proj">
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
         
          <div className={styles.pic}> 
           <Image
            src={project.projpic.url}
            layout="responsive"
            width={725}
            height={425}
            alt="project Picture"
          /></div>  

          <div className={styles.infos}>
              <Heading3 className={styles.projectcard__title}>
                {project.title}
              </Heading3>
              <Heading4 as="p" className={styles.projectcard__description}>
                {project.description}
              </Heading4>
          </div>
          </div>
        )}
    )}
    </div>
    </Parallax>
  );
}

