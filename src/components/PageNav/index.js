import React from 'react'
import Link from 'gatsby-link'

import styles from './PageNav.module.css'

const PageNav = () => (
      <nav role="navigation" className={ styles.PageNav }>
          <ul className={ styles.PageNav__list }>
              <li className={ styles.PageNav__item }>
                <Link to="/about" className={ styles.PageNav__item__link } activeClassName="is-active">About</Link>
              </li>
              <li className={ styles.PageNav__item }>
                <Link to="/gigs" className={ styles.PageNav__item__link } activeClassName="is-active">Gigs</Link>
              </li>
              <li className={ styles.PageNav__item }>
                <Link to="/gallery" className={ styles.PageNav__item__link } activeClassName="is-active">Gallery</Link>
              </li>
              <li className={ styles.PageNav__item }>
                <Link to="/discography" className={ styles.PageNav__item__link } activeClassName="is-active">Music</Link>
              </li>
              <li className={ styles.PageNav__item }>
                <Link to="/contact" className={ styles.PageNav__item__link } activeClassName="is-active">Contact</Link>
              </li>
          </ul>
      </nav>
)

export default PageNav
