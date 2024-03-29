import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { GirlItemList, BoyItemList } from '../../ultils/homeItems'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import Item from '../../components/Item'
import styles from './Home.module.scss'

const HomePage = () => {
  return (
    <main className={styles.home}>
      <section className={`${styles.carousel} flex justify-center`}>
        <div className='absolute inset-0 bg-overlay'></div>
        <Swiper
          modules={[Autoplay, Pagination]}
          className={styles.carousel__sliders}
          autoplay={{ delay: 1500 }}
          loop
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <a href="/shop" className='absolute z-10 my-container'>
              <img src="/images/bg.jpg" alt="carousel" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/shop" className='absolute z-10 my-container'>
              <img src="/images/carousel1.png" alt="carousel2" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/shop" className='absolute z-10 my-container'>
              <img src="/images/carousel2.png" alt="carousel3" />
            </a>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={`${styles.collection} text-center flex flex-col items-center`}>
        <div className={styles.line}></div>
        <h3 className='uppercase mt-9 mb-3 montserrat'>New collection</h3>
        <h1 className='montserrat text-2xl xl:text-4xl'>SPRING-SUMMER 2022</h1>
        <p className='text-sm lg:text-base'>
          Inspired by the dreamy picture of early morning dews in the back garden, MOREN Spring Summer 2022 depicts the beauty of women who bring the touch of absolute elegance and curiosity with the eccentric experiences. For them, fashion constantly evolves and changes over time.
        </p>
      </section>
      <section className={`${styles.banner} flex justify-between w-full relative`}>
        <div className={styles.col1}>
          <a href="/shop" className={`${styles.banner__link} group relative`}>
            <img src="/images/col1.jpg" alt="col-1" />
            <div className='absolute inset-0 bg-overlay hidden justify-center items-center text-2xl montserrat group-hover:flex'>
              <span className='text-white mr-3'>VIEW ALL</span>
              <span>
                <FontAwesomeIcon icon={faArrowRightLong} color='white' />
              </span>
            </div>
          </a>
        </div>
        <div className={`${styles.col2} flex flex-col`}>
          <a href="/shop" className={`${styles.banner__link} group relative`}>
            <img src="/images/col2.jpg" alt="col-2" />
            <div className='absolute inset-0 bg-overlay hidden justify-center items-center text-2xl montserrat group-hover:flex'>
              <span className='text-white mr-3'>VIEW ALL</span>
              <span>
                <FontAwesomeIcon icon={faArrowRightLong} color='white' />
              </span>
            </div>
          </a>
          <a href="/shop"
            className={`${styles.banner__link} group relative`}
            style={{ marginTop: '3rem' }}>
            <img src="/images/col3.jpg" alt="col-3" />
            <div className='absolute inset-0 bg-overlay hidden justify-center items-center text-2xl montserrat group-hover:flex'>
              <span className='text-white mr-3'>VIEW ALL</span>
              <span>
                <FontAwesomeIcon icon={faArrowRightLong} color='white' />
              </span>
            </div>
          </a>
        </div>
        <div className='absolute top-[10%] right-0 w-4/5 h-3/4 bg-[#AFE1D557] -z-10'></div>
      </section>
      <section className={`${styles.girl}`}>
        <div className={styles.thumnail}>
          <h1 className='font-lobster text-white uppercase'>For girl</h1>
        </div>
        <div className={`${styles.list} my-container`}>
          {
            GirlItemList.map((item) =>
              <Item
                data={item}
                key={item.id}
              />
            )
          }
        </div>
        <div className={`${styles.viewBtn} w-full`}>
          <Link href="/shop">
            <a className='montserrat border border-black hover:text-white hover:bg-primary hover:border-primary'>
              VIEW ALL
            </a>
          </Link>
        </div>
      </section>
      <section className={`${styles.boy}`}>
        <div className={styles.thumnail}>
          <h1 className='font-lobster text-white uppercase text-2xl lg:text-7xl'>For boy</h1>
        </div>
        <div className={`${styles.list} my-container`}>
          {
            BoyItemList.map((item) =>
              <Item
                data={item}
                key={item.id}
              />
            )
          }
        </div>
        <div className={`${styles.viewBtn} w-full`}>
          <Link href="/shop">
            <a className='montserrat border border-black hover:text-white hover:bg-primary hover:border-primary'>
              VIEW ALL
            </a>
          </Link>
        </div>
      </section>
      <section className={`${styles.subscribe} my-container`}>
        <h1 className={`${styles.title} font-semibold montserrat`}>NEWSLETTERS</h1>
        <p className={`${styles.para} text-base lg:text-xl pt-5`}>
          Subscribe our newsletter to get notify about discount and latest update. Don’t worry, we not spam!
        </p>
        <div className={`${styles.form} flex justify-between mx-auto`}>
          <input
            type="text"
            placeholder='Enter your email here'
            className='h-full flex-1 pr-4 text-md lg:text-xl' />
          <button className='h-full'>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
      </section>
    </main>
  )
}

export default HomePage
