import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    smallImage: PropTypes.string,
    largeImage: PropTypes.string,
    alt: PropTypes.string,
  };

  openModal = () => {};

  render() {
    const { smallImage, largeImage, alt, onClick } = this.props;

    return (
      <li className={css.ImageGalleryItem}>
        <img
          onClick={() => onClick(largeImage, alt)}
          className={css.ImageGalleryItem_image}
          src={smallImage}
          alt={alt}
        />
      </li>
    );
  }
}
