import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Privacy.css";

function Privacy() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.section
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="privacy"
    >
      <div className="container">
        <div className="privacy__container">
          <h1 className="privacy__tite">Privacy Policy</h1>

          <div className="privacy__body">
            <p className="privacy__subtitle">Privacy Policy</p>

            <p className="privacy__date">Effective Date: 31.01.2025</p>

            <ol className="privacy__list">
              <li className="privacy__item">
                <p className="privacy__item-title">Introduction</p>
                <p className="privacy__item-body">
                  Smart Solutions Group ("we," "our," "us") is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you visit our website.
                </p>
              </li>
              <li className="privacy__item">
                <p className="privacy__item-title">Information We Collect</p>
                <ul className="privacy__item-list">
                  <li className="privacy__inner-item">
                    Personal Information: Name, email address, phone number, and
                    other contact details you provide voluntarily.
                  </li>
                  <li className="privacy__inner-item">
                    Non-Personal Information: Browser type, IP address, and
                    browsing behavior collected through cookies and analytics
                    tools.
                  </li>
                  <li className="privacy__inner-item">
                    Payment Information: If applicable, billing details required
                    for transactions.
                  </li>
                </ul>
              </li>
              <li className="privacy__item">
                <p className="privacy__item-title">
                  How We Use Your Information
                </p>
                <ul className="privacy__item-list">
                  <li className="privacy__inner-item">
                    To provide and manage our services.
                  </li>
                  <li className="privacy__inner-item">
                    To improve user experience and website functionality.
                  </li>
                  <li className="privacy__inner-item">
                    To communicate with you regarding updates, promotions, and
                    support.
                  </li>
                  <li className="privacy__inner-item">
                    To comply with legal obligations and protect against
                    fraudulent activities.
                  </li>
                </ul>
              </li>
              <li className="privacy__item">
                <p className="privacy__item-title">Sharing Your Information</p>
                <p className="privacy__item-body">
                  We do not sell, trade, or rent your personal information. We
                  may share your data with:
                </p>
                <ul className="privacy__item-list">
                  <li className="privacy__inner-item">
                    Service Providers: Third-party vendors assisting in website
                    operations.
                  </li>
                  <li className="privacy__inner-item">
                    Legal Authorities: When required by law or to protect our
                    rights.
                  </li>
                </ul>
              </li>
              <li className="privacy__item">
                <p className="privacy__item-title">
                  Cookies & Tracking Technologies
                </p>
                <p className="privacy__item-body">
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience. You can manage your cookie
                  preferences through your browser settings.
                </p>
              </li>
              <li className="privacy__item">
                <p className="privacy__item-title">Data Security</p>
                <p className="privacy__item-body">
                  We implement industry-standard security measures to protect
                  your information. However, no online transmission is 100%
                  secure.
                </p>
              </li>
              <li className="privacy__item">
                <p className="privacy__item-title">Third-Party Links</p>
                <p className="privacy__item-body">
                  Our website may contain links to external sites. We are not
                  responsible for their privacy practices.
                </p>
              </li>
              <li className="privacy__item">
                <p className="privacy__item-title">Your Rights</p>
                <p className="privacy__item-body">
                  Depending on your location, you may have rights to access,
                  update, or delete your personal information. Contact us for
                  any privacy-related inquiries.
                </p>
              </li>
              <li className="privacy__item">
                <p className="privacy__item-title">Changes to This Policy</p>
                <p className="privacy__item-body">
                  We may update this Privacy Policy periodically. The latest
                  version will always be available on our website.
                </p>
              </li>
              <li className="privacy__item">
                <p className="privacy__item-title">Contact Us</p>
                <p className="privacy__item-body--footer">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p className="privacy__item-body--footer">
                  Smart Solutions Group
                </p>
                <p className="privacy__item-body--footer">
                  ssgroupcorpllc@gmail.com
                </p>
                <p className="privacy__item-body--footer">+99890 0071806</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Privacy;
