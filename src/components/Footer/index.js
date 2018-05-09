import React from 'react'

import Logo from '../../components/Logo'
import PageNav from '../../components/PageNav'
import Icon from '../../components/Icon'

import styles from './Footer.module.css'

const Footer = ({siteName}) => (
    <footer className={ styles.PageFooter }>
        <Logo isLink />
        <div className={ styles.Footer__nav}>
            <PageNav />
        </div>
        <ul className={ styles.Footer__social }>
            <li className={ styles.Footer__social__item }>
                <a href="https://www.facebook.com/TheBluesIssue">
                    <Icon type="facebook" />
                </a>
            </li>
            <li className={ styles.Footer__social__item }>
                <a href="https://www.youtube.com/channel/UCoykz-cOM0CI1EuuwRlqVeQ">
                    <Icon type="youtube" />
                 </a>
            </li>
        </ul>
        <small className={ styles.Copyright }>Copyright {siteName} 2018</small>
    </footer>
)

export default Footer
