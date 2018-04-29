import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'

const IndexPage = () => (
  <div>

    <Hero />

      <div className="page-grid">
          <section>
              <h2>"Ten-Handed, Twelve-Barrelled, Hot Rockin’ Blues"</h2>
              <p>Blues on the Farm, Burnerfest, Chiddifest, Clitheroe Blues Rhythm & Rock, Dover Blues, Upton Blues, Whitby Blues, Swanage Blues festivals …6 times in a row! Support slots for Chicken Shack, Doctor Feelgood, 9 Below Zero and Kaz Hawkins… And a blazing appearance at the legendary 100 Club. They’re starting 2018 at the Great British Rock and Blues Festival in Skegness</p>
              <p>The Blues Issue - a South Coast 5 piece - an explosive fusion of twin guitars, hollerin’ harp, a supercharged rhythm section and some of the most emotive Blues vocals around. All channeled into a selection of original and re-imagined blues tunes.</p>
                <span>/assets/img/archive/DSC_1081.jpg alt="The Blues Issue on stage at Londons famous 100 Club"</span>
                <span>/assets/img/archive/DSC_2519.jpg alt="The Blues Issue on stage at Blues on the Farm festival"</span>
          </section>
          <aside>
              <div>
                  <h2 className="util-no-margin">Next Gig</h2>
                  <ul className="reset-list" id='gigs-list' data-limit="1">
                      <li>Loading...</li>
                  </ul>
                  <Link to="/gigs">View All</Link>
              </div>

              <div className="driver">
                  <h2>Want to buy our music?</h2>
                  <p>Buy CD's, downloads and much more</p>
                  <Link to="/discography">View All</Link>
              </div>

              <ul className="reset-list" id="quote-slider">
                  <li>
                      <blockquote>"They're great"</blockquote>
                      <span className="type--bold">Dave</span>
                  </li>
              </ul>
          </aside>
      </div>
  </div>
)

export default IndexPage
