import React from 'react'
import Link from 'gatsby-link'

import Wrapper from '../components/Wrapper'
import Gallery from '../components/Gallery'
import Heading from '../components/Heading'

const GalleryPage = ({ data }) => {
    const images = data.allFile.edges.filter(item => item.node.ext === '.jpg')
    const galleryItems = images.map(item => {
        return { sizes: item.node.childImageSharp.sizes }
    });

    return (
        <Wrapper size="large">
            <Heading>Gallery</Heading>
            <Gallery items={ galleryItems } style="grid" />
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
          childImageSharp {
            sizes(maxWidth: 475) {
                ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
