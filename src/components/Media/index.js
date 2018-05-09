import React from 'react'
import Link from 'gatsby-link'

import styles from './Media.module.css'

const Media = ({children, image}) => {

    return (
        <div className={ styles.Media }>
            <div className={ styles.MediaImage }>
                { image }
            </div>
            <div className={ styles.MediaDescription }>
                { children }
            </div>
        </div>
    )
}

export default Media
