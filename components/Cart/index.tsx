import React from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTruck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { handleShowCart } from '../../redux/cartSlice'
import CartItem from '../CartItem'
import styles from './cart.module.scss'
interface CartItem {
  id: number, 
  imageUrl: string, 
  name: string, 
  price: number,
  quantity: number
}
const Cart = () => {
  const cartList = useSelector((state: any) => state.cart.cartList)
  const dispatch = useDispatch()
  const router = useRouter()

  const closeCart = () => {
    dispatch(handleShowCart(false))
  }

  const handleClick = (path: string) => {
    dispatch(handleShowCart(false))
    router.push(path)
  }

  const getTotalPrice = () => {
    const total = cartList.reduce((acc: number, item: CartItem) => { return acc + (item.price * item.quantity)}, 0)
    return total.toFixed(2);
  }

  return (
    <div className={styles.cart}>
      <div className='flex-1 bg-overlay h-full' onClick={closeCart} />
      <div className={`${styles.cart__inner} bg-white`}>
        <button 
          className={`${styles.cart__close} absolute hover:text-primary`}
          onClick={closeCart}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h3 className='pt-5 lg:pt-10 font-semibold text-lg lg:text-xl mb-5 lg:mb-10'>
          Shopping Cart
        </h3>
        {
          cartList.length > 0 
          ? 
            <div className='relative h-full'>
              <div className={`${styles.cart__list} overflow-y-scroll`}>
                {
                  cartList.map((item: CartItem) =>
                    <CartItem data={item} key={item.id} />
                  )
                }
              </div>
              <div className='absolute right-0 left-0 bottom-24 bg-white'>
                <div className='flex justify-between font-semibold mt-5'>
                  <p>Subtotal: </p>
                  <p>£ {getTotalPrice()}</p>
                </div>
                <div className='w-full h-8 leading-8 bg-teal-600 text-white my-4 pl-2 text-sm'>
                  <FontAwesomeIcon icon={faTruck} className='mr-2'/>
                  Congratulations! You&apos;ve got free
                </div>
                <button 
                className='w-full h-10 lg:h-14 flex justify-center items-center bg-black hover:bg-primary text-white text-sm transition mb-3'
                onClick={() => handleClick('/cart')}>
                  View cart
                </button>
                <button 
                className='w-full h-10 lg:h-14 flex justify-center items-center bg-black hover:bg-primary text-white text-sm transition'
                onClick={() => handleClick('/checkout')}>
                  Checkout
                </button>
              </div>
            </div>
          : 
          <div>
            <p>No products in the cart.</p>
            <img className='mt-20' src="/images/empty.gif" alt="empty cart" />
          </div>
        }
      </div>
    </div>
  )
}

export default Cart