import React from "react";
import styled from "styled-components";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./App.css";

const Div = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 0px 35px rgba(48, 95, 129, 0.1);
  padding: 20px;
  min-width: 140px;
  right: 230px;
  p {
    margin: 0;
  }
`;
const styles = {
  buttonStyle: {
    padding: "0 16px",
    height: "45px",
    borderRadius: "100px",
    background: "#6067f1",
    border: "1px solid #6067f1",
    color: "#ffffff",
    fontSize: "16px",
    outline: "none",
    cursor: "pointer"
  },
  contatiner: {
    position: "relative"
  }
};
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }

  toggleDropdown = () => {
    this.setState({
      showDropdown: !this.state.showDropdown
    });
  };
  render() {
    const { showDropdown } = this.state;
    return (
      <div style={styles.container}>
        <button style={styles.buttonStyle} onClick={this.toggleDropdown}>
          Click Me
        </button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout="200"
          transitionLeaveTimeout="200"
        >
          {showDropdown ? (
            <Div key="one">
              <p>Hello world</p>
            </Div>
          ) : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Button;
