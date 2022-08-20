import React from 'react'
import Layout from '../containers/Layout'
import CartPage from '../containers/CartPage'

const Cart = () => {
  return (
    <div>
      <Layout 
      title={'Moren Ecommerce | Cart'}
      content={<CartPage />}
    />
    </div>
  )
}

export default Cart