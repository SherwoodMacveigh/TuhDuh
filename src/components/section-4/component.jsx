import React, { useState } from "react";

import SVG from "../svg";

import styles from "./styles.module.scss";

export const Section4 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setError(null);
    let errors = [];

    const nameEl = document.getElementById("name").value;
    const emailEl = document.getElementById("email").value;

    const nameValue = name ? name : nameEl;
    const emailValue = email ? email : emailEl;

    if (!nameValue || nameValue === "") {
      errors.push("Oops! You forgot to add your name.");
    }

    if (!emailValue || emailValue === "") {
      errors.push("Oops! You forgot to add your email address.");
    } else if (!validateEmail(emailValue)) {
      errors.push("Oops! Your email address is not valid");
    }

    if (errors.length > 0) return setError(errors);

    setLoading(true);

    const formData = new FormData();
    formData.append("name", nameValue);
    formData.append("email", emailValue);

    return fetch("https://getform.io/f/8d9a134a-7c2b-4dfb-9ab8-52ac4f4aa8c4", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      })
      .catch((error) => {
        setLoading(false);
        setError("Oops! Something went wrong and your form was not submitted.");
      });
  };

  const saveInput = (e) => {
    setError(null);
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    }
  };

  const validateEmail = (em) => {
    const re =
      /^(([^<>()\[\]\\.,:\s@`]+(\.[^<>()\[\]\\.,:\s@`]+)*)|(`.+`))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(em);
  };

  return (
    <section className={styles.container} id="sign-up">
      <div className={styles.inner}>
        <div className={styles.section4}>
          <div className={styles.text}>
            <h2>Sign-up now!</h2>
            <p>
              Sign up now to be among the first to experience Tuhduh's
              transformative power. Let's embark on this exciting journey
              together!
            </p>
          </div>
          <form>
            <h3>Learn More About Tuhduh</h3>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jane Doe"
              onKeyDown={saveInput}
              onBlur={saveInput}
              tabIndex="0"
            />
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="jane@doe.com"
              onKeyDown={saveInput}
              onBlur={saveInput}
              tabIndex="0"
            />
            {error &&
              error.map((er) => {
                return (
                  <p key={er} className={styles.error}>
                    {er}
                  </p>
                );
              })}

            <button
              type="submit"
              onClick={onSubmit}
              className={`${success ? styles.success : ""} ${
                loading ? styles.loading : ""
              }`}
              disabled={success || loading}
            >
              {!loading && !success ? (
                <span>
                  <SVG name="star" /> Join the Waitlist!
                </span>
              ) : (
                ""
              )}
              {!loading && success ? (
                <span>
                  <SVG name="star" /> Thank You!
                </span>
              ) : (
                ""
              )}
              {loading && !success ? (
                <span>
                  <SVG name="star" /> Sending...
                </span>
              ) : (
                ""
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

Section4.propTypes = {};

Section4.defaultProps = {};

export default Section4;
