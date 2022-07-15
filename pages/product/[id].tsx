import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const ProductDetail = () => {
  const router = useRouter()
  const productID = router.query.id
  return (
    <Layout 
      title={'' + productID}
      content={
        <div className='min-h-screen pt-[120px]'>Product : {productID }</div>
      }
    />
  )
}

export default ProductDetail