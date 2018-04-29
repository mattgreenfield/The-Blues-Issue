import React from 'react'
import Link from 'gatsby-link'

import styles from './logo.module.css'

const Logo = ({isLink}) => {
    const Element = isLink ? Link : 'div';
    return (
        <Element className={styles.logo} to="/">
            <span className={styles.logo__top}>The</span>
            <span className={styles.logo__main}>BLUES ISSUE</span>
            <span className={styles.logo__bottom}>Blues that rocks</span>
        </Element>
    )
}

export default Logo
