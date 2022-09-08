import Link from "next/link";
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Heading1,Heading3,Heading2 } from "../styleGuid/components/text";
import styles from "./Hero.module.css";
import Image from 'next/image'



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
  <div className={styles.heeader}>
    <div className={styles.menu__logo}>
      <Image src="/iman.svg" alt="logo" className={styles.logo} layout='fill' />
        </div>
  
          <div className={styles.container2}>
          
              {" "}   
              <div>
             <Heading3 className={styles.iam} as="span">Hi, I Am </Heading3>
             <span onMouseEnter={() => setLanguage("ja")} onMouseLeave={() => setLanguage("en")}>
              {language === "en" ? <Heading1 as="h1" className={styles.name}>Iman Al Wahaibi</Heading1>: <Heading1 as="h1" className={styles.name}> إيمان الوهيبي</Heading1>}
            </span>
            </div>
            <Heading2 className={styles.frontend}>Front-End Developer</Heading2>
            </div>
    </div>
  );
  };
        
