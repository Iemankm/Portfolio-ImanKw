import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import styles from "./Project1.module.css";
import { motion, Variants } from "framer-motion";
import { Heading2, Heading3, Heading4 } from "../styleGuid/components/text";
import Image from 'next/image';
import { iterateObserversSafely } from "@apollo/client/utilities";
import Heli from '../../images/heli.png';
import {useNavigate} from 'react-router-dom';
import CaseStudy from "../../pages/caseStudy";
import {Link} from 'react-router-dom';


export default function Project1({ project1}) {

  return (
    <section className={styles.section3} id="proj" >
       <div className={styles.row}>
        <div>
          <Heading2 className={styles.title}>
            Latest Projects
          </Heading2>
        </div>
      </div>

<motion.div     whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className={styles.carditems}><a href="/caseStudy">
        <div   className={styles.carditem}>
          <div className={styles.pic}> 
           <Image
            src={Heli}
            layout="responsive"
            height={40}
            width={50}
            alt="project Picture"
          />
          </div>  

          <div className={styles.infos}>
              <Heading3 className={styles.projectcard__title}>
                UX Related Project
              </Heading3>
          </div>
    </div>
    </a>
    </motion.div>
    </section>
  );
}

