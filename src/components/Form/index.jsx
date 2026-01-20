import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Form.module.css";
import buttonStyles from "../../styles/buttons.module.css";
import cardStyles from "../../styles/cards.module.css";
import inputStyles from "../../styles/inputs.module.css";

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
      <div className={`${styles.success} ${cardStyles.card}`}>
        <h2>Thank you for contacting us</h2>
        <p>We will be in touch as soon as possible.</p>
        <button
          className={buttonStyles.primary}
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
    <form
      className={`${cardStyles.card} ${styles.form}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={inputStyles.field}>
        <label className={inputStyles.label}>Name</label>
        <input className={inputStyles.input} {...register("fullName")} />
        <span className={inputStyles.error}>{errors.fullName?.message}</span>
      </div>
      <div className={inputStyles.field}>
        <label className={inputStyles.label}>Email </label>
        <input className={inputStyles.input} {...register("email")} />
        <span className={inputStyles.error}>{errors.email?.message}</span>
      </div>
      <div className={inputStyles.field}>
        <label className={inputStyles.label}>Subject</label>
        <input className={inputStyles.input} {...register("subject")} />
        <span className={inputStyles.error}>{errors.subject?.message}</span>
      </div>
      <div className={inputStyles.field}>
        <label className={inputStyles.label}>Message</label>
        <textarea
          className={inputStyles.input}
          rows="4"
          {...register("message")}
        />
        <span className={inputStyles.error}>{errors.message?.message}</span>
      </div>
      <button type="submit" className={buttonStyles.primary}>
        Submit
      </button>
    </form>
  );
}

export default Form;
