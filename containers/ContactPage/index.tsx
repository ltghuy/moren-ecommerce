import React, { useState } from 'react'
import Link from 'next/link'
import Thumnail from '../../components/Thumnail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styles from './contact.module.scss'

const ContactPage = () => {
  const [textArea, setTextArea] = useState<string>('')
  return (
    <main className={styles.contact}>
      <Thumnail background='/images/contact-bg.jpg' link='Contact' />
      <section className={`${styles.container} my-container`}>
        <div className={styles.form}>
          <h3 className={`${styles.heading} montserrat`}>Contact us for any questions</h3>
          <form>
            <input type="text" placeholder='Name*' />
            <input type="email" placeholder='Email*' />
            <input type="tel" placeholder='Phone Number' />
            <textarea
              placeholder='How can we help?'
              rows={4} value={textArea}
              onChange={(e: any) => setTextArea(e.target.value)}></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>
        <div className={styles.address}>
          <h3 className={`${styles.heading} montserrat`}>Get info</h3>
          <div className={styles.store}>
            <div className={styles.name}>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              Moren Store 1
            </div>
            <p>PO Box 16122 Collins Street West Victoria 8007 Australia</p>
          </div>
          <div className={styles.store}>
            <div className={styles.name}>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              Moren Store 2
            </div>
            <p>8134 Budd Rd Terre Haute, In 3548</p>
          </div>
          <hr />
          <div className='flex mb-3'>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <a href="info@moren.com">info@moren.com</a>
          </div>
          <div className='flex mb-3'>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <a href="tel:+844040000">+84 404-0000</a>
          </div>
          <div className={styles.social}>
            <Link href='/'>
              <a className='text-xl leading-6 my-1 inline opacity-60 hover:opacity-100 mr-4 lg:mr-8'>
                <FontAwesomeIcon icon={faFacebookF as IconProp} />
              </a>
            </Link>
            <Link href='/'>
              <a className='text-xl leading-6 my-1 inline opacity-60 hover:opacity-100 mr-4 lg:mr-8'>
                <FontAwesomeIcon icon={faPinterestP as IconProp} />
              </a>
            </Link>
            <Link href='/'>
              <a className='text-xl leading-6 my-1 inline opacity-60 hover:opacity-100 mr-4 lg:mr-8'>
                <FontAwesomeIcon icon={faTwitter as IconProp} />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.maps}>
        <iframe src="https://my.atlistmaps.com/map/b0ce9d93-2a55-496d-bbb9-f8c55e493f1e?share=true" allow="geolocation" frameBorder="0" scrolling="no" allowFullScreen></iframe>
      </section>
    </main>
  )
}

export default ContactPage