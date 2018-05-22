import React from 'react';
import Img from 'gatsby-image';
import styles from './Lightbox.module.css';

const Lightbox = ({ sizes, handleClose }) => (
  <div className={styles.lightbox}>
    <button type="button" onClick={() => handleClose()}>
      Close
      <Img
        sizes={sizes}
        style={{ position: 'static' }}
        className={styles.lightboxImage}
        imgStyle={{
          objectFit: 'contain',
          maxWidth: '1100px',
          maxHeight: '1100px',
          transform: 'translate(-50%,-50%)',
          top: '50%',
          left: '50%',
        }}
      />
    </button>
  </div>
);

export default Lightbox;
