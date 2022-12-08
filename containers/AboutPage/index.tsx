import React, { useState, useRef, useEffect } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { leaderMembers } from '../../ultils/aboutItem'
import Thumnail from '../../components/Thumnail'
import PlayIcon from '../../public/play-icon.svg'
import styles from './about.module.scss'

const AboutPage = () => {
  const [playVideo, setPlayVideo] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  const handleCloseVideo = (event: any) => {
    if (videoRef.current && !videoRef.current.contains(event.target)) {
      setPlayVideo(false)
    }
  }

  const handlePlayVideo = () => {
    setLoading(true)
    setPlayVideo(true)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseVideo)
    return () => { document.removeEventListener("mousedown", handleCloseVideo) }
  }, [videoRef])

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }, [playVideo, loading])

  return (
    <div className={styles.about}>
      <Thumnail
        background='/images/about-bg.jpeg'
        text='Our success and company history'
        height={500}
        classStyle={styles.thumnail} />
      <main className={styles.wrapper}>
        <section className={`${styles.introduce} flex justify-between items-center flex-col lg:flex-row`}>
          <div className={styles.video}>
            <img src="/images/about-videos.jpg" alt="about videos background" />
            <button className={styles.play_icon} onClick={handlePlayVideo}>
              <PlayIcon />
            </button>
          </div>
          <div className={styles.description}>
            <h3 className='montserrat'>Welcome to <br /> Moren Online Store</h3>
            <p className='text-lg mt-5'>
              Launched in 2022, the Moren commerce platform was built to provide users with an easy, safe and fast experience when shopping online through a strong payment support and operating system. We strongly believe that the online shopping experience should be simple, easy and emotionally pleasurable. This belief inspires and drives us every day at Moren.
            </p>
          </div>
        </section>
        <section className={styles.partners}>
          <h3 className={`${styles.heading} montserrat`}>Our Partners</h3>
          <Swiper
            className={styles.slides}
            slidesPerView={1}
            spaceBetween={25}
            lazy
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
            <SwiperSlide className={styles.slide}>
              <img src="/images/partners/1.png" alt="partner logo" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src="/images/partners/2.png" alt="partner logo" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src="/images/partners/3.png" alt="partner logo" />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img src="/images/partners/4.png" alt="partner logo" />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className={styles.company}>
          <h3 className={`${styles.heading} montserrat`}>Company Leadership</h3>
          <div className={styles.list}>
            {
              leaderMembers.map((member) =>
                <div className={`${styles.item} relative`} key={member.id}>
                  <img src={member.img} alt="leader avatar" />
                  <div className={styles.content}>
                    <h4 className='text-white uppercase text-4xl font-semibold montserrat'>{member.name}</h4>
                    <p className='text-white mt-5'>{member.rule}</p>
                  </div>
                </div>
              )
            }
          </div>
        </section>
        {
          playVideo &&
          <section className={`${styles.video_player} z-50 flex justify-center items-center`}>
            <div className={`${styles.loading} ${loading ? 'block' : 'hidden'}`}></div>
            <iframe src="https://www.youtube.com/embed/gQlMMD8auMs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ref={videoRef} style={{ display: `${loading ? 'none' : 'block'}` }}>
            </iframe>
          </section>
        }
      </main>
    </div>
  )
}

export default AboutPage
