import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP} from '@fortawesome/free-brands-svg-icons'
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'
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
  const [quantity, setQuantity] = useState<number>(1)
  const updateQuantity = (num: number) => {
    if (num === -1 && quantity === 0) {
      setQuantity(0)
      return
    }
    setQuantity(quantity + num)
  }

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
        <div className={styles.desc}>
          <h3 className={`${styles.name} font-semibold montserrat`}>{data.name}</h3>
          <p className={styles.price}>{`£${data.price}`}</p>
          <div className={styles.line} />
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem magni illo culpa perferendis obcaecati, quas mollitia odit voluptatum delectus blanditiis placeat nulla! Voluptate, tempore officiis deserunt ullam mollitia velit rerum earum magnam dolores! Fuga dolorem atque totam praesentium, ipsam quia quod voluptate perspiciatis harum aut aliquam, dolore facilis ducimus?
          </p>
          <div className={styles.form}>
            <div className={styles.range}>
              <button onClick={() => updateQuantity(-1)}>-</button>
              <p>{ quantity }</p>
              <button onClick={() => updateQuantity(1)}>+</button>
            </div>
            <div className={styles.submit__btn}>Add to cart</div>
          </div>
          <div className={styles.controls}>
            <button>
              <FontAwesomeIcon icon={faHeart} />
              <span>Add to wishlist</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
              <span>Add to compare</span>
            </button>
          </div>
          <div className={styles.line} />
          <div className={styles.code}>
            <p>SKU: REF. LA-1705</p>
            <div className={styles.link}>
              Category: <Link href="/"><a>Uncategorized</a></Link>
            </div>
            <div className={styles.link}>
              Tag: <Link href="/"><a>Main 043</a></Link>
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.socials}>
            <Link  href="/">
              <a><FontAwesomeIcon icon={faFacebookF}/></a>
            </Link>
            <Link  href="/">
              <a><FontAwesomeIcon icon={faTwitter}/></a>
            </Link>
            <Link  href="/">
              <a><FontAwesomeIcon icon={faLinkedinIn}/></a>
            </Link>
            <Link  href="/">
              <a><FontAwesomeIcon icon={faPinterestP}/></a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage