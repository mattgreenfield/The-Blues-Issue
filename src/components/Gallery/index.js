import React, { Component } from 'react'
import Link from 'gatsby-link'
import Lightbox from '../Lightbox'

import Grid from './Grid'
import Carousel from './Carousel'

import styles from './gallery.module.css'

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.openLightbox = index => {
      const sizes = this.props.items[index].sizes
      // const style = sizes.aspectRatio > 1 ? { width: '90vw' } : { height: '90vh' }
      this.setState({
        index,
        lightboxOpen: true,
        lightboxImageSizes: sizes,
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
    const { lightboxOpen, lightboxImageSizes } = this.state

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
        {lightboxOpen && <Lightbox handleClose={this.hideLightbox} sizes={lightboxImageSizes} />}
      </div>
    )
  }
}

export default Gallery
