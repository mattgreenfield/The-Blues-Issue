import React from 'react';
import Link from 'gatsby-link';

import Wrapper from '../components/Wrapper';
import Heading from '../components/Heading';
import Table from '../components/Table';
import Button from '../components/Button';
import Date from '../components/Date';

const events = [
  {
    id: 1,
    date: { month: 'MAY', day: '18' },
    time: '9pm',
    title: 'The Egremont, Worthing',
  },
  {
    id: 2,
    date: { month: 'MAY', day: '25' },
    time: '9pm',
    title: 'The Neptune, Hove',
  },
  {
    id: 3,
    date: { month: 'JUL', day: '21' },
    time: '9pm',
    title: 'Upton Blues Festival, Upton upon Severn',
  },
  {
    id: 4,
    date: { month: 'AUG', day: '18' },
    time: '9pm',
    title: 'Duke Of Wellington, Shoreham-by-Sea',
  },
];

const GigsPage = () => {
  const headings = ['Date', 'Title', 'Time', 'More information'];
  const data = [];
  events.map((event) => {
    data.push([
      <Date month={event.date.month} day={event.date.day} />,
      event.title,
      event.time,
      <Button to={`facebook.com/${event.id}`}>More Info</Button>,
    ]);
  });

  return (
    <Wrapper>
      <Heading>Gigs</Heading>
      <Table headings={headings} data={data} />
      <span>
        For all gigs visit our{' '}
        <a href="https://www.facebook.com/pg/TheBluesIssue/events/">Facebook page</a>
      </span>
    </Wrapper>
  );
};

export default GigsPage;
