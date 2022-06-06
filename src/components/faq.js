import React, { useState } from "react";
import { Data } from "./faqData";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IconContext } from "react-icons";
import "./faq.css";
import index from "react-typical";

function Faq({ index, setIndex }) {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    console.log(clicked);
    console.log(index);
    console.log("function call");
    if (clicked === index) {
      return setClicked(null);
      console.log("clicked");
      console.log(index)
    }
    setClicked(index);
  };
  return (
    <IconContext.Provider value={{ size: "25px", color: "#00FFB9" }}>
      <div className="faq">
        <h1>Frequently asked question</h1>
        <div className="faq__container" index={index}>
          {Data.map((item, index) => {
            return (
              <>
                <div
                  className="faq__question"
                  onClick={()=>toggle(index)}
                  key={index}
                >
                  <h4
                    onClick={() => setIndex(index - 1)}
                    className="question__title"
                  >
                    {item.question}
                  </h4>
                  <span onClick={() => setIndex(index - 1)}>
                    {clicked === index ? <FiMinus /> : <FiPlus />}
                  </span>
                </div>
                {clicked === index ? (
                  <div className="faq__answer">
                    <p className="answer__title">{item.answer}</p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Faq;
