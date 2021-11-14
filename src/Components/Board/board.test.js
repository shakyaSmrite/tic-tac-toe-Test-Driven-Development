import React from "react";
import Board from "./board";
import { shallow } from "enzyme";

describe("Board", () => {
  //it global functions by jest
  it("Renders successfully without crashing", () => {
    shallow(<Board />);
  });
});
