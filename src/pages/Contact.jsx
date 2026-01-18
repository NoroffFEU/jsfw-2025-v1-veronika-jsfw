import React from "react";
import Form from "../components/Form";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.page}>
      <h1>Contact us</h1>
      <Form />
    </section>
  );
}

export default Contact;
