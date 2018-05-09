import React from 'react'
import GalleryItem from './GalleryItem'

import styles from './gallery.module.css'

const GalleryCarousel = ({items}) => {
    return (
        <ul className={styles.GalleryCarousel} data-style="grid">
            { items.map((item, index) => (
                <li className={styles.Gallery__item} key={index}>
                    <GalleryItem item={ item } />
                </li>
            ))}
        </ul>
    )
}

export default GalleryCarousel
