import React from 'react';
import Link from 'gatsby-link';

import styles from './Grid.module.css';

const Grid = ({ children, columns }) => (
  <div className={styles.Grid}>
    {children.map((child, index) => (
      <div className={styles.GridItem} style={{ width: `${100 / columns}%` }} key={index}>
        {child}
      </div>
    ))}
  </div>
);

export default Grid;
