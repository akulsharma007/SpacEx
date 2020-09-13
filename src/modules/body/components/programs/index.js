import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

function Programs(props) {
  return (
    <div className="programs-wrapper">
      {props.fetchedData.map((ele, index) => (
        <section key={index}>
          <figure>
            <img src={ele.links.mission_patch_small} />
          </figure>
          <header>
            {ele.mission_name} #{ele.flight_number}
          </header>
          <section>
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
          <section>
            <header className="display-override">Launch Year:</header>
            <p className="content">{ele.launch_year}</p>
          </section>
          <section>
            <header className="display-override">Successful Launch:</header>
            <p className="content">{ele.launch_success.toString()}</p>
          </section>
          <section>
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
