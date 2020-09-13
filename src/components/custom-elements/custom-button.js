import React from "react";
import "./custom-button.scss";

function CustomButton(props) {
  return (
    <button
      className={props.styleClass}
      onClick={() => props.onClickHandler(props.children)}
      tabIndex={0}
      data-test="custom-button"
    >
      {props.children}
    </button>
  );
}
export default CustomButton;
