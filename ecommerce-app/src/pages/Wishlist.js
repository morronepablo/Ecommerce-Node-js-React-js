import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BrandCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    className="img-fluid w-100"
                    src="images/tab.jpg"
                    alt="tab"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch Witch Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price">$ 100.00</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    className="img-fluid w-100"
                    src="images/tab.jpg"
                    alt="tab"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch Witch Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price">$ 100.00</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    className="img-fluid w-100"
                    src="images/tab.jpg"
                    alt="tab"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch Witch Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price">$ 100.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
