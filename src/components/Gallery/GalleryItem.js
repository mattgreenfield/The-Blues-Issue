import React from 'react';
import Img from 'gatsby-image';

import styles from './gallery.module.css';

const GalleryItem = ({ image, onClick }) => (
  <button type="button" onClick={onClick}>
    <Img
      sizes={image.sizes}
      resolutions={image.resolutions}
      className={styles.Gallery__item__image}
      outerWrapperClassName={styles.GalleryItemImageWrapper}
      alt={image.alt}
    />
  </button>
);

export default GalleryItem;
