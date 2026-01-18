import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Form.module.css";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your full name should be at least 3 characters.")
      .required("Please enter your full name."),
    subject: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .required("Please enter a subject."),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email address."),
    message: yup
      .string()
      .min(3, "Your message should be at least 3 characters.")
      .required("Please enter your message."),
  })
  .required();

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <h2>Thank you for contacting us</h2>
        <p>We will be in touch as soon as possible.</p>
        <button
          className={styles.button}
          onClick={() => {
            reset();
            setSubmitted(false);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label>Name</label>
        <input {...register("fullName")} />
        <span className={styles.error}>{errors.fullName?.message}</span>
      </div>
      <div className={styles.field}>
        <label>Email </label>
        <input {...register("email")} />
        <span className={styles.error}>{errors.email?.message}</span>
      </div>
      <div className={styles.field}>
        <label>Subject</label>
        <input {...register("subject")} />
        <span className={styles.error}>{errors.subject?.message}</span>
      </div>
      <div className={styles.field}>
        <label>Message</label>
        <textarea rows="4" {...register("message")} />
        <span className={styles.error}>{errors.message?.message}</span>
      </div>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}

export default Form;
