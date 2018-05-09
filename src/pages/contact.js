import React from 'react'
import Link from 'gatsby-link'

import Wrapper from '../components/Wrapper'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Form from '../components/Form'
import Driver from '../components/Driver'

const ContactPage = () => (
    <Wrapper size="large">
        <Heading>Contact</Heading>
        <div className="layout-side-col">
            <Form />
            <aside>
                <Driver heading="Looking for gigs?" linkTo="/gigs" linkText="View Gigs" />
                <Driver heading="Want to buy our music?" linkTo="/discography" linkText="View Music" />
            </aside>
        </div>
    </Wrapper>
)

export default ContactPage
