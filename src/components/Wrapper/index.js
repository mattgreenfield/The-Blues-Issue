import React from 'react'
import Link from 'gatsby-link'

import styles from './wrapper.module.css'

const Wrapper = ({children, size}) => {
    return (
        <div className={styles.pageWrapper} data-size={ size }>{ children }</div>
    )
}

export default Wrapper
