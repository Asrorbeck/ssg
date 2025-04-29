import React from "react";
import company1 from "../../images/company-1.png";
import company2 from "../../images/company-2.png";
import company3 from "../../images/company-3.png";
import { motion } from "framer-motion";
import "./Company.css";

function Company() {
  return (
    <section className="company" id="company">
      <div className="container">
        <div className="company__container">
          <div className="company__wrapper">
            <motion.ul
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="company__list"
            >
              <li className="company__item">
                <img
                  src={company1}
                  alt="First Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company2}
                  alt="Second Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company3}
                  alt="Third Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company1}
                  alt="First Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company2}
                  alt="Second Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company3}
                  alt="Third Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company1}
                  alt="First Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company2}
                  alt="Second Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company3}
                  alt="Third Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company1}
                  alt="First Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company2}
                  alt="Second Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company3}
                  alt="Third Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company1}
                  alt="First Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company2}
                  alt="Second Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company3}
                  alt="Third Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company1}
                  alt="First Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company2}
                  alt="Second Company"
                  className="company__image"
                />
              </li>

              <li className="company__item">
                <img
                  src={company3}
                  alt="Third Company"
                  className="company__image"
                />
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
