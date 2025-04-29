import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Terms.css";

function Terms() {
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
      className="terms"
    >
      <div className="container">
        <div className="terms__container">
          <h1 className="terms__tite">Terms & Conditions</h1>

          <div className="terms__body">
            <p className="terms__subtitle">Terms of Use</p>

            <p className="terms__date">Effective Date: 03.02.2025</p>

            <ol className="terms__list">
              <li className="terms__item">
                <p className="terms__item-title">Acceptance of Terms</p>
                <p className="terms__item-body">
                  By accessing or using the Smart Solutions Group website
                  ("Website"), you agree to be bound by these Terms of Use
                  ("Terms"). If you do not agree, please do not use the Website.
                  Your continued use of the Website constitutes acceptance of
                  any updates or modifications to these Terms.
                </p>
              </li>
              <li className="terms__item">
                <p className="terms__item-title">Use of Website</p>
                <ul className="terms__item-list">
                  <li className="terms__inner-item">
                    You must be at least 18 years old or have the consent of a
                    legal guardian to use this Website.
                  </li>
                  <li className="terms__inner-item">
                    You agree to use the Website only for lawful purposes and in
                    accordance with these Terms.
                  </li>
                  <li className="terms__inner-item">
                    You may not use the Website in a way that disrupts, damages,
                    or impairs its functionality or security.
                  </li>
                  <li className="terms__inner-item">
                    Unauthorized use of the Website may result in termination of
                    access and possible legal action.
                  </li>
                </ul>
              </li>
              <li className="terms__item">
                <p className="terms__item-title">Intellectual Property</p>
                <ul className="terms__item-list">
                  <li className="terms__inner-item">
                    All content on this Website, including text, graphics,
                    logos, images, videos, and software, is the property of
                    Smart Solutions Group or its licensors and is protected by
                    intellectual property laws.
                  </li>
                  <li className="terms__inner-item">
                    You may not copy, modify, distribute, or exploit any content
                    without prior written permission from Smart Solutions Group.
                  </li>
                  <li className="terms__inner-item">
                    Unauthorized use of any trademarks, service marks, or
                    branding elements displayed on the Website is strictly
                    prohibited.
                  </li>
                </ul>
              </li>
              <li className="terms__item">
                <p className="terms__item-title">User Accounts</p>
                <ul className="terms__item-list">
                  <li className="terms__inner-item">
                    If you create an account, you are responsible for
                    maintaining its confidentiality and restricting access to
                    your account.
                  </li>
                  <li className="terms__inner-item">
                    You agree to provide accurate, complete, and current
                    information during registration and to update it as needed.
                  </li>
                  <li className="terms__inner-item">
                    We reserve the right to suspend or terminate accounts that
                    violate these Terms, engage in fraudulent activities, or
                    compromise security.
                  </li>
                  <li className="terms__inner-item">
                    You are responsible for all activities that occur under your
                    account, whether authorized by you or not.
                  </li>
                </ul>
              </li>
              <li className="terms__item">
                <p className="terms__item-title">Disclaimer of Warranties</p>
                <ul className="terms__item-list">
                  <li className="terms__inner-item">
                    The Website and its content are provided "as is" and "as
                    available" without any warranties, express or implied.
                  </li>
                  <li className="terms__inner-item">
                    Smart Solutions Group does not guarantee that the Website
                    will be error-free, uninterrupted, or free of viruses or
                    other harmful components.
                  </li>
                  <li className="terms__inner-item">
                    Your use of the Website is at your own risk, and we make no
                    representations regarding its accuracy, reliability, or
                    completeness.
                  </li>
                </ul>
              </li>
              <li className="terms__item">
                <p className="terms__item-title">Limitation of Liability</p>
                <ul className="terms__item-list">
                  <li className="terms__inner-item">
                    Smart Solutions Group shall not be liable for any direct,
                    indirect, incidental, consequential, or punitive damages
                    arising from your use of the Website.
                  </li>
                  <li className="terms__inner-item">
                    This limitation of liability applies even if Smart Solutions
                    Group has been advised of the possibility of such damages.
                  </li>
                  <li className="terms__inner-item">
                    Some jurisdictions do not allow the exclusion of certain
                    warranties or limitations of liability, so some of these
                    limitations may not apply to you.
                  </li>
                </ul>
              </li>
              <li className="terms__item">
                <p className="terms__item-title">Third-Party Links</p>
                <ul className="terms__item-list">
                  <li className="terms__inner-item">
                    The Website may contain links to third-party websites for
                    informational purposes only.
                  </li>
                  <li className="terms__inner-item">
                    Smart Solutions Group does not endorse, control, or assume
                    responsibility for any third-party content, services, or
                    policies.
                  </li>
                  <li className="terms__inner-item">
                    Your use of third-party websites is at your own risk, and we
                    encourage you to review their terms and privacy policies.
                  </li>
                </ul>
              </li>
              <li className="terms__item">
                <p className="terms__item-title">Modifications to Terms</p>
                <ul className="terms__item-list">
                  <li className="terms__inner-item">
                    We reserve the right to modify these Terms at any time
                    without prior notice.
                  </li>
                  <li className="terms__inner-item">
                    Updates will be posted on this page, and your continued use
                    of the Website signifies your acceptance of the revised
                    Terms.
                  </li>
                  <li className="terms__inner-item">
                    It is your responsibility to periodically review these Terms
                    for changes.
                  </li>
                </ul>
              </li>
              <li className="terms__item">
                <p className="terms__item-title">
                  Governing Law and Dispute Resolution
                </p>
                <ul className="terms__item-list">
                  <li className="terms__inner-item">
                    These Terms shall be governed by and construed in accordance
                    with the laws of [Your Jurisdiction].
                  </li>
                  <li className="terms__inner-item">
                    Any disputes arising out of or related to these Terms shall
                    be resolved through negotiation, and if unresolved, through
                    binding arbitration or litigation in the appropriate
                    jurisdiction.
                  </li>
                </ul>
              </li>
              <li className="terms__item">
                <p className="terms__item-title">Termination</p>
                <ul className="terms__item-list">
                  <li className="terms__inner-item">
                    We reserve the right to terminate or suspend access to the
                    Website for any violation of these Terms or other
                    inappropriate conduct.
                  </li>
                  <li className="terms__inner-item">
                    Termination may occur without prior notice and without
                    liability to you.
                  </li>
                  <li className="terms__inner-item">
                    Upon termination, you must cease all use of the Website and
                    its content.
                  </li>
                </ul>
              </li>

              <li className="terms__item">
                <p className="terms__item-title">Contact Us</p>
                <p className="terms__item-body--footer">
                  For any questions or concerns about these Terms, please
                  contact us at:
                </p>
                <p className="terms__item-body--footer">
                  Smart Solutions Group
                </p>
                <p className="terms__item-body--footer">
                  ssgroupcorpllc@gmail.com
                </p>
                <p className="terms__item-body--footer">+99890 0071806</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Terms;
