import React from "react";
import "./index.scss";
import CustomButton from "../../../../components/custom-elements/custom-button";
import PropTypes from "prop-types";

function Filter(props) {
  function launchYearHandler(year) {
    if (year === props.launchYear) {
      props.setLaunchYear();
    } else {
      props.setLaunchYear(year);
    }
  }

  function successfulLaunchHandler(launchCheck) {
    if (launchCheck.toLowerCase() == props.launchSuccess) {
      props.setLaunchSuccess();
    } else {
      props.setLaunchSuccess(launchCheck.toLowerCase());
    }
  }

  function successfulLandHandler(landCheck) {
    if (landCheck.toLowerCase() == props.landingSuccess) {
      props.setLandingSuccess();
    } else {
      props.setLandingSuccess(landCheck.toLowerCase());
    }
  }

  return (
    <div className="filter-wrapper">
      <h4>Filters</h4>
      <section>
        <header>Launch Year</header>
        <table>
          <tbody>
            {[...Array(7)].map((ele, index) => (
              <tr key={index}>
                <td>
                  <CustomButton
                    styleClass={
                      props.launchYear == 2006 + 2 * index ? "selected-btn" : ""
                    }
                    onClickHandler={launchYearHandler}
                  >
                    {2006 + 2 * index}
                  </CustomButton>
                </td>
                <td>
                  <CustomButton
                    onClickHandler={launchYearHandler}
                    styleClass={`adjustment ${
                      props.launchYear === 2007 + 2 * index
                        ? "selected-btn"
                        : ""
                    }`}
                    onClickHandler={launchYearHandler}
                  >
                    {2007 + 2 * index}
                  </CustomButton>
                </td>
              </tr>
            ))}
            <tr key={10}>
              <CustomButton
                styleClass={props.launchYear == 2020 ? "selected-btn" : ""}
                onClickHandler={launchYearHandler}
              >
                {2020}
              </CustomButton>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <header>Successful Launch</header>
        <table>
          <tbody>
            <tr>
              <td>
                <CustomButton
                  styleClass={
                    props.launchSuccess == "true" ? "selected-btn" : ""
                  }
                  onClickHandler={successfulLaunchHandler}
                >
                  True
                </CustomButton>
              </td>
              <td>
                <CustomButton
                  onClickHandler={successfulLaunchHandler}
                  styleClass={`adjustment ${
                    props.launchSuccess == "false" ? "selected-btn" : ""
                  }`}
                >
                  False
                </CustomButton>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <header>Successful Landing</header>
        <table>
          <tbody>
            <tr>
              <td>
                <CustomButton
                  styleClass={
                    props.landingSuccess == "true" ? "selected-btn" : ""
                  }
                  onClickHandler={successfulLandHandler}
                >
                  True
                </CustomButton>
              </td>
              <td>
                <CustomButton
                  onClickHandler={successfulLandHandler}
                  styleClass="adjustment"
                  styleClass={`adjustment ${
                    props.landingSuccess == "false" ? "selected-btn" : ""
                  }`}
                >
                  False
                </CustomButton>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

Filter.propTypes = {
  launchYear: PropTypes.number,
  setLaunchYear: PropTypes.func,
  launchSuccess: PropTypes.string,
  setLaunchSuccess: PropTypes.func,
  landingSuccess: PropTypes.string,
  setLandingSuccess: PropTypes.func,
};

export default Filter;
