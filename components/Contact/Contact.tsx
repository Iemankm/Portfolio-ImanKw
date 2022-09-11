import React,{useRef} from "react";
import { from, gql } from "@apollo/client";
import client from "../../apolloClient";
import { m, motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Resumebtn } from "../styleGuid/components/button";
import { Textarea } from '@nextui-org/react';
import { Heading3, Heading4 } from "../styleGuid/components/text";
import emailjs, { send, sendForm } from 'emailjs-com';


const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
  when: "afterChildren",
};

export default function Contact({ contact }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3wsimu8', 'template_de6yq3w', form.current, 'HoOl6mtyrKMVDpjyG')
      .then((result) => {
          console.log(result.text);
          alert("Email was sent!!");
      }, (error) => {
          console.log(error.text);
          alert("Email was not sent!!");
      });
  };

  return (
    <section className={styles.section4} id="contact">
<div className={styles.envelope} title=""> 
  <div className={styles.back}></div>
  <form className={styles.letter} ref={form} onSubmit={sendEmail}>
    <Heading3 className={styles.title}>Get in Touch</Heading3>
               <div>
      <Heading4 className={styles.uname}>Name:</Heading4>
      <input className={styles.input_name} type="text" name="from_name"  />
    </div>
   <div>
      <Heading4 className={styles.uemail}>Email:</Heading4>
      <input className={styles.input_email} type="email" name="email" />
   </div>
   <div>
      <Heading4 className={styles.umsg}>Message:</Heading4>
      <textarea className={styles.txtarea} name="message"  ></textarea>
   </div>
    <Resumebtn className={styles.sendbtn}  type="submit">Send</Resumebtn>



</form>
</div> 
    </section>
  );
}


