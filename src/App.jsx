import React from "react";
import ButtonComponent from "./button";
import ImgnComponent from "./img";

function app() {
  return (
    <div>
      <ButtonComponent text="play" />
      <ImgnComponent src="./guns.jpg" />
    </div>
  );
}
export default app;
