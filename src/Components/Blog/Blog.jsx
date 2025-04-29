import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogText } from "./BlogData";
import blogDetails from "../BlogDetails/BlogData";
import "./Blog.css";

function Blog() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzVjagLKCdGKcmLm4hw9lTra-nuW6rm1gr8NJnnLwWe_XKPmvlq_v9f12m8P020GBEW7A/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }),
      }
    );

    if (response.ok) {
      alert("Email muvaffaqiyatli saqlandi!");
      setEmail("");
    } else {
      alert("Xatolik yuz berdi! Qaytadan urinib ko‘ring.");
    }
  };

  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="blog__container">
          <h1 className="blog__title">
            <span className="blog__dec">{blogText.decTitle}</span>{" "}
            {blogText.title}
          </h1>

          <p className="blog__subtitle">{blogText.subtitle}</p>

          <ul className="blog__list">
            {blogDetails.map((blog) => (
              <li className="blog__item" key={blog.id}>
                <Link to={`/blog/${blog.id}`} className="blog__item-link">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog__image"
                  />
                  <p className="blog__item-title">{blog.title}</p>
                  <p className="blog__item-description">{blog.cardBody}</p>
                  <span className="blog__item-button">Read More</span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="blog__bottom">Get Fresh Articles First</p>
          <div className="blog__bottom-wrapper">
            <div className="blog__wrapper">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Your company email"
                  className="blog__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="blog__button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
