import React from "react";
import Board from "./board";
import { shallow } from "enzyme";

describe("Board", () => {
  //it global functions by jest
  it("Renders successfully without crashing", () => {
    let squares = Array(9).fill(null);
    shallow(<Board square={squares} />);
  });

  it("calls onClick event on click of a square in board", () => {
    let squares = Array(9).fill(null);
    const onClick = jest.fn();
    let wrapper = mount(<Board squares={squares} onClick={onClick} />);
    wrapper.find("button.square").first().simulate("click");
    expect(onClick).toBeCalledWith(0);
  });
});
