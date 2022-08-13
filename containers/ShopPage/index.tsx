import React, { useState } from 'react'
import Link from 'next/link'
import Thumnail from '../../components/Thumnail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCheck } from '@fortawesome/free-solid-svg-icons'
import { SideBarCategory, SideBarColors } from '../../ultils/sidebarDropdown'
import Dropdown from '../../components/Dropdown'
import styles from './shop.module.scss'

const ShopPage = () => {
  const [sizeQuery, setSizeQuery] = useState<string[]>([])
  const [brandQuery, setBrandQuery] = useState<string[]>([])

  const handleSizeChange = (e: any) => {
    const { value, checked } = e.target
    if (checked) {
      setSizeQuery([...sizeQuery, value])
    }
    else {
      setSizeQuery(sizeQuery.filter((e: any) => e !== value))
    }
  }

  const handleBrandChange = (e: any) => {
    const { value, checked } = e.target
    if (checked) {
      setBrandQuery([...brandQuery, value])
    }
    else {
      setBrandQuery(brandQuery.filter((e: any) => e !== value))
    }
  }

  return (
    <div className={styles.shop}>
      <Thumnail background='/images/shop-bg.jpg' link='Shop' />
      <main className={`${styles.wrapper}`}>
        <section className={styles.sidebar}>
          <div className={styles.search_box}>
            <input type="text" placeholder='Search entire store...' autoComplete='off' />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className={styles.category}>
            <h3 className={`${styles.heading} text-xl leading-6 montserrat font-semibold`}>Category</h3>
            <div className={styles.list}>
              {
                SideBarCategory.map((dropdown) =>
                  <Dropdown label={dropdown.label} items={dropdown.children} key={dropdown.id} />
                )
              }
            </div>
          </div>
          <div className={styles.colors}>
            <h3 className={`${styles.heading} text-xl leading-6 montserrat font-semibold`}>By Color</h3>
            <div className='flex'>
              {
                SideBarColors.map((color) =>
                  <Link href={color.link}>
                    <a key={color.id} className={styles.color} style={{ backgroundColor: `${color.color}` }}>
                      <FontAwesomeIcon icon={faCheck} color='white' />
                    </a>
                  </Link>
                )}
            </div>
          </div>
          <div className={styles.sizes}>
            <h3 className={`${styles.heading} text-xl leading-6 montserrat font-semibold`}>By Size</h3>
            <div className={styles.options}>
              <div className='flex items-center mb-3'>
                <input type="checkbox" name="size" id="size-s" value="Small" onChange={handleSizeChange} />
                <label htmlFor="size-s" className='ml-3 text-sm cursor-pointer'>Small</label>
              </div>
              <div className='flex items-center mb-3'>
                <input type="checkbox" name="size" id="size-m" value="Medium" onChange={handleSizeChange} />
                <label htmlFor="size-m" className='ml-3 text-sm cursor-pointer'>Medium</label>
              </div>
              <div className='flex items-center mb-3'>
                <input type="checkbox" name="size" id="size-l" value="Large" onChange={handleSizeChange} />
                <label htmlFor="size-l" className='ml-3 text-sm cursor-pointer'>Large</label>
              </div>
            </div>
          </div>
          <div className={styles.brands}>
            <h3 className={`${styles.heading} text-xl leading-6 montserrat font-semibold`}>By Brands</h3>
            <div className={styles.options}>
              <div className='flex items-center mb-3'>
                <input
                  type="checkbox"
                  name="brand"
                  id="Channel"
                  value="Channel"
                  onChange={handleBrandChange} />
                <label htmlFor="Channel" className='ml-3 text-sm cursor-pointer'>Channel</label>
              </div>
              <div className='flex items-center mb-3'>
                <input
                  type="checkbox"
                  name="brand"
                  id="Gucci"
                  value="Gucci"
                  onChange={handleBrandChange} />
                <label htmlFor="Gucci" className='ml-3 text-sm cursor-pointer'>Gucci</label>
              </div>
              <div className='flex items-center mb-3'>
                <input
                  type="checkbox"
                  name="brand"
                  id="Balenciaga"
                  value="Balenciaga"
                  onChange={handleBrandChange} />
                <label htmlFor="Balenciaga" className='ml-3 text-sm cursor-pointer'>Balenciaga</label>
              </div>
              <div className='flex items-center mb-3'>
                <input
                  type="checkbox"
                  name="brand"
                  id="Nike"
                  value="Nike"
                  onChange={handleBrandChange} />
                <label htmlFor="Nike" className='ml-3 text-sm cursor-pointer'>Nike</label>
              </div>
              <div className='flex items-center mb-3'>
                <input
                  type="checkbox"
                  name="brand"
                  id="Adidas"
                  value="Adidas"
                  onChange={handleBrandChange} />
                <label htmlFor="Adidas" className='ml-3 text-sm cursor-pointer'>Adidas</label>
              </div>
            </div>
          </div>
          <div className={styles.banner}>
            <div className={styles.overlay} />
          </div>
          <div className={styles.instagram}>
            <h3 className={`${styles.heading} text-xl leading-6 montserrat font-semibold`}>Instagram</h3>
            <div className={styles.grid}>
              <div className={styles.post}>
                <img src="/images/me1.jpg" alt="img" />
              </div>
              <div className={styles.post}>
                <img src="/images/me2.jpg" alt="img" />
              </div>
              <div className={styles.post}>
                <img src="/images/me3.jpg" alt="img" />
              </div>
              <div className={styles.post}>
                <img src="/images/me4.jpg" alt="img" />
              </div>
              <div className={styles.post}>
                <img src="/images/me5.jpg" alt="img" />
              </div>
              <div className={styles.post}>
                <img src="/images/me6.jpg" alt="img" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.main}></section>
      </main>
    </div>
  )
}

export default ShopPage