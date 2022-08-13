import React from 'react'
import Link from 'next/link'
import Thumnail from '../../components/Thumnail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCheck } from '@fortawesome/free-solid-svg-icons'
import { SideBarCategory, SideBarColors } from '../../ultils/sidebarDropdown'
import Dropdown from '../../components/Dropdown'
import styles from './shop.module.scss'

const ShopPage = () => {
  return (
    <div className={styles.shop}>
      <Thumnail background='/images/shop-bg.jpg' link='Shop'/>
      <main className={`${styles.wrapper}`}>
        <section className={styles.sidebar}>
          <div className={styles.search_box}>
            <input type="text" placeholder='Search entire store...' autoComplete='off'/>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </div>
          <div className={styles.category}>
            <h3 className={`${styles.heading} text-xl leading-6 montserrat font-semibold`}>Category</h3>
            <div className={styles.list}>
              {
                SideBarCategory.map((dropdown) => 
                  <Dropdown label={dropdown.label} items={dropdown.children} key={dropdown.id}/>
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
                  <a key={color.id} className={styles.color} style={{backgroundColor: `${color.color}`}}>
                    <FontAwesomeIcon icon={faCheck} color='white' />
                  </a>
                </Link>
              )}
            </div>
          </div>
        </section>
        <section className={styles.main}>This is main section</section>
      </main>
    </div>
  )
}

export default ShopPage