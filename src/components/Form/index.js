import React from 'react';
import Button from '../Button';

import styles from './Form.module.css';

const Form = () => (
  <form className={styles.Form} name="contact" netlify>
    <ul className={styles.Form__list}>
      <li>
        <label className={styles.Label} htmlFor="contact-name">
            Your Name
        </label>
        <input className="text-input" id="contact-name" type="text" name="name" />
      </li>
      <li>
        <label className={styles.Label} htmlFor="contact-email">
            Your Email
        </label>
        <input className="text-input" id="contact-email" required type="email" name="_replyto" />
      </li>
      <li>
        <label className={styles.Label} htmlFor="contact-message">
            Your Message
        </label>
        <textarea
          className="text-input"
          id="contact-message"
          required
          name="message"
          id=""
          cols="30"
          rows="10"
        />
      </li>
      <li>
        <Button type="submit">Send</Button>
      </li>
    </ul>

    <input type="hidden" name="_subject" value="Message from Blues Issue Website" />
    <input type="hidden" name="_cc" value="thebluesissue@gmail.com" />
  </form>
);

export default Form;
