import React from 'react'
import Link from 'gatsby-link'

import styles from './gallery.module.css'

const GalleryGrid = ({items}) => {
    return (
        <ul className={styles.Gallery} data-style="grid">
            { items.map((item, index) => (
                <li className={styles.Gallery__item} key={index}>
                    <img className={styles.Gallery__item__image} src={ item.url } alt={ item.alt } />
                </li>
            ))}
        </ul>
    )
}

export default GalleryGrid
