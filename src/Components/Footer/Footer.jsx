import React from "react";
import logo from "../../images/Logo.svg";
import phone from "../../images/bxs_phone-call.svg";
import mail from "../../images/ic_sharp-email.svg";
import location from "../../images/carbon_location-filled.svg";
import love from "../../images/love.svg";
import "./Footer.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
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
      className="footer"
    >
      <div className="container">
        <div className="footer__container">
          <img className="footer__logo" src={logo} alt="Logo of SS Group" />

          <ul className="footer__main-list">
            <li className="footer__main-item">
              <ul className="footer__list">
                <li className="footer__item">
                  <p className="footer__item-header">Company</p>
                </li>
                <li className="footer__item">
                  <a href="/#about" className="footer__link">
                    About
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/#contact" className="footer__link">
                    Contact
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/#blog" className="footer__link">
                    Blogs
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__main-item">
              <ul className="footer__list">
                <li className="footer__item">
                  <p className="footer__item-header">Legal</p>
                </li>
                <li className="footer__item">
                  <Link to="/privacy-policy" className="footer__link">
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/terms-conditions" className="footer__link">
                    Terms & use
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer__main-item">
              <ul className="footer__list">
                <li className="footer__item">
                  <p className="footer__item-header">Quick Links</p>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Mobile development
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    Web development
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/" className="footer__link">
                    UX & UI
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer__main-item">
              <ul className="footer__list">
                <li className="footer__item">
                  <p className="footer__item-header">Reach us</p>
                </li>
                <li className="footer__item">
                  <a href="tel:+998900071806" className="footer__link">
                    <img
                      className="footer__link-img"
                      src={phone}
                      alt="Phone icon"
                    />
                    +998 900071806
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="mailto:ssgroupcorpllc@gmail.com"
                    className="footer__link"
                  >
                    <img
                      className="footer__link-img"
                      src={mail}
                      alt="Mail icon"
                    />
                    ssgroupcorpllc@gmail.com
                  </a>
                </li>
                <li className="footer__item">
                  <p className="footer__link">
                    <img
                      className="footer__link-img"
                      src={location}
                      alt="Phone icon"
                    />
                    Langar 76A, Tashkent, <br /> Uzbekistan, 100000
                  </p>
                </li>
              </ul>
            </li>
          </ul>

          <hr className="footer__line" />

          <div className="footer__wrapper">
            <p className="footer__copyright">
              {" "}
              Copyright &copy; 2025 Smart Solutions Group.
            </p>

            <p className="footer__love">
              Made with <img src={love} alt="Love icon" /> in Uzbekistan
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Footer;
