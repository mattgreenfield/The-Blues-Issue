import React from 'react'
import Link from 'gatsby-link'

import Wrapper from '../components/Wrapper'

const ContactPage = () => (
    <Wrapper size="large">
        <div className="layout-side-col">
            <form className="form" action="https://formspree.io/gmattgreenfield@gmail.com" method="post">
                <ul className="reset-list">
                    <li>
                        <label className="label" htmlFor="contact-name">Your Name</label>
                        <input className="text-input" id="contact-name" type="text" name="name"/>
                    </li>
                    <li>
                        <label className="label" htmlFor="contact-email">Your Email</label>
                        <input className="text-input" id="contact-email" required type="email" name="_replyto"/>
                    </li>
                    <li>
                        <label className="label" htmlFor="contact-message">Your Message</label>
                        <textarea className="text-input" id="contact-message" required name="message" id="" cols="30" rows="10"></textarea>
                    </li>
                    <li>
                        <input className="button" type="submit" value="Send"/>
                    </li>
                </ul>

                <input type="hidden" name="_next" value="//{{site.url}}/thanks.html" />
                <input type="hidden" name="_subject" value="Message from Blues Issue Website" />
                <input type="hidden" name="_cc" value="thebluesissue@gmail.com" />
            </form>

            <aside>
                <div className="driver">
                    <h2>Looking for gigs?</h2>
                    <Link to="/gigs" className="button button--ghost">View Gigs</Link>
                </div>

                <div className="driver">
                    <h2>Want to buy our music?</h2>
                    <Link to="/discography" className="button button--ghost">View Music</Link>
                </div>
            </aside>

        </div>
    </Wrapper>
)

export default ContactPage
