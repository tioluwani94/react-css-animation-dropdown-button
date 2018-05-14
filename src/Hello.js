import React from "react";
import styled from "styled-components";

class Button extends React.Component {
  state = {
    showDropdown: false
  };
  render() {
    return (
      <div>
        <button>Click Me</button>
      </div>
    );
  }
}

export default Button;
