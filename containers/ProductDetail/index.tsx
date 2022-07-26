import React, { useState } from 'react'
import Link from 'next/link'
import { GirlItemList } from '../../ultils/homeItems'
import { useDispatch } from 'react-redux'
import { addToCart, handleShowCart } from '../../redux/cartSlice'
import Tabs from '../../components/Tabs'
import Item from '../../components/Item'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP} from '@fortawesome/free-brands-svg-icons'
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper'
import 'swiper/css'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
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
  const mockDataRelated = GirlItemList.slice(0, 4)
  const dispatch = useDispatch()

  const updateQuantity = (num: number) => {
    if (num === -1 && quantity === 0) {
      setQuantity(0)
      return
    }
    setQuantity(quantity + num)
  }

  const handleAddToCart = (data: ProductProps['data'], quantity: number) => {
    console.log(data, quantity)
    dispatch(addToCart({data, quantity}))
    dispatch(handleShowCart(true))
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
        <div className={styles.image}>
          <InnerImageZoom 
          src={data.imageUrl} 
          zoomScale={0.85} 
          zoomType='hover'
          fullscreenOnMobile={true} />
        </div>
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
            <div className={styles.submit__btn} onClick={() => handleAddToCart(data, quantity)}>
              Add to cart
            </div>
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
              <a><FontAwesomeIcon icon={faFacebookF  as IconProp}/></a>
            </Link>
            <Link  href="/">
              <a><FontAwesomeIcon icon={faTwitter  as IconProp}/></a>
            </Link>
            <Link  href="/">
              <a><FontAwesomeIcon icon={faLinkedinIn  as IconProp}/></a>
            </Link>
            <Link  href="/">
              <a><FontAwesomeIcon icon={faPinterestP  as IconProp}/></a>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.line} hidden md:block`} />
      <Tabs productName={data.name}/>
      <div className={`${styles.line} hidden md:block`} />
      <div className={`${styles.product__related}`}>
        <h3 className='montserrat text-2xl font-semibold'>Related Products</h3>
        <Swiper
            modules={[Autoplay]}
            className={styles.product__related__list}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={50}
            breakpoints={{
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              },
              1280: {
                slidesPerView: 4
              },
            }}
          >
            {
              mockDataRelated.map((item) =>
                <SwiperSlide key={item.id}>
                  <Item data={item} showText={false} />
                </SwiperSlide>
              )
            }
        </Swiper>
      </div>  
    </div>
  )
}

export default ProductDetailPage