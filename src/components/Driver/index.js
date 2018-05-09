import React from 'react'
import Link from 'gatsby-link'
import Heading from '../Heading'

import styles from './Driver.module.css'

const Driver = ({children, heading, linkText, linkTo}) => {

    return (
        <div className={ styles.Driver }>
            <Heading level="2">{ heading }</Heading>
            { children }
            <Link to={ linkTo } className={ styles.DriverLink}>{ linkText }</Link>
        </div>
    )
}

export default Driver
