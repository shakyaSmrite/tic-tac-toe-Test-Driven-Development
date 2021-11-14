import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  it("Renders successfully without crashing", () => {
    shallow(<App />);
  });
});
