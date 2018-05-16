import React from 'react'
import GalleryItem from './GalleryItem'

import styles from './gallery.module.css'

const GalleryCarousel = ({items}) => {
    return (
        <ul className={styles.GalleryCarousel}>
            { items.map((item, index) => (
                <li className={styles.GalleryCarousel__item} key={index}>
                    <GalleryItem image={ item } />
                </li>
            ))}
        </ul>
    )
}

export default GalleryCarousel
