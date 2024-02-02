import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative" to={":id"}>
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/headphone2.jpg"
              className="img-fluid"
              alt="productImage"
            />
            <img
              src="images/headphone3.jpg"
              className="img-fluid"
              alt="productImage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havel's</h6>
            <h5 className="product-title">
              Kids Headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              value={"3.5"}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              veniam eligendi numquam optio eveniet quod similique, suscipit
              necessitatibus sint nobis itaque, minima excepturi ea, omnis ab
              porro neque deserunt. Similique...
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/headphone2.jpg"
              className="img-fluid"
              alt="productImage"
            />
            <img
              src="images/headphone3.jpg"
              className="img-fluid"
              alt="productImage"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havel's</h6>
            <h5 className="product-title">
              Kids Headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              value={"3.5"}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              veniam eligendi numquam optio eveniet quod similique, suscipit
              necessitatibus sint nobis itaque, minima excepturi ea, omnis ab
              porro neque deserunt. Similique...
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
