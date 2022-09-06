import Link from "next/link";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Heading1,Heading3,Heading2 } from "../styleGuid/components/text";
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
      <Image src="/iman.svg" alt="logo" className={styles.logo} width={70}
        height={70} />
        </div>
    <div className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.menu__wrapper}>
            <nav className={styles.nav}>
              <ul className={styles.ul}>
                {" "}
                <Link className={styles.li} href="#proj">
                  <a>Projects</a>
                </Link>
                <Link className={styles.li} href="#about">
                  <a>About me</a>
                </Link>
                <Link className={styles.li} href="#contact">
                  <a>Contact me</a>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.container2}>
      <div className={styles.about}>
        {aboutMes.map((aboutMes, i) => (
          <div className={styles.lii} key={i}>
            {/* <div className={styles.left}> */}
              {/* <img
                src={aboutMes.profilepic.url}
                className={styles.profilepic}
              /> */}
            {/* </div> */}
            <div className={styles.right}>
              {" "}
             <div className={styles.info}> <Heading3 as="h3" >Hi, I Am </Heading3>
              <Heading1 as="h1">Iman Al Wahaibi</Heading1></div>
              {/* <h2 className={styles.name}>Iman Al Wahaibi_</h2> */}              
              <Heading2>Front-End Developer</Heading2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
