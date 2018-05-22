import React from 'react';

import styles from './Lightbox.module.css';

const Lightbox = ({ children, handleClose }) => (
  <div className={styles.lightbox}>
    <button type="button" className={styles.lightboxOverlay} onClick={() => handleClose()}>
      Close
    </button>
    <div className={styles.lightboxContent}>{children}</div>
  </div>
);

export default Lightbox;
