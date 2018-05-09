import React from 'react'
import Link from 'gatsby-link'

import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Media from '../components/Media'

import { resetList } from "../styles/utility.css"

const DiscogPage = () => {

    const albums = [
        {
            title: "Bad Day for the Blues",
            year: "2012",
            description: "The bands first album",
        },
        {
            title: "Late Edition",
            year: "2016",
        },
        {
            title: "99 Troubles",
            year: "2018",
            description: "Coming Soon",
        }
    ];
    return (
        <Wrapper>
            <Heading>Music</Heading>
            <ul className="reset-list">
                { albums.map(album => (
                    <li>
                        <Media image={ <img alt={ `${ album.title } album artwork` } /> }>
                            <h2>{ album.title }</h2>
                            <div>{ album.year }</div>
                            { album.description && (
                                <div>{ album.description }</div>
                            )}
                        </Media>
                    </li>
                )) }
            </ul>
        </Wrapper>
    )
}

export default DiscogPage
