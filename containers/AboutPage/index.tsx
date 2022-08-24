import React from 'react'
import Thumnail from '../../components/Thumnail'
import PlayIcon from '../../public/play-icon.svg'
import styles from './about.module.scss'

const AboutPage = () => {
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
            <button className={styles.play_icon}>
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
      </main>
    </div>
  )
}

export default AboutPage