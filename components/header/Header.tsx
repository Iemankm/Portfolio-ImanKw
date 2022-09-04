import Link from "next/link";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGoogle } from "@fortawesome/free-brands-svg-icons";

const navItems = [
  {
    href: "#pojects",
    title: "Pojects",
  },
  {
    href: "#achi",
    title: "Achievements",
  },
  {
    href:"#contact",
    title:"Contact",
  }
];

export const Header = ({ aboutMes }) => (
  <div className={styles.heeader}>
    <div className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.menu__wrapper}>
            <nav className={styles.nav}>
              <ul className={styles.ul}>
                {" "}
                <Link className={styles.li} href="#achi">
                  <a>Achievements</a>
                </Link>
                <Link className={styles.li} href="#proj">
                  <a>Projects</a>
                </Link>
                <Link className={styles.li} href="#contact">
                  <a>Contact</a>
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
            <div className={styles.left}>
              <img
                src={aboutMes.profilepic.url}
                className={styles.profilepic}
              />
            </div>
            <div className={styles.right}>
              {" "}
              <h2 className={styles.name}>Iman Al Wahaibi_</h2>
              <h3 className={styles.aboutdes}>{aboutMes.about}</h3>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
