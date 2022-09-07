import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import styles from "./About.module.css";
import { ProjectType } from "../../types";
import Image from "next/image";
import { Heading2,Heading4 } from "../styleGuid/components/text";
import {Resumebtn} from "../styleGuid/components/button"

export default function About({ aboutMes }) {
  console.log(aboutMes);
  return (
    <section className={styles.section3} id="about">
     
     <div className={styles.container}>
      <div className={styles.about}>

        {aboutMes?.map((aboutMes, i) => (
          <div className={styles.lii} key={i}>
            <div className={styles.left}>
            <Image alt="profile picture" src={aboutMes.profilepic.url} className={styles.profilepic} height={500} width={500} />
            </div>
            <div className={styles.right}>
              {""}
              <Heading2 className={styles.section__title}>About Me</Heading2>
              <Heading4 className={styles.aboutdes}>{aboutMes.about}</Heading4> 
            </div>
          </div>
          ))}

          <div className={styles.buttons}>
          <Resumebtn className={styles.resumebtn}>Download Resume</Resumebtn>
          </div>
      </div>
      </div>
    </section>
  );
}
