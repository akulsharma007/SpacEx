import React from "react";
import { shallow } from "enzyme";
import testUtilities from "../../utils/test-utilities";
import CustomButton from "./custom-button";

describe("Custom Button Component", () => {
  /**
   * Factory Function
   */
  const setUp = (props) => {
    return shallow(<CustomButton {...props} />);
  };

  it("Should render without errors", () => {
    let component = setUp({});
    const wrapper = testUtilities.findByTestAtrr(component, "custom-button");
    expect(wrapper.length).toBe(1);
  });

  it("Should render with value as passed as props", () => {
    const value = "test";
    let component = setUp({ children: value });
    const wrapper = testUtilities.findByTestAtrr(component, "custom-button");
    expect(wrapper.text()).toBe(value);
  });

  it("Should render with calling props onclick handler on click", () => {
    const mockFn = jest.fn();
    let component = setUp({
      onClickHandler: mockFn,
    });
    const wrapper = testUtilities.findByTestAtrr(component, "custom-button");
    wrapper.simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
