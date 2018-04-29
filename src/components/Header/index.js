import React from 'react'
import Link from 'gatsby-link'
import './styles.scss'

import Logo from '../../components/Logo'

const Header = ({removeLogo}) => (
  <div>
    <a href="#page-main">Skip to main content</a>
    <header className="page-header page-constraint page-constraint--large">
      { !removeLogo && <Logo isLink /> }
      <nav role="navigation" className="page-nav">
          <ul className="reset-list list--inline">
              <li>
                <Link to="/about" activeClassName="is-active">About</Link>
              </li>
              <li>
                <Link to="/gigs" activeClassName="is-active">Gigs</Link>
              </li>
              <li>
                <Link to="/gallery" activeClassName="is-active">Gallery</Link>
              </li>
              <li>
                <Link to="/discography" activeClassName="is-active">Music</Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="is-active">Contact</Link>
              </li>
          </ul>
      </nav>
    </header>
  </div>
)

export default Header
