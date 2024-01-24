import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img className="img-fluid" src="images/blog-1.jpg" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec. 2023</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
            at eveniet ullam.
          </p>
          <Link to={"/"} className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
