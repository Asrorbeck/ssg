import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import hand from "../../images/hand.png";
import "./About.css";

function About() {
  const aboutRef = useRef(null);
  const { t } = useTranslation(); // "about" namespace kerak emas
  const isInView = useInView(aboutRef, { once: true });

  const fadeUpAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="container">
        <motion.div
          className="about__container"
          variants={fadeUpAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h1 className="about__header">{t("about.title")}</h1>
          <p className="about__subtitle">{t("about.subtitle")}</p>

          <div className="about__wrapper">
            <motion.div
              className="about__text-wrapper"
              variants={fadeUpAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <p className="about__subheader">{t("about.ourStory")}</p>
              <p className="about__body">
                {t("about.body")}
                <a href="/" className="about__link">
                  {t("about.learnMore")}
                </a>
              </p>
            </motion.div>

            <motion.img
              src={hand}
              alt="Cyborg Hand"
              className="about__image"
              variants={fadeUpAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
