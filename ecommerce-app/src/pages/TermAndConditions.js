import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BrandCrumb title="Term And Conditions" />
      <section className="policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermAndConditions;
