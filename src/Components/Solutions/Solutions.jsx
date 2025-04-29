import React, { useState, useEffect } from "react";
import photo from "../../images/iMac.png";
import marikat from "../../images/marikat.png";
import { motion } from "framer-motion";
import "./Solutions.scss";

const Solutions = () => {
  const title = "Innovative Solutions";

  const slides = [
    {
      subtitle: "Diamond Inc Platform",
      image: photo,
      description: (
        <>
          Diamond Inc approached us with website request to outstand in market
          and show credibility <br /> We created dedicated design & development
          and consult him with improvement he could get with online presence.
        </>
      ),
      tags: ["Website", "Mobile", "UX/UI"],
    },
    {
      subtitle: "MARIKAT UZ ONLINE STORE",
      image: marikat,
      description:
        "Marikatuz is a traditional Uzbek textile and handmade products business based in Margilan, Fergana, specializing in IKAT dyeing and natural dyes. This digital transformation enhances the brand’s visibility, improves customer accessibility, and streamlines operational efficiency, ultimately helping Marikatuz expand its global reach.",
      tags: ["Website", "Mobile", "UX/UI"],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);

    return () => clearInterval(interval); // Cleanup interval when unmounting
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="slider"
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="portfolio"
    >
      <div className="slider__container">
        <h1 className="slider__title">{title}</h1>

        <div
          className="slider__slider"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slider__slide">
              <img
                className="slider__img"
                src={slide.image}
                alt="Smart Solutions"
              />
              <div className="slider__wrapper">
                <h2 className="slider__subtitle">{slide.subtitle}</h2>
                <p className="slider__description">{slide.description}</p>
                <div className="slider__tags">
                  {slide.tags.map((tag, i) => (
                    <span key={i} className="slider__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="/" className="slider__link-btn">
                  Explore more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button className="slider__prev" onClick={handlePrev}>
          ←
        </button>
        <button className="slider__next" onClick={handleNext}>
          →
        </button>

        {/* Dots Navigation */}
        <div className="slider__dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`slider__dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Solutions;
