import React from 'react'

import styles from './gallery.module.css'

const GalleryItem = ({item}) => {
    return (
        <img className={styles.Gallery__item__image} src={ item.url } alt={ item.alt } />
    )
}

export default GalleryItem
