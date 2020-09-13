import React from "react";
import { shallow } from "enzyme";
import testUtilities from "../../../../utils/test-utilities";
import Filter from "./index";

describe("Filter Component", () => {
  /**
   * Factory Function
   */
  const setUp = (props) => {
    return shallow(<Filter {...props} />);
  };

  it("Should render without errors", () => {
    let component = setUp({});
    const wrapper = testUtilities.findByTestAtrr(component, "filter-wrapper");
    expect(wrapper.length).toBe(1);
  });

  it("Should render with all essential sections", () => {
    let component = setUp({});
    const wrapper =
      testUtilities.findByTestAtrr(component, "launch-year-section") &&
      testUtilities.findByTestAtrr(component, "successful-launch-section") &&
      testUtilities.findByTestAtrr(component, "successful-landing-section");
    expect(wrapper).toBeTruthy();
  });
});
