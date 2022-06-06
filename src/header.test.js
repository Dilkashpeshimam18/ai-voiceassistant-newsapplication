import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

import { isTSAnyKeyword } from "@babel/types";

it("renders without crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header></Header>, div);
});
