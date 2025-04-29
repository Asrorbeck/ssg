import React from "react";
import { motion } from "framer-motion";
import "./Benefit.css";
function Benefit() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="benefit" id="benefit">
      <div className="container">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="benefit__container"
        >
          <h1 className="benefit__header">
            Why <span className="benefit__dec">Smart Solutions?</span>
          </h1>

          <p className="benefit__body">
            We envision a world where technology seamlessly <br /> integrates
            with everyday life
          </p>

          <ul className="benefit__list">
            <li className="benefit__item">
              <h2 className="benefit__item-title">Long-term Service</h2>
              <p className="benefit__item-description">
                Frustrated with stressful and frequent Project processes? You
                can trust us not for months, but for years, and many of them.
              </p>
            </li>
            <li className="benefit__item">
              <h2 className="benefit__item-title">Expertise</h2>
              <p className="benefit__item-description">
                We ensure that our team is among the most qualified ones and not
                only. We thrive for continuous learning and we have great work
                ethic too.
              </p>
            </li>
            <li className="benefit__item">
              <h2 className="benefit__item-title">Developing Excellence</h2>
              <p className="benefit__item-description">
                We take your most complex problems and build beautiful solutions
                that work efficiently. We achieve that by feeling a sense of
                ownership over the product.
              </p>
            </li>
          </ul>

          <div className="benefit__wrapper">
            <button className="benefit__button-learn">Learn More</button>
            <button className="benefit__button-consultation">
              Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Benefit;
