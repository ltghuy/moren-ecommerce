import React from 'react'
import Layout from '../components/Layout'
import ShopPage from '../containers/ShopPage'

const Shop = () => {
  return (
    <div>
      <Layout 
      title={'Moren Ecommerce | Shop'}
      content={<ShopPage />}
    />
    </div>
  )
}

export default Shop