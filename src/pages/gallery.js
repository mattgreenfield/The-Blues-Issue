import React from 'react'
import Link from 'gatsby-link'

import Wrapper from '../components/Wrapper'
import Gallery from '../components/Gallery'

const GalleryPage = ({ data }) => {
    const images = data.allFile.edges.filter(item => item.node.ext === '.jpg')
    const galleryItems = images.map(item => {
        return { url: item.node.publicURL }
    });

    return (
        <Wrapper size="large">
            <Gallery items= { galleryItems } />
        </Wrapper>
    )
}

export default GalleryPage

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          publicURL
          ext
        }
      }
    }
  }
`
