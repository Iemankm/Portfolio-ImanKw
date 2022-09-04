import React from "react";
import styles from "../footer/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footer} id="contact">
      <div className={styles.section}>
        <div className={styles.row}></div>
        <div className={styles.contacts}>
          <div className={styles.leftside}>
            <p className={styles.section__title}>Get in touch</p>

            <div className={styles.contacts__list}>
              <dl className={styles.contactlist}>
                <dd>
                  <a className={styles.phoneno} href="tel: +34672039414">
                    +34 672 039 414
                  </a>
                </dd>

                <dd>
                  <a className={styles.email} href="imankhalid.alw@gmail.com">
                    imankhalid.alw@gmail.com
                  </a>
                </dd>
              </dl>
            </div>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/in/iman-al-wahaibi-1a76281a4/">
                {" "}
                <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
              </a>
              <a href="">
                {" "}
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>{" "}
            </div>
          </div>
          <div>
            {/* <div className={styles.contacts__form}>
              <form className={styles.form}>
                <div className={styles.formgroup}>
                  <input
                    className={styles.nname}
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className={styles.formgroup}>
                  <input
                    className={styles.mail}
                    type="email"
                    placeholder="Your e-mail"
                    required
                  />
                </div>
                <div className={styles.formgroup}>
                  <textarea
                    className={styles.msg}
                    placeholder="Type the message here"
                    required
                  ></textarea>
                </div>
                <button
                  className={styles.btn}
                  type="submit"
                  value="Send"
                >
                  Send
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
