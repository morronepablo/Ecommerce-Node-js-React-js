import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img
              className="img-fluid"
              src="images/headphone2.jpg"
              alt="headphone"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havel's</h5>
            <h6 className="title">
              Kids Headphones bulk 10 pack multi colored for students
            </h6>
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              value={"3.5"}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100.00</span>&nbsp;
              <strike>$200.00</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger">01</span>:
                <span className="badge rounded-circle p-2 bg-danger">01</span>:
                <span className="badge rounded-circle p-2 bg-danger">01</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: 5</p>
              <div class="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
