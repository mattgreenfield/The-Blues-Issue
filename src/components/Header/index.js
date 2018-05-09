import React from 'react'
import styles from './header.module.css'

import Logo from '../../components/Logo'
import PageNav from '../../components/PageNav'

const Header = ({removeLogo}) => (
    <header className={styles.PageHeader}>
        { !removeLogo && (
            <div className={styles.PageHeader_logo}>    
                <Logo isLink />
            </div>
        )}
        <div className={styles.PageHeader_nav}>
            <PageNav />
        </div>
    </header>
)

export default Header
