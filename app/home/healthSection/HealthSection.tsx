import React from "react";
import "./Health.scss";

const health = () => {
  return (
    <section className="quality">
      <div className="container">
        <div className="big">
          <div className="left">
            <img src="./phone.png" alt="" />
          </div>
          <div className="right">
            <h1>Premium Quality?For Your Health</h1>
            <div className="text1">
              <p>
                • Premium quality food is made with ingredients that are packed
                with essential vitamins, minerals.
              </p>
              <p>
                • These foods promote overall wellness by support healthy
                digestion and boosting immunity
              </p>
            </div>
            <button className="buttoms">Download</button>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default health;
