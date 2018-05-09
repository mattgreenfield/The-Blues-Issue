import React from 'react'

import styles from './heading.module.css'

const Heading = ({children, level}) => {
    const Element = `h${level ? level : 1}`;
    return (
        <Element className={styles.Heading}>{ children }</Element>
    )
}

export default Heading
