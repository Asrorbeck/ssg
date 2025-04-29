import React, { useEffect } from "react";
import blogDetails from "./BlogData";
import { useParams } from "react-router-dom";
import clock from "../../images/clock.svg";
import calendar from "../../images/calendar2.png";
import "./BlogDetails.css";

function BlogDetails() {
  const id = useParams();
  const blogData = blogDetails.find((post) => post.id === id.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id.id]);

  return (
    <section className="details">
      <div className="container">
        <div className="details__container">
          <div className="details__header-wrapper">
            <h1 className="details__title">{blogData.title}</h1>
            <div className="details__read-wrapper">
              <p className="details__author">
                {" "}
                <img src={clock} alt="clock" /> {blogData.readTime} min. to read
              </p>
              <p className="details__date">
                <img src={calendar} alt="calendar" /> Published: {blogData.date}
              </p>
            </div>
          </div>

          <p className="details__introduction--title">Introduction</p>
          <p className="details__introduction">{blogData.introduction}</p>

          {blogData.content.split("\n").map((paragraph, index) => (
            <p key={index} className="details__body">
              {paragraph}
            </p>
          ))}

          <p className="details__conclusion--title">Conclusion</p>
          <p className="details__conclusion">{blogData.conclusion}</p>

          <img
            src={blogData.image}
            alt={blogData.title}
            className="details__img"
          />
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
