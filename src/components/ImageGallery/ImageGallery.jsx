import React, { Component } from 'react';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    return <ul className={css.gallery}></ul>;
  }
}