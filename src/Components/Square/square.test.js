import React from "react";
import Square from "./square";
import { shallow } from "enzyme";

describe("Square", () => {
  it("Renders successfully without crashing", () => {
    shallow(<Square />);
  });
});
