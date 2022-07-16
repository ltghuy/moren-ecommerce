import React from 'react'
import Link from 'next/link'
import styles from './producDetail.module.scss'

interface ProductProps {
  data: {
    id: number, 
    imageUrl: string, 
    name: string, 
    price: number
  }
}

const ProductDetailPage: React.FC<ProductProps> = ({data}) => {
  return (
    <div className={styles.product}>
      <div className={styles.breadcrumb}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a className='mx-3'>Uncategorized</a>
        </Link>
        <p>{data.name}</p>
      </div>
      <div className={styles.product__info}>
        <a href="/" className={styles.image}>
          <img src={data.imageUrl} alt="product image" />
        </a>
        <div className={styles.product__desc}>
          <h3 className={`${styles.name} font-semibold montserrat`}>{data.name}</h3>
          <p className={styles.price}>{`£${data.price}`}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage