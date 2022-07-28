import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../../redux/cartSlice'
import styles from './cartPage.module.scss'

interface CartItem {
  id: number, 
  imageUrl: string, 
  name: string, 
  price: number,
  quantity: number
}

const CartPage = () => {
  const cartList = useSelector((state: any) => state.cart.cartList)
  const dispath = useDispatch()

  const deleteProduct = (id: number) => {
    dispath(deleteItem(id))
  }

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
      <section className={`${styles.container} my-container`}>
        { 
          cartList.length > 0 ?
          (
            <>
              <div className={styles.list}>
                <table>
                  <thead>
                    <tr>
                      <th style={{width: '5%', textAlign: 'center'}}>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Product</th>
                      <th style={{width: '15%'}} className={styles.mobileHidden}>Price</th>
                      <th style={{width: '15%'}}>Quantity</th>
                      <th style={{width: '15%'}} className={styles.mobileHidden}>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartList.map((product: CartItem) => (
                        <tr>
                          <td style={{width: '5%', textAlign: 'center'}}>
                            <button
                            style={{padding: '5px'}}
                            className='hover:text-amber-600'
                            onClick={() => deleteProduct(product.id)}>
                              <FontAwesomeIcon icon={faXmark} className={styles.mobileHidden}/>
                              <FontAwesomeIcon 
                              icon={faTrashCan} 
                              className={`${styles.mobileShow} text-lg`} 
                              color='#354259'/>
                            </button>
                          </td>
                          <td>
                            <img src={ product.imageUrl } alt="product image" />
                          </td>
                          <td>
                            <Link href={`/product/${ product.id }`}>
                              <a className='hover:text-amber-600'>{ product.name }</a>
                            </Link>
                            <p className={styles.mobileShow}>Price: £{ product.price }</p>
                            <strong className={styles.mobileShow}>
                              Subtotal: £{ product.price * product.quantity }
                            </strong>
                          </td>
                          <td style={{width: '15%'}} className={styles.mobileHidden}>{`£${ product.price }`}</td>
                          <td style={{width: '15%'}}>{ product.quantity }</td>
                          <td style={{width: '15%'}} className={styles.mobileHidden}>
                            {`£${ product.price * product.quantity }`}
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
              <div className={styles.checkout}></div>
            </>
          ) :
          <p>EMPTY CART</p>
        }
      </section>
    </main>
  )
}

export default CartPage