import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import styles from "../Projects/Achievements.module.css";
import { motion } from "framer-motion";
import { Heading2 } from "../styleGuid/components/text";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
  when: "afterChildren",
};

export default function Contact({ contact }) {
  console.log(contact);
  return (
    <section className={styles.section2} id="proj">
       <div className={styles.envelope} title="">
  <div className={styles.back}></div>
  <form className={styles.letter}>
    <p>
      <label>Name:</label>
      <input type="text" name="name" />
    </p>
    <p>
      <label>Email:</label>
      <input type="email" name="email" />
    </p>
    <p>
      <label>Message:</label>
      <textarea></textarea>
    </p>
    <input type="submit" value="Send"/>
  </form>
</div>
    </section>
  );
}
