import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import styles from './cartPage.module.scss'

const CartPage = () => {
  return (
    <main className={styles.cart}>
      <section className={styles.thumnail}>
        <img src="/images/cart-bg.jpg" alt="thumnail" />
        <div className={`${styles.content} flex justify-center items-center flex-col`}>
          <h1 className='montserrat font-semibold text-white'>Cart</h1>
          <div className='flex items-center'>
            <Link href="/">
              <a className={`${styles.link} text-white hover:text-amber-600`}>Home</a>
            </Link>
            <FontAwesomeIcon icon={faAngleRight} color='white' />
            <div className={`${styles.link} text-white`}>Cart</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CartPage