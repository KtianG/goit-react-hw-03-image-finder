import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

export class Modal extends Component {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    closeModal: PropTypes.func,
  };

  handleKeyDown = e => {
    const key = e.key;
    if (key === 'Escape') {
      const { closeModal } = this.props;
      closeModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { src, alt, closeModal } = this.props;

    return (
      <div className={css.Overlay} onClick={() => closeModal()}>
        <div className={css.Modal} onClick={e => e.stopPropagation()}>
          <img className={css.Modal_image} src={src} alt={alt} />
        </div>
      </div>
    );
  }
}
