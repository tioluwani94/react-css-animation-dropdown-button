import React from "react";
import { render } from "react-dom";
import Button from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  position: "relative"
};

const App = () => (
  <div style={styles}>
    <Button transitionClass="example" />
  </div>
);

render(<App />, document.getElementById("root"));
