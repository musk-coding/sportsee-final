import React from "react";

function Greeting(props) {
  return (
    <div className="greeting">
      <p className="greeting--hello">
        Bonjour <span className="text-red">{props.userName}</span>
      </p>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Greeting;
