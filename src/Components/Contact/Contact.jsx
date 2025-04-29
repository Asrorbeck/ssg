import React, { useState } from "react";
import { ContactData } from "./ContactData";
import { motion } from "framer-motion";
import "./Contact.scss";

function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    companyEmail: "",
    gender: "",
    message: "",
    need: "",
  });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateStep = () => {
    if (step === 1) {
      return (
        formData.firstName &&
        formData.lastName &&
        formData.company &&
        formData.companyEmail
      );
    } else if (step === 2) {
      return formData.gender && formData.message && formData.need;
    }
    return false;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    } else {
      alert("All inputs must be filled to proceed!");
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const sendTelegram = (e) => {
    e.preventDefault();

    var { firstName, lastName, company, companyEmail, message, need } =
      formData;

    var botToken = "7705033582:AAEnjPGLQPv83KsAkE06pZ3as-PA0i0_lB0";
    var chatIds = ["905770018", "-1002277871473"]; // Add more chat IDs if needed

    var textMessage = `
Contact Form Submission:
Name: ${firstName} ${lastName}
Company: ${company}
Company Email: ${companyEmail}
Message: ${message}
Need: ${need}
    `;

    var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    chatIds.forEach((chatId) => {
      var data = {
        chat_id: chatId,
        text: textMessage,
      };

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Message sent!");
          setStep(1);
        })

        .catch((error) => {
          console.error("Error sending message:", error);
        });
    });

    alert("Your message was successfully sent!");

    // Clear the form data
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      companyEmail: "",
      gender: "",
      message: "",
      need: "",
    });

    return false;
  };

  return (
    <motion.section
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="contact"
      id="contact"
    >
      <div className="container">
        <div className="contact__container">
          <h1 className="contact__title">
            {ContactData.title}{" "}
            <span className="contact__dec">{ContactData.dec}</span>
          </h1>

          <div className="contact__wrapper">
            <ul className="contact__list">
              <li className="contact__item">
                <p className="contact__item-header">01</p>
                <p className="contact__item-subtitle">Clear Communication</p>
                <p className="contact__item-body">
                  We prioritize transparency and open discussions
                </p>
              </li>

              <li className="contact__item">
                <p className="contact__item-header">02</p>
                <p className="contact__item-subtitle">Customized Solutions</p>
                <p className="contact__item-body">
                  Every project is tailored to your needs
                </p>
              </li>

              <li className="contact__item">
                <p className="contact__item-header">03</p>
                <p className="contact__item-subtitle">Reliable Support</p>
                <p className="contact__item-body">
                  Ongoing assistance to ensure success
                </p>
              </li>

              <li className="contact__item">
                <p className="contact__item-header">04</p>
                <p className="contact__item-subtitle">Long-Term Commitment</p>
                <p className="contact__item-body">
                  We focus on lasting business relationships
                </p>
              </li>
            </ul>
            <form className="contact__form" onSubmit={sendTelegram}>
              <div className="contact__form-upper">
                <p className="contact__form-header">Contact Us</p>

                <ul className="contact__steps">
                  <li
                    className={`contact__step contact__step-1 ${
                      step === 1 ? "active" : ""
                    }`}
                  >
                    <span className="contact__circle"></span>
                  </li>
                  <li className={`contact__step ${step === 2 ? "active" : ""}`}>
                    <span className="contact__circle"></span>
                  </li>
                </ul>
              </div>
              <p className="contact__form-body">
                Discover how we can bring your idea to life with the <br />{" "}
                great team
              </p>

              {step === 1 && (
                <>
                  <div className="contact__input-wrapper">
                    <label htmlFor="firstName" className="contact__label">
                      First Name
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="contact__input"
                      />
                    </label>

                    <label htmlFor="lastName" className="contact__label">
                      Last Name
                      <input
                        type="text"
                        required
                        name="lastName"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="contact__input"
                      />
                    </label>
                  </div>

                  <label htmlFor="company" className="contact__label">
                    Company
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      className="contact__input"
                    />
                  </label>

                  <label htmlFor="companyEmail" className="contact__label">
                    Company Email
                    <input
                      type="email"
                      required
                      name="companyEmail"
                      placeholder="Your company email"
                      value={formData.companyEmail}
                      onChange={handleChange}
                      className="contact__input"
                    />
                  </label>
                  <div className="contact__btn-wrapper">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="contact__button"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <label htmlFor="need" className="contact__label">
                    What do you need?
                    <select
                      name="need"
                      required
                      value={formData.need}
                      onChange={handleChange}
                      className="contact__input"
                    >
                      <option value="">Select one option</option>
                      <option value="frontend">Frontend</option>
                      <option value="backend">Backend</option>
                      <option value="mobile">Mobile</option>
                    </select>
                  </label>
                  <label htmlFor="message" className="contact__label">
                    Message
                    <textarea
                      name="message"
                      required
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact__input"
                    ></textarea>
                  </label>

                  <div className="contact__btn-wrapper">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="contact__button"
                    >
                      Back
                    </button>
                    <button type="submit" className="contact__button">
                      Send Now
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
