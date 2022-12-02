import Link from "next/link";
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Heading1,Heading3,Heading2 } from "../styleGuid/components/text";
import styles from "./Hero.module.css";
import Image from 'next/image'
import { motion } from "framer-motion";
import {heroAnimation,heroInfoAnimation} from "../Animations/Animation"
// assets
import ImanK from '../../images/imank.svg';
 
const navItems = [

  {
    href: "#proj",
    title: "Pojects",
  },
  {
    href: "#about",
    title: "About Me",
  },
  {
    href:"#contact",
    title:"Contact Me",
  }
];



export default function Hero ({ hero }) { 
  const [language, setLanguage] = useState<"en" | "ja">("en");
  
  return(
  <section className={styles.heeader}>
    <div className={styles.menu__logo}>
      <Image src={ImanK} alt="logo" className={styles.logo} layout='responsive' width={114} height={68.12}/>
        </div>
      
          <motion.div className={styles.container2} variants={heroInfoAnimation} transition={{delay:0.3,duration:1,type:"tween"}} >
          
              {" "}   
              <div >
             <Heading3 className={styles.iam} as="span">Hi, I Am </Heading3>
             <span onMouseEnter={() => setLanguage("ja")} onMouseLeave={() => setLanguage("en")}>
              {language === "en" ? <Heading1 as="h1" className={styles.name}>Iman Al Wahaibi</Heading1>: <Heading1 as="h1" className={styles.name}> إيمان الوهيبي</Heading1>}
            </span>
            </div>
            <Heading2 className={styles.frontend}>Front-End Developer</Heading2>
            </motion.div>
    </section>
  );
  };
  