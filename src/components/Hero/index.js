import React from 'react'
import Link from 'gatsby-link'
import Wrapper from '../../components/Wrapper'
import Logo from '../../components/Logo'

import styles from './Hero.module.css'
import { blue } from '../../styles/variables.css';
console.log(blue);


const Hero = () => (
    <div className={ styles.Hero }>
        <Wrapper>
            <h1 className={ styles.Hero__Logo }>
                <Logo />
            </h1>
        </Wrapper>
    </div>
)

export default Hero
