import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    return <button className={css.Button}></button>;
  }
}
