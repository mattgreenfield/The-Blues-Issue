import React from 'react';
import Link from 'gatsby-link';

import GalleryItem from './GalleryItem';

import styles from './gallery.module.css';

const GalleryGrid = ({ items, onClick }) => {
  // replicate nth child in JS. 2, 4, 6, 11, 13, 15, 20, 22, 24, etc
  const sets = Math.ceil(items.length / 9);
  const ar = [2, 4, 6];
  Array(sets)
    .fill()
    .map(() => {
      ar.map(value => ar.indexOf(value + 9) < 0 && ar.push(value + 9));
    });
  const smallImages = ar;

  return (
    <ul className={styles.GalleryGrid} data-style="grid">
      {items.map((item, index) => {
        const isSmall = smallImages.includes(index);
        return (
          <li
            className={isSmall ? styles.GalleryGrid__itemSmall : styles.GalleryGrid__item}
            key={index}
            data-index={index}
          >
            <GalleryItem
              image={item}
              onClick={() => {
                onClick(index);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default GalleryGrid;
