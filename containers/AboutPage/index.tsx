import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Thumnail from '../../components/Thumnail'
import PlayIcon from '../../public/play-icon.svg'
import { leaderMembers } from '../../ultils/aboutItem'
import styles from './about.module.scss'

const AboutPage = () => {
  const [playVideo, setPlayVideo] = useState<boolean>(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  const handleCloseVideo = (event: any) => {
    if (videoRef.current && !videoRef.current.contains(event.target)) {
      setPlayVideo(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseVideo)
    return () => { document.removeEventListener("mousedown", handleCloseVideo) }
  }, [videoRef])

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
            <button className={styles.play_icon} onClick={() => setPlayVideo(true)}>
              <PlayIcon />
            </button>
          </div>
          <div className={styles.description}>
            <h3 className='montserrat'>Welcome to <br /> Moren Online Store</h3>
            <p className='text-lg mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque posuere mauris tincidunt orci, aliquet nam aliquet purus. Nulla in nullam eget at placerat egestas dignissim platea. Enim, euismod sed a integer tristique. Fringilla ultrices nunc, viverra interdum maecenas
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
            <iframe src="https://www.youtube.com/embed/gQlMMD8auMs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ref={videoRef}>
            </iframe>
          </section>
        }
      </main>
    </div>
  )
}

export default AboutPage