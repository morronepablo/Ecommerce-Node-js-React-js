import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

import { HiOutlineArrowLeft } from "react-icons/hi";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BrandCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link
                  to={"/blogs"}
                  className="d-flex align-items-center gap-10"
                >
                  <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  className="img-fluid w-100 my-4"
                  src="images/blog-1.jpg"
                  alt="blog"
                />
                <p>
                  You're only as good as your last collection, which is an
                  enormous pressure. 1 think there is something about Luxury E
                  not something people need, but it's what they want. It really
                  pulls at their heart. I have a fantastic relationship with
                  money.Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestibulum pretium comodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a
                  accumsan nisl ante vestibulum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
