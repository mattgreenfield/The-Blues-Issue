import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import Wrapper from '../components/Wrapper';
import Heading from '../components/Heading';
import Media from '../components/Media';

import { resetList } from '../styles/utility.css';

const DiscogPage = ({ data }) => {
  const albums = [
    {
      title: 'Bad Day for the Blues',
      year: '2012',
      description: 'The bands first album',
      image: data.badDay,
    },
    {
      title: 'Late Edition',
      year: '2016',
      image: data.lateEdition,
    },
    {
      title: '99 Troubles',
      year: '2018',
      description: 'Coming Soon',
      image: data.troubles,
    },
  ];

  return (
    <Wrapper>
      <Heading>Music</Heading>
      <ul className="reset-list">
        {albums.map(album => (
          <li key={album.title}>
            <Media
              image={
                <Img resolutions={album.image.resolutions} alt={`${album.title} album artwork`} />
              }
            >
              <h2>{album.title}</h2>
              <div>{album.year}</div>
              {album.description && <div>{album.description}</div>}
            </Media>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default DiscogPage;

export const query = graphql`
  query DiscogImageQuery {
    lateEdition: imageSharp(id: { regex: "/late-edition.jpg/" }) {
      resolutions(width: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    troubles: imageSharp(id: { regex: "/late-edition.jpg/" }) {
      resolutions(width: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    badDay: imageSharp(id: { regex: "/bad-day-for-the-blues.jpg/" }) {
      resolutions(width: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
