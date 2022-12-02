import React from "react";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import styles from "../pages/caseStudy.module.css";
import { motion, Variants } from "framer-motion";
import { Heading2, Heading1, Heading3,Heading4 } from "../components/styleGuid/components/text";
import Image from 'next/image';
import { iterateObserversSafely } from "@apollo/client/utilities";
import Heli from '../../images/heli.png';
import {Resumebtn} from "../components/styleGuid/components/button/button"
import proj from '../images/t.png';
import dd from '../images/IMG_9183.jpg';
import d from '../images/IMG_9511.jpg';
import ddd from '../images/IMG_9797.jpg';
import dddd from '../images/IMG_9840.jpg';
import intr from '../images/r.jpg';
import s from '../images/s.jpeg'
import pres from '../images/pres.JPG'



export default function Project1({ project1 }) {
  
  return (
    
    <section className={styles.section2} id="about" >

     <Heading1 className={styles.section__title}>UX Project</Heading1>

          <div className={styles.lii}>
            <div  className={styles.left} >

            <Image alt="project picture" src={proj} className={styles.projpic}  layout="responsive" width={400} height={600}/>
            </div>
            <div className={styles.right}>
              {""}
              <br/>
              <br/>
              <br/>
              <br/>

              <Heading4 className={styles.casedes}>This is an UX related project I worked on with three other people on a time span of 6 weeks.  It was the project for the Into to UX course of my Masters degree in Harbour Space University. </Heading4> 
            <Heading4 className={styles.casedes}>The project was to come up with an idea to help young travelers while they are traveling alone.</Heading4>
            <Heading4 className={styles.casedes}>I would definitely recommend this course to designers as well as developers because I believe it is very usful.</Heading4>

          </div>
          </div>
          
         
          <div className={styles.lii2}>
           <div className={styles.left2}>
           <Heading4 className={styles.casedes}>First we decided who are our target audience and that is young travelers between the ages 18 and 25. We found out that most young travelers stay in hostels so we made a list of hostels in barcelona. We visited many hostels, some allowed us to interview their recidence but some did not. We interviewed 22 travelers from 16 different countries and the average travel duration was one month.</Heading4>
           <Heading4 className={styles.pointes}>- Most young travelers decide on their next plans the night before or on the go.</Heading4>
           <Heading4 className={styles.pointes}>- Most of them wanted to travel and experience new things.</Heading4>
           <Heading4 className={styles.pointes}>- They wanted to get in touch with other like minded travellers during some point in their journey.</Heading4>

           </div>
            <div className={styles.right2}>
            <Image alt="project picture" src={intr} className={styles.projpic}  layout="responsive" width={700} height={900}/>

          </div>
         
          </div>
         <div className={styles.lii3}>
         <div className={styles.left3}>

<Image alt="project picture" src={d} className={styles.projpic}  layout="responsive" width={700} height={900}/>
</div>
 <div className={styles.right3}>
 <Heading4 className={styles.casedes}>We needed to come up with an app idea that will fit our target audience. We started brainstorming and pitched some ideas to each other based on the informations we gathered from the user interviews.</Heading4>
 <Heading4 className={styles.casedes}>Evantually we came up with NOW OR NEVER, an app for effortless meetups for travelers with other travelers once a day everyday!!</Heading4>

</div>
         </div>


         <div className={styles.designs}>
         <Heading4 className={styles.casedes}>In the forth week, we started sketching and designing our app to make our ideas and features more clear </Heading4>

<div className={styles.lii4}>

<div className={styles.left4}>

<Image alt="project picture" src={dd} className={styles.projpic}  layout="responsive" width={700} height={900}/>

</div>
<div className={styles.mid}>
<Image alt="project picture" src={ddd} className={styles.projpic}  layout="responsive" width={700} height={900}/>
</div>
<div className={styles.right4}>
<Image alt="project picture" src={s} className={styles.projpic}  layout="responsive" width={700} height={900}/>
</div>
</div>
         </div>

         <div className={styles.lii5}>
         <div className={styles.left5}>

            <Image alt="project picture" src={pres} className={styles.projpic}  layout="responsive" width={700} height={900}/>
            </div>
            <div className={styles.right5}>
            <Heading4 className={styles.casedes}>After six long weeks of hard work and sleepless nights, we finally presented our app to everyone and it was a big success.</Heading4>
            <Heading4 className={styles.casedes}>We did a really good job and out idea was voted the most liked in the class.</Heading4>

          </div>
         </div>
    </section>
  );
}
