import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

function Programs(props) {
  return (
    <div className="programs-wrapper" data-test="programs-wrapper" tabIndex={0}>
      {props.fetchedData &&
        props.fetchedData.map((ele, index) => (
          <section key={index}>
            <figure>
              <img src={ele.links.mission_patch_small} />
            </figure>
            <header>
              {ele.mission_name} #{ele.flight_number}
            </header>
            <section data-test="mission-ids">
              <header>Mission Ids:</header>
              {ele.mission_id.length !== 0 ? (
                <ul>
                  {ele.mission_id.map((mid, index) => (
                    <li key={index}>{mid}</li>
                  ))}
                </ul>
              ) : (
                <div className="content-na">NA</div>
              )}
            </section>
            <section data-test="launch-year">
              <header className="display-override">Launch Year:</header>
              <p className="content">{ele.launch_year}</p>
            </section>
            <section data-test="successful-launch">
              <header className="display-override">Successful Launch:</header>
              <p className="content">
                {ele.launch_success !== undefined || ele.launch_success !== null
                  ? typeof ele.launch_success == "boolean"
                    ? ele.launch_success.toString()
                    : ele.launch_success
                  : "NA"}
              </p>
            </section>
            <section data-test="successful-landing">
              <header className="display-override">Successful Landing:</header>
              <p className="content">
                {ele.launch_landing
                  ? typeof ele.launch_landing == "boolean"
                    ? ele.launch_landing.toString()
                    : ele.launch_landing
                  : "NA"}
              </p>
            </section>
          </section>
        ))}
    </div>
  );
}

Programs.propTypes = {
  fetchedData: PropTypes.array.isRequired,
};

export default Programs;
