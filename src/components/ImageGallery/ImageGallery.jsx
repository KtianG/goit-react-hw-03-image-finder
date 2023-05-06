import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array,
  };

  state = {
    modal: {
      largeImageURL: '',
      alt: '',
    },
  };

  openModal = (largeImage, alt) => {
    const modal = { largeImageURL: largeImage, alt: alt };
    this.setState({ modal: modal });
  };

  closeModal = () => {
    this.setState({
      modal: {
        largeImageURL: '',
        alt: '',
      },
    });
  };

  renderGalleryItems = ({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <ImageGalleryItem
        key={id}
        onClick={this.openModal}
        smallImage={webformatURL}
        alt={tags}
        largeImage={largeImageURL}
      />
    );
  };

  render() {
    const { images } = this.props;
    const { largeImageURL, alt } = this.state.modal;
    return (
      <div>
        <ul className={css.ImageGallery}>
          {images.map(this.renderGalleryItems)}
        </ul>
        {this.state.modal.largeImageURL === '' ? (
          ''
        ) : (
          <Modal src={largeImageURL} alt={alt} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}
