import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { onClick } = this.props;
    return (
      <button className={css.Button} onClick={() => onClick()}>
        Load More
      </button>
    );
  }
}
