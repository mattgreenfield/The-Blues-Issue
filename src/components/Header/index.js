import React from 'react'
import Link from 'gatsby-link'
import './styles.scss'

const pageTitle = "Home";

const Header = () => (
  <div>
    <a href="#page-main">Skip to main content</a>
    <header className="page-header page-constraint page-constraint--large">
      { pageTitle === "Home" && (
          <div className="logo">
            <Link to="/">
                <img src="/assets/img/logo.jpg"  alt="The Blues Issue Logo" />
            </Link>
          </div>
      )}

      <nav role="navigation" className="page-nav">
          <ul className="reset-list list--inline">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/gigs">Gigs</Link>
              </li>
              <li>
                <Link to="/archive">Gallery</Link>
              </li>
              <li>
                <Link to="/discography">Music</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
          </ul>
      </nav>
    </header>
  </div>
)

export default Header
