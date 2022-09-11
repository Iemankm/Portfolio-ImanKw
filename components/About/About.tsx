import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import styles from "./About.module.css";
import { ProjectType } from "../../types";
import Image from "next/image";
import { Heading2,Heading4 } from "../styleGuid/components/text";
import {Resumebtn} from "../styleGuid/components/button"
import { Container, Row, Col } from "react-grid-system";
import { aboutAnimation } from "../Animations/Animation";
import { motion } from "framer-motion";
import { useScroll } from "../Animations/UseScroll";

export default function About({ aboutMes }) {

  const [element, controls] = useScroll();

  console.log(aboutMes);
  return (
    <section className={styles.section2} id="about" ref={element} >
        {aboutMes?.map((aboutMes, i) => (
          <div className={styles.lii} key={i}>
            <motion.div variants={aboutAnimation} animate={controls} transition={{
          delay: 0.2,
          duration: 0.5,
          type: "tween",
        }} className={styles.left} >
            <Image alt="profile picture" src={aboutMes.profilepic.url} className={styles.profilepic}  layout="responsive" width={350} height={350}/>
            </motion.div>
            <div className={styles.right}>
              {""}
              <Heading2 className={styles.section__title}>About Me</Heading2>
              <Heading4 className={styles.aboutdes}>{aboutMes.about}</Heading4> 
              <div className={styles.buttons}>
               {/* <Resumebtn  onClick={() => download(fileUrl, filename)} className={styles.resumebtn}>Download Resume</Resumebtn> */}
              </div>
            </div>
          </div>
          ))}
    </section>
  );
}
