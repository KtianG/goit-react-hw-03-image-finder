import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import css from './App.module.css';
import getPictures from 'services/getPictures';

export class App extends Component {
  state = {
    isLoading: false,
    loadMore: false,
    query: '',
    page: 1,
    images: [],
  };
  newQuery = async e => {
    e.preventDefault();

    const query = e.currentTarget.elements.query.value;

    if (!query) {
      return;
    }

    this.setState({
      isLoading: true,
      loadMore: false,
      page: 1,
      query: query,
    });

    const data = await getPictures(query, 1);
    const totalHits = data.totalHits;
    const images_array = data.hits;

    this.setState({ images: images_array });

    this.setState({ isLoading: false });
    if (totalHits > 12) {
      this.setState({ loadMore: true });
    }
  };

  loadMore = async () => {
    const { query, page, images } = this.state;
    this.setState({
      isLoading: true,
      loadMore: false,
    });
    const currentPage = page + 1;
    this.setState({
      page: currentPage,
    });

    const data = await getPictures(query, currentPage);
    const totalHits = data.totalHits;
    const images_array = data.hits;

    const new_image_array = images.concat(images_array);

    this.setState({ images: new_image_array, isLoading: false });

    if (new_image_array.length < totalHits) {
      this.setState({ loadMore: true });
    }
  };

  render() {
    const { images } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.newQuery} />
        <ImageGallery images={images} />
        {this.state.isLoading ? <Loader /> : ''}
        {this.state.loadMore ? <Button onClick={this.loadMore} /> : ''}
      </div>
    );
  }
}
