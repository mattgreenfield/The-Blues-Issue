import React from 'react'
import Link from 'gatsby-link'

import './styles.scss'

import Logo from '../../components/Logo'

const Hero = () => (
    <div className="home-header">
        <div className="page-constraint page-constraint--large">
            <h1>
                <Logo />
            </h1>
        </div>
    </div>
)

export default Hero
