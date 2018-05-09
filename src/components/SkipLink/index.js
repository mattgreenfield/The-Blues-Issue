import React from 'react'
import Link from 'gatsby-link'

import styles from './SkipLink.module.css'

const SkipLink = ({siteName}) => (
    <Link to="#page-main" className={styles.SkipLink}>Skip to main content</Link>
)

export default SkipLink
