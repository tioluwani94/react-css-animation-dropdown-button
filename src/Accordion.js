import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styled from "styled-components";

const Item = styled.a`
  border-bottom: 1px solid #f8f8f8;
  display: block;
  cursor: pointer;
  text-align: left;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span.icon {
      background: #000000;
      width: 15px;
      height: 2px;
    }
  }

  .description {
    padding-bottom: 16px;
  }
`;
class AccordionItem extends React.Component {
  state = {
    open: false
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { data: { title, description }, count } = this.props;
    return (
      <Item onClick={this.toggleOpen}>
        <p className="title">
          <span>{title}</span>
          <span class="icon" />
        </p>
        <ReactCSSTransitionGroup
          transitionName="show-accordion"
          transitionEnterTimeout="250"
          transitionLeaveTimeout="250"
        >
          {this.state.open ? (
            <div className="description" key={count}>
              <p>{description}</p>
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
