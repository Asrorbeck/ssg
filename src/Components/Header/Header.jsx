import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom"; // Import React Router hooks
import logo from "../../images/Logo.svg";
import vector from "../../images/Vector.svg";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";
import "./Header.css";

function Header() {
  const { i18n } = useTranslation();
  const navigate = useNavigate(); // React Router navigation
  const location = useLocation(); // Get current page path
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const languages = ["en", "uz", "ru"];

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setDropdownOpen(false);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const handleNavigation = (section) => {
    toggleModal(); // Close modal when navigating
    if (location.pathname === "/") {
      // If already on home, just scroll
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const yOffset = -50; // Adjust by 50px before the section
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      // Redirect to home and then scroll after a short delay
      navigate("/");
      setTimeout(() => {
        window.location.hash = section; // This makes sure URL updates
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            const yOffset = -50; // Adjust scroll position by 50px
            const y =
              element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 300); // Give time for page to load
      }, 300);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="header">
      <div className="container">
        <div className="header__container">
          <a className="header__logo-link" href="/">
            <img className="header__logo" src={logo} alt="Logo" />
          </a>

          <div className="header__wrapper">
            {/* Dropdown */}
            <div className="header__dropdown" ref={dropdownRef}>
              <button
                className="header__dropdown-toggle"
                onClick={toggleDropdown}
              >
                {i18n.language.toUpperCase()}{" "}
                <img
                  className="header__vector"
                  src={vector}
                  alt="Vector pointer"
                />
              </button>

              {dropdownOpen && (
                <ul className="header__dropdown-menu">
                  {languages.map((lang) => (
                    <li key={lang} onClick={() => changeLanguage(lang)}>
                      {lang.toUpperCase()}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Menu Icon */}
            <a
              href="/"
              className="header__menu"
              onClick={(e) => {
                e.preventDefault();
                toggleModal();
              }}
            >
              <img className="header__menu-icon" src={menu} alt="Menu icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal">
          <div className="modal__content">
            <div className="modal__header">
              <a href="/" className="modal__logo">
                <img className="modal__logo-img" src={logo} alt="Logo of SSG" />
              </a>

              <div className="modal__btn-wrapper">
                <button className="modal__btn">Get Started</button>

                <button className="modal__close" onClick={toggleModal}>
                  <img src={close} alt="close" />
                </button>
              </div>
            </div>
            <ul className="modal__menu">
              <li className="modal__item">
                <a
                  href="/#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("about");
                  }}
                >
                  About
                </a>
              </li>
              <li className="modal__item">
                <a
                  href="/#service"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("service");
                  }}
                >
                  Our Service
                </a>
              </li>
              <li className="modal__item">
                <a
                  href="/#benefit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("benefit");
                  }}
                >
                  Why Choose Us?
                </a>
              </li>
              <li className="modal__item">
                <a
                  href="/#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("portfolio");
                  }}
                >
                  Our Work
                </a>
              </li>
              <li className="modal__item">
                <a
                  href="/#client"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("client");
                  }}
                >
                  Reviews
                </a>
              </li>
              <li className="modal__item">
                <a
                  href="/#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("faq");
                  }}
                >
                  FAQ
                </a>
              </li>
              <li className="modal__item">
                <a
                  href="/#blog"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("blog");
                  }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="modal__overlay" onClick={toggleModal}></div>
        </div>
      )}
    </section>
  );
}

export default Header;
