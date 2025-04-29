import React from "react";
import { motion } from "framer-motion";
import "./Client.css";
import { testimonials, testimonials2, testimonials3 } from "./ClientData";

function Client() {
  const renderTestimonials = (testimonials) => (
    <>
      {testimonials.map((testimonial, index) => (
        <div className="client__item" key={index}>
          <div className="client__item-wrapper">
            <div className="client__item-text-wrapper">
              <p className="client__name">{testimonial.name}</p>
              <span className="client__role">{testimonial.role}</span>
            </div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="client__image"
            />
          </div>
          <p className="client__text">{testimonial.text}</p>
        </div>
      ))}
    </>
  );

  const allTestimonials = [...testimonials, ...testimonials2, ...testimonials3];

  return (
    <section className="client" id="client">
      <div className="container">
        <h1 className="client__title">See What Our Clients’ Say!</h1>
        <p className="client__subtitle">
          Hiring the wrong developer can turn your project into a <br />{" "}
          disaster. The best way to avoid this is by thoroughly
        </p>
        <div className="client__container">
          <div className="client__desktop">
            <motion.div
              animate={{ translateY: "-80%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="client__wrapper client__wrapper--first"
            >
              {renderTestimonials(testimonials)}
            </motion.div>
            <motion.div
              animate={{ translateY: "-80%" }}
              transition={{
                duration: 27,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="client__wrapper client__wrapper--second"
            >
              {renderTestimonials(testimonials2)}
            </motion.div>
            <motion.div
              animate={{ translateY: "-80%" }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="client__wrapper client__wrapper--third"
            >
              {renderTestimonials(testimonials3)}
            </motion.div>
          </div>

          {/* Mobile view with one motion div */}
          <div className="client__mobile">
            <motion.div
              animate={{ translateY: "-50%" }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="client__wrapper client__wrapper--mobile"
            >
              {renderTestimonials(allTestimonials)}
            </motion.div>
          </div>
        </div>

        <div className="client__btn-wrapper">
          <button className="client__btn">Reach Us!</button>
        </div>
      </div>
    </section>
  );
}

export default Client;
