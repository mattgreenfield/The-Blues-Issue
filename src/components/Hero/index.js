import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

import Wrapper from '../../components/Wrapper'
import Logo from '../../components/Logo'

import styles from './Hero.module.css'

const Hero = ({image}) => {

    return (
        <div className={ styles.Hero }>
            <Img sizes={ image.sizes } className={ styles.HeroImage } />
            <Wrapper>
                <h1 className={ styles.Hero__Logo }>
                    <Logo />
                </h1>
            </Wrapper>
        </div>
    )
}

export default Hero
