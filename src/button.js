import React from "react";
import PropTypes from "prop-types";

function ButtonComponent(props) {
  return (
    <div>
      <button>{props.text}</button>
    </div>
  );
}
export default ButtonComponent;
