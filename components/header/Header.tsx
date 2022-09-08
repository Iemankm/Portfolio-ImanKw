import Link from "next/link";
import useState from 'usestate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Heading1,Heading3,Heading2 } from "../styleGuid/components/text";
import styles from "./Header.module.css";
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



export const Header = ({ aboutMes }) => (
  
  <div className={styles.heeader}>
    
    <div className={styles.menu__logo}>
      <Image src="/iman.svg" alt="logo" className={styles.logo} layout='fill' />
        </div>
  
    <div className={styles.container2}>
      <div className={styles.about}>
        {aboutMes.map((aboutMes, i) => (
          <div className={styles.lii} key={i}>
        
            <div className={styles.right}>
              {" "}
             <div className={styles.info}> <Heading3 className={styles.iam} >Hi, I Am </Heading3>
              <Heading1 as="h1" className={styles.name}>Iman Al Wahaibi</Heading1></div>
              <Heading2 className={styles.frontend}>Front-End Developer</Heading2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
