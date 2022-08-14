import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faTrashCan, faCheck, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, increaseItem, decreaseItem } from '../../redux/cartSlice'
import DiscountLogo from '../../public/images/discount.svg'
import GiftLogo from '../../public/images/gift.svg'
import DeliveryLogo from '../../public/images/delivery.svg'
import Thumnail from '../../components/Thumnail'
import styles from './cartPage.module.scss'

interface CartItem {
  id: number,
  imageUrl: string,
  name: string,
  price: number,
  quantity: number
}

const CartPage = () => {
  const [shippingType, setShippingType] = useState<string>('default')
  const cartList = useSelector((state: any) => state.cart.cartList)
  const dispatch = useDispatch()
  let shippingFee = 50
  if (shippingType === 'local') {
    shippingFee = 0
  }
  const inscreaseProduct = (productId: number) => {
    dispatch(increaseItem(productId))
  }
  const decreaseItemProduct = (productId: number) => {
    dispatch(decreaseItem(productId))
  }
  const deleteProduct = (id: number) => {
    dispatch(deleteItem(id))
  }
  const getSubTotal = () => {
    const subTotal = cartList.reduce((acc: number, item: CartItem) => { return acc + (item.price * item.quantity) }, 0)
    return subTotal.toFixed(2)
  }
  const getTotalPrice = () => {
    const total = cartList.reduce((acc: number, item: CartItem) => { return acc + (item.price * item.quantity) }, shippingFee)
    return total.toFixed(2)
  }

  return (
    <main className={styles.cart}>
      <Thumnail background='/images/cart-bg.jpg' link='Cart' />
      <section className={`${styles.container} my-container`}>
        {
          cartList.length > 0 ?
            (
              <>
                <div className={styles.list}>
                  <table>
                    <thead>
                      <tr>
                        <th style={{ width: '5%', textAlign: 'center' }}>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>Product</th>
                        <th style={{ width: '15%' }} className={styles.mobileHidden}>Price</th>
                        <th style={{ width: '15%' }}>Quantity</th>
                        <th style={{ width: '15%' }} className={styles.mobileHidden}>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartList.map((product: CartItem) => (
                          <tr>
                            <td style={{ width: '5%', textAlign: 'center' }}>
                              <button
                                style={{ padding: '5px' }}
                                className='hover:text-amber-600'
                                onClick={() => deleteProduct(product.id)}>
                                <FontAwesomeIcon icon={faXmark} className={styles.mobileHidden} />
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                  className={`${styles.mobileShow} text-lg`}
                                  color='#354259' />
                              </button>
                            </td>
                            <td>
                              <img src={product.imageUrl} alt="product image" />
                            </td>
                            <td>
                              <Link href={`/product/${product.id}`}>
                                <a className='hover:text-amber-600'>{product.name}</a>
                              </Link>
                              <p className={styles.mobileShow}>Price: £{product.price}</p>
                              <strong className={styles.mobileShow}>
                                Subtotal: {`£${Math.round(product.price * product.quantity * 1000) / 1000}`}
                              </strong>
                            </td>
                            <td style={{ width: '15%' }} className={styles.mobileHidden}>{`£${product.price}`}</td>
                            <td style={{ width: '15%' }} className={styles.mb_float_right}>
                              <div className={styles.range}>
                                <button onClick={() => decreaseItemProduct(product.id)}>
                                  <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <p>{product.quantity}</p>
                                <button onClick={() => inscreaseProduct(product.id)}>
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                              </div>
                            </td>
                            <td style={{ width: '15%' }} className={styles.mobileHidden}>
                              {`£${Math.round(product.price * product.quantity * 1000) / 1000}`}
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={3}>
                          <input
                            className={`${styles.coupon} w-full outline-none text-xs`}
                            type="text"
                            placeholder='Coupon code...' />
                        </td>
                        <td>&nbsp;</td>
                        <td colSpan={2}>
                          <button className={styles.couponBtn}>
                            Apply coupon
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className={styles.mobileShow}>
                    <input
                      className={styles.coupon}
                      type="text"
                      placeholder='Coupon code...' />
                    <button className={styles.couponBtn}>
                      Apply coupon
                    </button>
                  </div>
                </div>
                <div className={styles.checkout}>
                  <div className={styles.summary}>
                    <h2 className={styles.heading}>Cart totals</h2>
                    <div className='flex justify-between pt-4 md:pt-8 text-xs md:text-sm'>
                      <strong>Subtotal</strong>
                      <strong>£{getSubTotal()}</strong>
                    </div>
                    <div className='pt-4 md:pt-8 text-xs md:text-sm'>
                      <strong>Shipping</strong>
                      <div className='flex pt-4'>
                        <input
                          type="radio"
                          name="default"
                          value="default"
                          onChange={() => setShippingType("default")}
                          checked={shippingType === "default"}
                        />
                        <label className='mx-3' htmlFor="default">Flat rate: <strong>£50.00</strong></label>
                        <input
                          type="radio"
                          name="local"
                          value="local"
                          onChange={() => setShippingType("local")}
                          checked={shippingType === "local"}
                        />
                        <label className='ml-3' htmlFor="local">Local pickup</label>
                      </div>
                      <p className='pt-4 md:pt-8 text-xs md:text-sm'>
                        Shipping options will be updated during checkout.
                      </p>
                      <div className='flex justify-between pt-4 md:pt-8 text-xs md:text-sm'>
                        <strong>Total</strong>
                        <strong>£{getTotalPrice()}</strong>
                      </div>
                    </div>
                  </div>
                  <Link href="/checkout">
                    <a className='flex justify-center items-center text-white bg-black hover:bg-[#c2a18a] transition'>
                      Process to checkout
                    </a>
                  </Link>
                </div>
              </>
            ) :
            <div className='w-full'>
              <div className={`${styles.message} w-full flex items-center text-sm`}>
                <FontAwesomeIcon icon={faCheck} color='#64AD9C' className='text-lg mr-4' />
                <p>Your cart is currently empty.</p>
              </div>
              <Link href="/shop">
                <a className={`${styles.backBtn} text-white bg-black hover:bg-[#c2a18a] transition`}>
                  Return to shop
                </a>
              </Link>
            </div>
        }
      </section>
      <section className={`${styles.trending} flex items-center justify-center`}>
        <div className={styles.overlay} />
        <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
          <h2 className='montserrat text-white uppercase'>Hot trend</h2>
          <Link href="/shop">
            <a className={styles.button}>Shop now</a>
          </Link>
        </div>
      </section>
      <section className={styles.program}>
        <div className='my-container flex flex-col md:flex-row justify-between'>
          <div className={styles.item}>
            <div className={styles.logo}>
              <DiscountLogo />
            </div>
            <div className={styles.content}>
              <h3 className='text-xl uppercase font-bold'>New discount</h3>
              <p>
                Lorem ipsum dolor sit amet, id pericula appe llantur eam, mea.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.logo}>
              <GiftLogo />
            </div>
            <div className={styles.content}>
              <h3 className='text-xl uppercase font-bold'>Gift vouchers</h3>
              <p>
                Lorem ipsum dolor sit amet, id pericula appe llantur eam, mea.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.logo}>
              <DeliveryLogo />
            </div>
            <div className={styles.content}>
              <h3 className='text-xl uppercase font-bold'>Free Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet, id pericula appe llantur eam, mea.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CartPage