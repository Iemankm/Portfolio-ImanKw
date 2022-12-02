import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import styles from "./About.module.css";
import { ProjectType } from "../../types";
import Image from "next/image";
import { Heading2,Heading4 } from "../styleGuid/components/text";
import {Resumebtn} from "../styleGuid/components/button"
import { Container, Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function About({ aboutMes }) {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('ImanKhalidAlWahaibi.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'ImanKhalidAlWahaibi.pdf';
            alink.click();
        })
    })
}
  console.log(aboutMes);
  return (
    <section className={styles.section2} id="about" >
        {aboutMes?.map((aboutMes, i) => (
          <div className={styles.lii} key={i}>
            <div  className={styles.left} >
            <Image alt="profile picture" src={aboutMes.profilepic.url} className={styles.profilepic}  layout="responsive" width={350} height={350}/>
            </div>
            <div className={styles.right}>
              {""}
              <Heading2 className={styles.section__title}>About Me</Heading2>
              <Heading4 className={styles.aboutdes}>{aboutMes.about}</Heading4> 
             <div className={styles.infos}>
             <p className={styles.location}>
              <FontAwesomeIcon icon={faLocationDot} /> {aboutMes.location}</p>
              <p className={styles.mobile}>
              <FontAwesomeIcon icon={faPhone} /> {aboutMes.mobile}</p>
              <p className={styles.emailadd}>
              <FontAwesomeIcon icon={faEnvelope} /> {aboutMes.email}</p>
              </div>
              <div className={styles.buttons}>
               <Resumebtn  onClick={onButtonClick} className={styles.resumebtn}>Download Resume</Resumebtn>
              </div>
            </div>
          </div>
          ))}
    </section>
  );
}
