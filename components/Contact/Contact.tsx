import React from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Resumebtn, Sendbtn } from "../styleGuid/components/button";
import { Textarea } from '@nextui-org/react';


const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
  when: "afterChildren",
};

export default function Contact({ contact }) {
  console.log(contact);
  return (
    <section className={styles.section4} id="contact">
       <div className={styles.envelope} title=""> 
  <div className={styles.back}></div>
  <form className={styles.letter}><p>Get in Touch</p>
    <p>
      <label className={styles.uname}>Name:</label>
      <input className={styles.input_name} type="text" name="name" />
    </p>
    <p>
      <label className={styles.uemail}>Email:</label>
      <input className={styles.input_email} type="email" name="email" />
    </p>
    <p>
      <label className={styles.umsg}>Message:</label>
      <textarea className={styles.txtarea}></textarea>
    </p>
    <Resumebtn className={styles.sendbtn}>Send</Resumebtn>
  </form>
</div>
    </section>
  );
}
