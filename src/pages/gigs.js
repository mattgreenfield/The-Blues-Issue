import React from 'react'
import Link from 'gatsby-link'

import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Table from '../components/Table'
import Button from '../components/Button'

const events = [{
    id: '123',
    date: '29 Sep',
	title: 'DUKE OF WELLINGTON, Shoreham-by-Sea',
	time: '9pm',
}, {
    id: '123',
    date: '13 Oct',
	title: 'The NEPTUNE HOVE, Hove',
	time: '9pm',
}, {
    id: '123',
    date: '14 Oct',
	title: 'WHITBY BLUES FESTIVAL, Whitby',
	time: '2pm',
}, {
    id: '123',
    date: '17 Nov',
	title: 'THE EGREMONT WORTHING, Worthing',
	time: '9pm',
}, {
    id: '123',
    date: '01 Dec',
	title: 'The Eagle Arundel 1st Dec, Arundel',
	time: '9am',
}, {
    id: '123',
    date: '21 Jan',
	title: 'Skegness Blues And Rock Festival, Skegness',
	time: '4pm',
}];

const GigsPage = () => {

    const headings = ['Date', 'Title', 'Time', 'More information'];
    const data = [];
    events.map(event => {
        data.push([
            event.date,
            event.title,
            event.time,
            <Button to={ `facebook.com/${event.id}` }>More Info</Button>
        ])
    });

    return (
        <Wrapper size="large">
            <Heading>Gigs</Heading>
            <Table headings={ headings } data={ data } />
            <span>For all gigs visit our <a href="https://www.facebook.com/pg/TheBluesIssue/events/">Facebook page</a></span>
        </Wrapper>
    )
}

export default GigsPage
