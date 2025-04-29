import React from "react";
import "./Confident.css";
import { motion } from "framer-motion";

function Confident() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.section
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="confident"
    >
      <div className="container">
        <div className="confident__container">
          <h1 className="confident__title">We Are Confident At</h1>

          <p className="confident__subtitle">
            Our expertise is these tools where you can trust us!
          </p>

          <ul className="confident__list">
            <li className="confident__item">Frontend</li>
            <li className="confident__item">Java</li>
            <li className="confident__item">Full-Stack</li>
            <li className="confident__item">Angular</li>
            <li className="confident__item">.NET</li>
            <li className="confident__item">JavaScript</li>
            <li className="confident__item">Node.JS</li>
            <li className="confident__item">React</li>
            <li className="confident__item">Scala</li>
            <li className="confident__item">PHP</li>
            <li className="confident__item">С/С++</li>
            <li className="confident__item">Wordpress</li>
          </ul>

          <div className="confident__wrapper">
            <button className="confident__btn">Reach Us!</button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Confident;
