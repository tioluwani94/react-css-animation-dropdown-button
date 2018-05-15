import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import ReactTransitionGroup from "react-addons-transition-group";
import styled from "styled-components";

const Item = styled.a`
  border-bottom: 1px solid #f8f8f8;
  display: block;
  cursor: pointer;
  text-align: left;

  .title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;

    span.icon {
      background: #000000;
      width: 12px;
      height: 2px;
      position: absolute;
      display: block;
      right: 0;
    }
    span.icon2 {
      background: #000000;
      width: 2px;
      height: 12px;
      position: absolute;
      display: block;
      right: 5px;
      top: 11px;
    }
  }

  .description {
    padding-bottom: 1rem;
  }
`;
class AccordionItem extends React.Component {
  state = {
    open: false,
    showIcon: true,
    showIcon2: true
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { data: { title, description }, count } = this.props;
    const { showIcon, showIcon2 } = this.state;
    return (
      <Item onClick={this.toggleOpen}>
        <ReactCSSTransitionGroup
          transitionName="show-accordion"
          transitionEnterTimeout="300"
          transitionLeaveTimeout="150"
          component="div"
        >
          <p className="title">
            <span>{title}</span>
            <span class="icon" />
            <ReactCSSTransitionGroup
              transitionName="icon"
              transitionEnterTimeout="50"
              transitionLeaveTimeout="50"
            >
              {!this.state.open ? <span class="icon2" /> : null}
            </ReactCSSTransitionGroup>
          </p>
          {this.state.open ? (
            <div className="description" key={count}>
              {description}
            </div>
          ) : null}
        </ReactCSSTransitionGroup>
      </Item>
    );
  }
}
class Accordion extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map((item, i) => (
          <AccordionItem key={i.toString()} data={item} count={i.toString()} />
        ))}
      </div>
    );
  }
}

export default Accordion;
