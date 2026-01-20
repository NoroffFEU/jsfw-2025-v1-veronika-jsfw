import React from "react";
import Form from "../components/Form";
import layoutStyles from "../styles/layout.module.css";

function Contact() {
  return (
    <section className={`${layoutStyles.page} ${layoutStyles.centered}`}>
      <h1>Contact us</h1>
      <Form />
    </section>
  );
}

export default Contact;
