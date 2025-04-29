import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import arrow from "../../images/arrow.svg";
import mobile from "../../images/mobile.svg";
import rocket from "../../images/Rocket.svg";
import laptop from "../../images/Laptop.svg";

import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  const bounceAnimation = {
    initial: { y: 0 },
    animate: { y: ["0", "-10px", "0"] },
    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
  };

  const pulseAnimation = (duration) => ({
    initial: { scale: 1 },
    animate: { scale: [1, 1.4, 1] },
    transition: { repeat: Infinity, duration, ease: "easeInOut" },
  });

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__container">
          {/* Header */}
          <h1 className="hero__title">
            {t("hero.title")} <br /> {t("hero.title2")}{" "}
            <span className="hero__dec">{t("hero.titleDec")}</span>
          </h1>

          <div className="hero__body-wrapper">
            <p className="hero__body">{t("hero.body")}</p>
          </div>

          {/* Button */}
          <div className="hero__btn-wrapper">
            <a href="#company" className="hero__button">
              {t("hero.button")} <img src={arrow} alt="Arrow" />
            </a>
          </div>

          {/* Mobile Image with Bounce */}
          <motion.div className="hero__mobile" {...bounceAnimation}>
            <img className="hero__mobile-img" src={mobile} alt="mobile" />
            <p className="hero__abs-text">Mobile App Development</p>
          </motion.div>

          {/* Laptop Image with Bounce */}
          <motion.div
            className="hero__laptop"
            animate={{ y: ["0", "15px", "0"] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <img className="hero__laptop-img" src={laptop} alt="laptop" />
            <p className="hero__abs-text">Web Development</p>
          </motion.div>

          {/* Rocket Image with Bounce */}
          <motion.div
            className="hero__rocket"
            animate={{ y: ["0", "8px", "0"] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <img className="hero__rocket-img" src={rocket} alt="rocket" />
            <p className="hero__abs-text">Desktop Development</p>
          </motion.div>

          {/* Animated List Items */}
          <ul className="hero__list">
            {[2.3, 1.8, 2.7, 1.9, 2.5, 3.0, 2.0, 2.2].map((duration, index) => (
              <motion.li
                key={index}
                className="hero__item"
                {...pulseAnimation(duration)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
