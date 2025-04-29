import React from "react";
import { motion } from "framer-motion";
import "./Service.css";

function Service() {
  // Animation variants for fade-up effect
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="service" id="service">
      <div className="container">
        <div className="service__container">
          <motion.h1
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="service__header"
          >
            Our Tailored <span className="service__dec">Services</span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="service__subheader"
          >
            From the start, during the process, and until the end, our processes
            <br />
            are designed to deliver excellence!
          </motion.p>

          <motion.ul
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="service__list"
          >
            <li className="service__item">
              <h2 className="service__number">01</h2>
              <h3 className="service__item-header">Web Development</h3>
              <p className="service__item-body">
                Crafting intuitive and high-performing mobile applications
              </p>
            </li>

            <li className="service__item">
              <h2 className="service__number">02</h2>
              <h3 className="service__item-header">Mobile Development</h3>
              <p className="service__item-body">
                Crafting intuitive and high-performing mobile applications
              </p>
            </li>

            <li className="service__item">
              <h2 className="service__number">03</h2>
              <h3 className="service__item-header">Desktop Development</h3>
              <p className="service__item-body">
                Providing robust, scalable, and secure desktop applications
              </p>
            </li>

            <li className="service__item">
              <h2 className="service__number">04</h2>
              <h3 className="service__item-header">UI/UX Design</h3>
              <p className="service__item-body">
                Designing visually stunning and user-friendly interfaces
              </p>
            </li>
          </motion.ul>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="service__btn-wrapper"
          >
            <button className="service__btn">Reach Us!</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Service;
