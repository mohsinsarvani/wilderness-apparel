import React, { Component } from 'react';

import OpenIcon from './../Assets/OpenIcon.svg';
import CloseIcon from './../Assets/CloseIcon.svg';

class FilterItem extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isOpen: !this.state.isOpen});
  }
  render() {

    let className="filter-item__dropdown" + (this.state.isOpen ? "--show" : "");

    return (
      <div className="filter-item">
        <div className="filter-item__container">
          <h3 className="filter-item__title">{this.props.title}</h3>
          <button className="filter-item__button" onClick={this.handleClick}>
            <img className="filter-item__icon" src={this.state.isOpen ? CloseIcon : OpenIcon} alt="icon" />
          </button>
        </div>
        <div className={className}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default FilterItem;