import React from "react";
import { motion } from "framer-motion";
import "./Plus.css";

function Plus() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="plus">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container"
      >
        <div className="plus__container">
          <h1 className="plus__title">Our Benefits</h1>

          <div className="plus__wrapper">
            <ul className="plus__list">
              <li className="plus__item">Customized services for your needs</li>
              <li className="plus__item">Using the latest tools efficiently</li>
              <li className="plus__item">Solutions that grow with you</li>
              <li className="plus__item">
                Streamlining processes for better performance
              </li>
              <li className="plus__item">
                Consistent, high-quality service always
              </li>
              <li className="plus__item">Protecting your data with care</li>
            </ul>
            <ul className="plus__list plus__list2">
              <li className="plus__item">
                Focused on seamless user experience
              </li>
              <li className="plus__item">Assistance whenever you need it</li>
              <li className="plus__item">High value within your budget</li>
              <li className="plus__item">
                Satisfied clients worldwide trust us
              </li>
              <li className="plus__item">
                Skilled professionals delivering innovative solutions
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Plus;
