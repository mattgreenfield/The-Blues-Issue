import React from 'react'
import Img from "gatsby-image";

import styles from './gallery.module.css'

const GalleryItem = ({image}) => {
    return (
        <Img
            sizes={ image.sizes }
            resolutions={ image.resolutions }
            className={ styles.Gallery__item__image }
            outerWrapperClassName={ styles.GridImageWrapper }
            alt={ image.alt }
        />
    )
}

export default GalleryItem
