import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { handleShowCart } from '../../redux/cartSlice'
import styles from './cart.module.scss'

const Cart = () => {
  const cartList = useSelector((state: any) => state.cart.cartList)
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(handleShowCart(false))
  }
  return (
    <div className={`${styles.cart} bg-overlay fixed inset-0`}>
      <div className={`${styles.cart__inner} absolute bg-white top-0 right-0`}>
        <button 
          className='absolute  top-[50px] right-[50px] w-9 h-9 text-4xl hover:text-primary'
          onClick={closeCart}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h3 className='pt-10 font-semibold text-xl mb-10'>Shopping Cart</h3>
        {
          cartList.length > 0 ? 
          <p>{cartList.length }</p>
          : <p>No products in the cart.</p>
        }
      </div>
    </div>
  )
}

export default Cart