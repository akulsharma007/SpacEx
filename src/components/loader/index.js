import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

function Loader(props) {
  return props.show ? (
    <>
      <div className="backdrop"></div>
      <div className="loader-wrapper"></div>
    </>
  ) : null;
}

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
};
export default Loader;
