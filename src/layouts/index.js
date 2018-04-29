import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.scss'

const TemplateWrapper = ({ children, location, data }) => {
    const siteName = data.site.siteMetadata.title
    
    return (
        <div>
            <Helmet
                title={ siteName }
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}
                />
            <Header removeLogo={ location.pathname === '/' }/>
            {children()}
            <Footer siteName={ siteName } />
        </div>
    )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
