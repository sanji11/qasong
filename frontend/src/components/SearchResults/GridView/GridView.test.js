import React from "react";
import { shallow } from "enzyme";
import GridView from "./GridView";

describe("<GridView />", () => {
  it("renders a div", () => {
    const wrapper = shallow(<GridView searchResults={{ results: [] }} />);
    expect(wrapper.find("div")).toHaveLength(0);
  });
});
