import React, { useState } from "react";
import checked from "../images/icon-check.svg";

const valores = {
  1: {
    pageviews: "10K",
    monthly: 8,
    yearly: 72,
  },
  2: {
    pageviews: "50k",
    monthly: 12,
    yearly: 108,
  },
  3: {
    pageviews: "100K",
    monthly: 16,
    yearly: 144,
  },
  4: {
    pageviews: "500k",
    monthly: 24,
    yearly: 216,
  },
  5: {
    pageviews: "1M",
    monthly: 36,
    yearly: 324,
  },
};

const Card = () => {
  const [circle, setCircle] = useState(false);
  const [range, setRange] = useState(3);

  console.log(valores[range].pageviews);

  const handleRange = (e) => {
    setRange(e.target.value);
  };

  const handleCircle = () => {
    setCircle(!circle);
  };

  return (
    <>
      <section className="container section-card ">
        <div className="row card-first ">
          <div className="col-12 col-md-6 order-md-0  text-center text-md-start">
            <h5 className="mb-5 text-muted">
              {" "}
              {valores[range].pageviews} Pageviews{" "}
            </h5>
          </div>
          <div className="col-12 order-md-3 ">
            <input
              className="form-range mb-5"
              type="range"
              min="1"
              max="5"
              onInput={handleRange}
              defaultValue={3}
            />
          </div>
          <div className=" col-12 col-md-6 order-md-1  text-center text-md-start">
            <h1 className=" mb-2">
              {" "}
              ${circle
                ? valores[range].monthly + ".00"
                : valores[range].yearly}{" "}
              <span> / {circle ? "month" : "year"}</span>
            </h1>
          </div>
          <div className="section-billing col-12 order-md-4  ">
            <h5 className=" ms-md-auto ">Monthly Billing</h5>
            <div
              onClick={handleCircle}
              className={circle ? "button-slice" : "button-slice active"}
            >
              <div className={circle ? "circle" : "circle left"} />
            </div>
            <h5>Yearly Billing</h5>
            <h5 className="porcent">-25%</h5>
          </div>
        </div>
        <div className="row card-second text-sm-center text-md-start">
          <div className="col-12 col-md-6 mb-5 ">
            <h5>
              <img className="me-2" src={checked} alt="checked" />
              Unlimited websites
            </h5>
            <h5>
            <img className="me-2" src={checked} alt="checked" />
               100% data ownership </h5>
            <h5>
            <img  className="me-2" src={checked} alt="checked" />
              Email reports</h5>
          </div>

          <div className="col-12 col-md-6 d-flex  ">
            <button>Start my trial</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
