import React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

import Hero from '../components/Hero';
import Heading from '../components/Heading';
import Driver from '../components/Driver';
import Grid from '../components/Grid';

const IndexPage = ({ data }) => (
  <div>
    <Hero image={data.headerImage} />
    <div className="layout-side-col">
      <section>
        <Heading level="2">"Ten-Handed, Twelve-Barrelled, Hot Rockin’ Blues"</Heading>
        <p>
          Blues on the Farm, Burnerfest, Chiddifest, Clitheroe Blues Rhythm & Rock, Dover Blues,
          Upton Blues, Whitby Blues, Swanage Blues festivals …6 times in a row! Support slots for
          Chicken Shack, Doctor Feelgood, 9 Below Zero and Kaz Hawkins… And a blazing appearance at
          the legendary 100 Club. They’re starting 2018 at the Great British Rock and Blues Festival
          in Skegness
        </p>
        <p>
          The Blues Issue - a South Coast 5 piece - an explosive fusion of twin guitars, hollerin’
          harp, a supercharged rhythm section and some of the most emotive Blues vocals around. All
          channeled into a selection of original and re-imagined blues tunes.
        </p>
        <Grid columns="2">
          <Image
            resolutions={data.image1.sizes}
            alt="The Blues Issue on stage at Londons famous 100 Club"
            style={{ width: '100%', paddingBottom: '75%' }}
          />
          <Image
            resolutions={data.image2.sizes}
            alt="The Blues Issue on stage at Blues on the Farm festival"
            style={{ width: '100%', paddingBottom: '75%' }}
          />
        </Grid>
      </section>
      <aside>
        <Driver heading="Playing Live" linkTo="/gigs" linkText="View Gigs">
          <p>The Blues Issue, playing a venue near you</p>
        </Driver>
        <Driver heading="Want to buy our music?" linkTo="/discography" linkText="View Music">
          <p>Buy CD's, downloads and much more</p>
        </Driver>
        {/* <ul className="reset-list" id="quote-slider">
                    <li>
                    <blockquote>"They're great"</blockquote>
                    <span className="type--bold">Dave</span>
                    </li>
                    </ul> */}
      </aside>
    </div>
  </div>
);

export default IndexPage;

export const query = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "hero/home.jpg/" }) {
      sizes(maxWidth: 1450) {
        ...GatsbyImageSharpSizes
      }
    }
    image1: imageSharp(id: { regex: "/DSC_1081.jpg/" }) {
      sizes(maxWidth: 350) {
        ...GatsbyImageSharpSizes
      }
    }
    image2: imageSharp(id: { regex: "/DSC_2519.jpg/" }) {
      sizes(maxWidth: 350) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
