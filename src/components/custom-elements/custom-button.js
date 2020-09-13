import React from "react";
import "./custom-button.scss";

function CustomButton(props) {
  return (
    <button
      className={props.styleClass}
      onClick={() => props.onClickHandler(props.children)}
    >
      {props.children}
    </button>
  );
}
export default CustomButton;
