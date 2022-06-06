import React from "react";
import "./Hero.css";
import Image1 from "../illustrator1.png";
import Image2 from "../illustrator3.png";
import Image3 from "../illustrator4.png";
import Typical from "react-typical";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__title">
        <h1 className="title__text">
          <span className="">AI</span> enabled voice assistant
        </h1>
        <h1 className="title__text2">
          {" "}
          News <span className="title__color">Application </span>
        </h1>
        <p className="hero__subtext" style={{ fontStyle: "italic" }}>
          <Typical
            steps={[
              "Give me the latest news.",
              1000,
              "Give me the latest Technology news.",
              1000,
              "Give me some news about vaccine.",
              1000,
              "Give me the news from BBC news.",
              1000,
            ]}
            wrapper="p"
            loop={Infinity}
          />
        </p>
        <button className="btn-hover color">Get Started</button>
      </div>

      <div className="hero__image">
        <img className="hero-img" src={Image2} />
      </div>
    </div>
  );
}

export default Hero;
