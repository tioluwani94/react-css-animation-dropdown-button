import React from "react";
import { render } from "react-dom";
import Button from "./Hello";
import Accordion from "./Accordion";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  position: "relative"
};

const items = [
  {
    title: "Section One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Section Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const App = () => (
  <div style={styles}>
    <Button transitionClass="example" />
    <Accordion items={items} />
  </div>
);

render(<App />, document.getElementById("root"));
