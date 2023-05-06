import React, { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export class Loader extends Component {
  render() {
    return (
      <div className={css.Loader}>
        <Circles />
      </div>
    );
  }
}
