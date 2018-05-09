import React from 'react'
import Link from 'gatsby-link'

import styles from './Button.module.css'

const Button = ({children, to, style, type}) => {
    const Element = to ? Link : 'button'
    return (
        <Element
            to={ to }
            className={styles.Button}
            data-style={ style }
            type={ type }
        >
            { children }
        </Element>
    )
}

export default Button
