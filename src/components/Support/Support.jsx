import React, { useState } from "react";
import styles from "./styles.module.css";

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className={styles.Container}>
      <form className={styles.FormContainer} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Your Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Your Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className={styles.Contact}>
        <p className={styles.info}>
          Or you can send an email to:
          <Link href="mailto:support@daily-herbals.com">
            <strong> support@daily-herbals.com</strong>
          </Link>{" "}
        </p>
        <span>+441313670108</span>
      </div>
    </div>
  );
}

export default Support;
