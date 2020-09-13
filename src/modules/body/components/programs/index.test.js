import React from "react";
import { shallow } from "enzyme";
import testUtilities from "../../../../utils/test-utilities";
import Programs from "./index";

describe("Programs Component", () => {
  /**
   * Factory Function
   */
  const setUp = (props) => {
    return shallow(<Programs {...props} />);
  };

  it("Should render without errors", () => {
    let component = setUp({ fetchedData: [] });
    const wrapper = testUtilities.findByTestAtrr(component, "programs-wrapper");
    expect(wrapper.length).toBe(1);
  });

  it("Should render with all essential sections", () => {
    let component = setUp({ fetchedData: [] });
    const wrapper =
      testUtilities.findByTestAtrr(component, "mission-ids") &&
      testUtilities.findByTestAtrr(component, "launch-year") &&
      testUtilities.findByTestAtrr(component, "successful-launch") &&
      testUtilities.findByTestAtrr(component, "successful-landing");
    expect(wrapper).toBeTruthy();
  });
});
