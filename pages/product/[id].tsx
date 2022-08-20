import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Layout from '../../containers/Layout'
import ProductDetailPage from '../../containers/ProductDetail'

interface ProductProps {
  id: number, 
  imageUrl: string, 
  name: string, 
  price: number
}

const ProductDetail = () => {
  const router = useRouter()
  const productList: ProductProps[] = useSelector((state:any) => state.cart.productList)
  const [product, setProduct] = useState<ProductProps>(productList[0])

  useEffect(() => {
    if (router.isReady && productList) {
      const index = productList.findIndex((item) => item.id === Number(router.query.id))
      setProduct(productList[index])
    }
  })

  return (
    <Layout 
      title={'Product Detail | '}
      content={<ProductDetailPage data={product} />}
    />
  )
}

export default ProductDetail