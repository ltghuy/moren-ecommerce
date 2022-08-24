import React from 'react'
import Link from 'next/link'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './thumnail.module.scss'

interface ThumnailProps {
  background: string,
  link?: string,
  text?: string,
  height?: number,
  classStyle?: string
}
const Thumnail: React.FC<ThumnailProps> = ({ background, link, text, height, classStyle }) => {
  return (
    <section className={`${styles.thumnail} ${classStyle}`} style={{ height: `${height}px` }}>
      <img src={background} alt="thumnail" />
      <div className={`${styles.content} flex justify-center items-center flex-col`}>
        <h1 className='montserrat font-semibold text-white'>{link}</h1>
        {
          link &&
          <div className='flex items-center'>
            <Link href="/">
              <a className={`${styles.link} text-white hover:text-amber-600`}>Home</a>
            </Link>
            <FontAwesomeIcon icon={faAngleRight} color='white' />
            <div className={`${styles.link} text-white`}>{link}</div>
          </div>
        }
        {
          text &&
          <div className='flex items-center justify-center'>
            <h3 className='montserrat text-white text-4xl font-semibold'>{text}</h3>
          </div>
        }
      </div>
    </section>
  )
}

export default Thumnail