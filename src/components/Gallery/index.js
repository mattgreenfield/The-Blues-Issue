import React from 'react';
import Link from 'gatsby-link';
import Grid from './Grid';
import Carousel from './Carousel';

import styles from './gallery.module.css';

const Gallery = ({ items, style }) => {
  if (!items || items.length === 0) {
    return false;
  }
  if (style === 'grid') {
    return <Grid items={items} />;
  }
  return <Carousel items={items} />;
};

export default Gallery;
