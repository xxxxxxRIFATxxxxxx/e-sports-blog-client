import React from "react";
import "./Football.css";
const Football_kick = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-mod-12">
          <iframe
            src="https://www.crazygames.com/embed/soccer-dash"
            className="size-game"
            // style={{ width: "500px", height: "500px" }}
            frameborder="0"
            allow="gamepad *;"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Football_kick;
