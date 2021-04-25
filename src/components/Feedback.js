import React from "react";

function Feedback(props) {
  return (
    <div className="intake-data">
      <img
        className="intake-data--icon"
        // src="assets/icons/calories-icon.svg"
        src={props.icon}
        alt="calories"
      />
      <div className="intake-data--figures">
        <p className="quantity">
          {props.quantity.toLocaleString("en-US", { maximumFractionDigits: 2 })}
          {props.unit}
        </p>
        <p className="type">{props.type}</p>
      </div>
    </div>
  );
}

export default Feedback;
