import React from "react";
import "./Benefits.css";

function Benefits() {
  return (
    <div className="benefits">
      <h1 className="benefit__title">Benefits of using NewsDay.io</h1>
      <div className="benefits__container">
        <div className="benefits__contain">
          <p>Save time</p>
        </div>
        <div className="benefits__contain">
          <p>Improve User experience</p>
        </div>
        <div className="benefits__contain">
          <p>Can use by visually impact people</p>
        </div>
        <div className="benefits__contain">
          <p>Easy to use</p>
        </div>
        <div className="benefits__contain">
          <p>Stay updated with latest news</p>
        </div>
        <div className="benefits__contain">
          <p>Entire application run by speech recognition</p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
