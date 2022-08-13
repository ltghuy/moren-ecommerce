import React from 'react'
import Link from 'next/link'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './thumnail.module.scss'

interface ThumnailProps {
  background: string,
  link: string,
}
const Thumnail: React.FC<ThumnailProps> = ({background, link}) => {
  return (
    <section className={styles.thumnail}>
      <img src={background} alt="thumnail" />
      <div className={`${styles.content} flex justify-center items-center flex-col`}>
        <h1 className='montserrat font-semibold text-white'>{ link }</h1>
        <div className='flex items-center'>
          <Link href="/">
            <a className={`${styles.link} text-white hover:text-amber-600`}>Home</a>
          </Link>
          <FontAwesomeIcon icon={faAngleRight} color='white' />
          <div className={`${styles.link} text-white`}>{ link }</div>
        </div>
      </div>
    </section>
  )
}

export default Thumnail