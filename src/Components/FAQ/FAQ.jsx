import React, { useState } from "react";
import "./FAQ.scss";
import { getFAQs } from "./faqData"; // Import the FAQ data

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = getFAQs(); // Call the function to fetch FAQ data

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq" id="faq">
      <div className="container">
        <div className="faq__container">
          <h2 className="faq__title">
            Frequently Asked <span className="faq__dec">Questions</span>
          </h2>
          <ul className="faq__list">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className={`faq__item ${
                  activeIndex === index ? "faq__item--active" : ""
                }`}
              >
                <button
                  className="faq__question"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq__icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div className="faq__answer">
                  {activeIndex === index && <p>{faq.answer}</p>}
                </div>
              </li>
            ))}
          </ul>

          <div className="faq__btn-wrapper">
            <button className="faq__btn">Reach Us!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
