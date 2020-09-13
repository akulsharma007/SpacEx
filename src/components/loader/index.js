import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

function Loader(props) {
  return props.show ? (
    <>
      <div className="backdrop" data-test="backdrop"></div>
      <div className="loader-wrapper" data-test="loader"></div>
    </>
  ) : null;
}

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
};
export default Loader;
