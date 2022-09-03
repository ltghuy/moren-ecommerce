import React, { useState } from 'react'
import styles from './tabs.module.scss'

interface ProductProps {
  productName: string
}
const Tabs: React.FC<ProductProps> = ({ productName }) => {
  const [tab, setTab] = useState<string>('desc')

  const handleTab = (name: string) => {
    setTab(name)
  }

  const DescTab = () => {
    return (
      <div className='w-full flex xl:items-center flex-col xl:flex-row'>
        <img src="/images/shop-detail.jpg" alt="shop detail" />
        <div className='xl:max-w-lg w-full xl:w-2/3 flex-shrink-0 ml-0 xl:ml-16 mt-8 xl:mt-0'>
          <h3 className='montserrat font-semibold text-2xl'>Made with love</h3>
          <p className='pt-5'>
            MOREN presents the Spring-Summer 2022 Collection with an emphasis on refined tailoring and simplified silhouettes. The designs are exquisitely crafted on the House&apos;s signature garments - silk, taffeta, chiffon and double satin. The fashion house continuously demonstrates exceptional craftsmanship through sophisticated techniques such as draping, embroidery, and 3D origami-folded techniques. The collection evokes the feminine beauty of modern women &#45; poised, elegant, yet alluring.
          </p>
          <p className='pt-5'>
            Every individual represents a unique and distinct color in the picture of life. My color is different from your color and different from anyone else. However, our differences in harmony create an eternal beauty of this world.
          </p>
        </div>
      </div>
    )
  }

  const ReviewTab = () => {
    return (
      <div>
        <h3 className='montserrat text-xl h-12'>Review</h3>
        <div className={styles.line} />
        <p className='pt-5 md:pt-8'>There are no reviews yet.</p>
        <h3 className='text-base md:text-xl font-semibold pt-8 md:pt-14'>
          Be the first to review &quot;{productName}&quot;
        </h3>
        <p className='text-sm pt-4 italic text-slate-700 pb-4'>
          Your email address will not be published. Required fields are marked *
        </p>
        <div className={styles.line} />
        <div>
          <label htmlFor="review" className='block my-4'>Your review *</label>
          <textarea
            name="review"
            id="review"
            rows={6} />
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div>
            <label htmlFor="name" className='block my-4'>Name *</label>
            <input
              name="name"
              id="name"
              className='border border-[#ddd] focus:border-[#ba6000] outline-none p-3 md:p-6 w-full md:w-96'
            />
          </div>
          <div className='lg:ml-5'>
            <label htmlFor="email" className='block my-4'>Email *</label>
            <input
              type='email'
              name="email"
              id="email"
              className='border border-[#ddd] focus:border-[#ba6000] outline-none p-3 md:p-6 w-full md:w-96'
            />
          </div>
        </div>
        <div className='flex items-center mt-5'>
          <input type="checkbox" name="remember" id="remember" className='w-5 h-5' />
          <label htmlFor="remember" className='text-xs md:text-sm ml-4'>
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>
        <button className='bg-black hover:bg-[#c2a18a] text-white px-16 py-3 mt-5 transition'>
          Submit
        </button>
      </div>
    )
  }

  return (
    <div className={`${styles.tabs} px-0 xl:px-24`}>
      <div className={`${styles.tabs__option} pb-10 md:pb-14`}>
        <button className={tab === 'desc' ? styles.active : ''} onClick={() => handleTab('desc')}>
          Description
        </button>
        <button className={tab === 'review' ? styles.active : ''} onClick={() => handleTab('review')}>
          Review (0)
        </button>
      </div>
      {tab === 'desc' ? <DescTab /> : <ReviewTab />}
    </div>
  )
}

export default Tabs