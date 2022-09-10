import React,{useState,useEffect} from "react";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import { m, motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Resumebtn, Sendbtn } from "../styleGuid/components/button";
import { Textarea } from '@nextui-org/react';
import { Heading3, Heading4 } from "../styleGuid/components/text";
import MailchimpSubscribe from "react-mailchimp-subscribe";




const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
  when: "afterChildren",
};

export default function Contact({ status,message, onValidated }) {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');


  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setFirstName('');
    setEmail('');
    setMsg('');
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    firstName &&
    msg &&
    email.indexOf("@") > -1 &&
    onValidated({
        MERGE0: email,
        MERGE1: firstName,
        MERGE2: msg,
    });
}

  return (
    <section className={styles.section4} id="contact">
<div className={styles.envelope} title=""> 
  <div className={styles.back}></div>
  <form className={styles.letter} onSubmit={(e) => handleSubmit(e)}><Heading3 className={styles.title}>Get in Touch</Heading3>
  <h3 className="mc__title">
          {status === "success" 
            ? "Success!" 
            : "Email was sent successfully!"
          }
        </h3>
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

{status !== "success" ? (
          <div className="mc__field-container">
               <div>
      <Heading4 className={styles.uname}>Name:</Heading4>
      <input className={styles.input_name} type="text" name="name"  onChangeHandler={setFirstName} defaultValue={firstName}/>
    </div>
   <div>
      <Heading4 className={styles.uemail}>Email:</Heading4>
      <input className={styles.input_email} type="email" name="email" onChangeHandler={setEmail} defaultValue={email} />
   </div>
   <div>
      <Heading4 className={styles.umsg}>Message:</Heading4>
      <textarea className={styles.txtarea} onChangeHandler={setMsg} defaultValue={message} ></textarea>
   </div>
  
          </div>
        ) : null}

{
          status === 'success' ? <button
            onClick={() => setModalOpen(false)}
            className="g__justify-self-center">Close</button> : 
            <Resumebtn className={styles.sendbtn} formValues={[firstName, email, message]}>Send</Resumebtn>

        }

</form>
</div> 
    </section>
  );
}
