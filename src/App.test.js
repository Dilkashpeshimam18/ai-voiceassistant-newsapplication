import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { isTSAnyKeyword } from "@babel/types";

it("renders without crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
});
