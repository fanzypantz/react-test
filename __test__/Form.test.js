import React from "react";
import { shallow } from "enzyme";
import Form from "../src/components/Form";
import { describe, it, test } from "@jest/globals";

it("renders without crashing", () => {
  shallow(<Form />);
});

describe("Test case for input", () => {
  let wrapper;
  it("title check", () => {
    wrapper = shallow(<Form />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "title", value: "Test title for form" },
    });
    // Functional components doesn't seem to have an easy way of testing "state" as they are without one
    expect(wrapper.find('input[type="text"]').prop("value")).toEqual(
      "Test title for form"
    );
  });

  it("textarea check", () => {
    wrapper = shallow(<Form />);
    wrapper.find("textarea").simulate("change", {
      target: { name: "body", value: "Test textarea for form" },
    });
    expect(wrapper.find("textarea").prop("value")).toEqual(
      "Test textarea for form"
    );
  });
});
