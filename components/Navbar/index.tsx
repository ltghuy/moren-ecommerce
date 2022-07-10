import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 
{ 
  faBarsStaggered, 
  faMagnifyingGlass, 
  faDolly,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import styles from './navbar.module.scss'

interface NavbarProps {
  fixed?:boolean
}

const Navbar : React.FC<NavbarProps> = ({fixed}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <div className={`${styles.navbar} ${fixed && styles.fixed} my-container bg-transparent-500 flex items-center justify-between z-40`}>
      <div className={styles.navbar__menu} onClick={() => setShowMenu(true)}>
        <div className='cursor-pointer'>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
      </div>
      <Link href='/'>
        <a className={styles.navbar__logo}>
          {
            fixed ? 
            <img src='/logo-black.svg' alt="moren logo" /> : <img src='/logo-white.svg' alt="moren logo" />
          }
        </a>
      </Link>
      <div className={`${styles.navbar__controls} flex items-center justify-between`}>
        <div className='cursor-pointer hidden lg:block'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className='cursor-pointer mx-3 xl:mx-6'>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className='cursor-pointer relative pr-5 xl:pr-0'>
          <FontAwesomeIcon icon={faDolly} />
          <div className={`${styles.badge} absolute`}>2</div>
        </div>
      </div>
      {
        showMenu && 
        <div className={`${styles.navbar__modal} fixed inset-0 w-screen h-screen z-50 bg-overlay200`}>
          <Link href='/'>
            <a className={`${styles.link} text-4xl montserrat pb-10 transition`}>Home</a>
          </Link>
          <Link href='/shop'>
            <a className={`${styles.link} text-4xl montserrat pb-10 transition`}>Shop</a>
          </Link>
          <Link href='/about'>
            <a className={`${styles.link} text-4xl montserrat pb-10 transition`}>About Us</a>
          </Link>
          <Link href='/contact'>
            <a className={`${styles.link} text-4xl montserrat pb-10 transition`}>Contact</a>
          </Link>
          <div className={styles.close} onClick={() => setShowMenu(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar