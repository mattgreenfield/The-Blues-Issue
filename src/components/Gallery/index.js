import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Lightbox from '../Lightbox'

import Grid from './Grid'
import Carousel from './Carousel'

import styles from './gallery.module.css'

class Gallery extends Component {
  constructor(props) {
    super(props)

    console.log(this.props.items[this.state.index].sizes)
    this.openLightbox = index => {
      const sizes = this.props.items[index].sizes
      this.setState({
        index,
        lightboxOpen: true,
        lightboxContent: (
          <Img sizes={sizes} style={{ width: sizes.aspectRatio > 1 ? '90vw' : '50vw' }} />
        ),
      })
    }
    this.hideLightbox = () => {
      this.setState({
        index: 0,
        lightboxOpen: false,
      })
    }
  }

  state = {
    index: 0,
    lightboxOpen: false,
  }

  render() {
    const { items, style } = this.props
    const { lightboxOpen, lightboxContent } = this.state

    if (!items || items.length === 0) {
      return false
    }

    const gridProps = {
      items,
      onClick: index => {
        this.openLightbox(index)
      },
    }
    return (
      <div>
        {style === 'grid' ? <Grid {...gridProps} /> : <Carousel {...gridProps} />}
        {lightboxOpen && <Lightbox handleClose={this.hideLightbox}>{lightboxContent}</Lightbox>}
      </div>
    )
  }
}

export default Gallery
