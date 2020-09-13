import React from "react";
import { shallow } from "enzyme";
import testUtilities from "../../utils/test-utilities";
import Loader from "./index";

describe("Loader Component", () => {
  /**
   * Factory Function
   */
  const setUp = (props) => {
    return shallow(<Loader {...props} />);
  };

  it("Should render with backdrop present only when props is true", () => {
    let component = setUp({
      show: true,
    });

    const wrapper = testUtilities.findByTestAtrr(component, "backdrop");
    expect(wrapper.length).toBe(1);
    let component1 = setUp({
      show: false,
    });
    const wrapper1 = testUtilities.findByTestAtrr(component1, "backdrop");
    expect(wrapper1.length).toBe(0);
  });

  it("Should render with loader present only when props is true", () => {
    let component = setUp({
      show: true,
    });

    const wrapper = testUtilities.findByTestAtrr(component, "loader");
    expect(wrapper.length).toBe(1);
    let component1 = setUp({
      show: false,
    });
    const wrapper1 = testUtilities.findByTestAtrr(component1, "loader");
    expect(wrapper1.length).toBe(0);
  });
});
