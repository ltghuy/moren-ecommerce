import React, { useState } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { handleShowCart } from '../../redux/cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import 
{ 
  faBarsStaggered, 
  faMagnifyingGlass, 
  faDolly,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart'
import styles from './navbar.module.scss'


interface NavbarProps {
  fixed?:boolean
}

const NavbarLink : React.FC<NavbarProps> = ({fixed}) => {
  const isShowCard = useSelector((state: any) => state.cart.showCart)
  const cartList = useSelector((state: any) => state.cart.cartList)
  const dispatch = useDispatch()

  const showCart = () => {
    dispatch(handleShowCart(true))
  }

  const getTotalProduct = () => {
    const total = cartList.reduce((acc: number, item: any) => { return acc + item.quantity}, 0)
    return total
  }

  return (
    <div className={`${styles.navbar} ${styles.link} ${fixed && styles.fixed} px-3 md:px-8 bg-white flex items-center justify-between z-40`}>
      <Link href='/'>
        <a className={styles.navbar__logo}>
          <img src='/logo-black.svg' alt="moren logo"/>
        </a>
      </Link>
      <div className='hidden lg:flex mr-5 xl:mr-0 text-sm lg:text-lg'>
        <Link href='/'>
          <a className='uppercase text-slate-800 hover:text-amber-600 mx-2 lg:mx-5 transition'>
            Home
          </a>
        </Link>
        <Link href='/shop'>
          <a className='uppercase text-slate-800 hover:text-amber-600 mx-2 lg:mx-5 transition'>
            Shop
          </a>
        </Link>
        <Link href='/about'>
          <a className='uppercase text-slate-800 hover:text-amber-600 mx-2 lg:mx-5 transition'>
            About Us
          </a>
        </Link>
        <Link href='/contact'>
          <a className='uppercase text-slate-800 hover:text-amber-600 mx-2 lg:mx-5 transition'>
            Contact
          </a>
        </Link>
      </div>
      <div className={`${styles.navbar__button} flex items-center justify-between`}>
        <div className='cursor-pointer'>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </div>
        <div className='cursor-pointer mx-3 xl:mx-6 hidden md:block'>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className='cursor-pointer relative px-3 md:px-0'
             onClick={showCart}>
          <FontAwesomeIcon icon={faDolly} className='text-black'/>
          <div className={`${styles.badge} absolute bg-amber-600`}>{getTotalProduct()}</div>
        </div>
      </div>
      {
        isShowCard && <Cart />
      }
    </div>
  )
}

export default NavbarLink