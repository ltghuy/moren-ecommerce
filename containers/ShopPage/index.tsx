import React, { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCheck, faArrowDownLong, faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { SideBarCategory, SideBarColors, SidebarBrands, SidebarInstagram } from '../../ultils/sidebarItems'
import GridIcon from '../../public/grip-solid.svg'
import ListIcon from '../../public/list-ul-solid.svg'
import Thumnail from '../../components/Thumnail'
import Dropdown from '../../components/Dropdown'
import Select from '../../components/Select'
import Item from '../../components/Item'
import styles from './shop.module.scss'

interface ProductProps {
  id: number,
  imageUrl: string,
  name: string,
  price: number
}

const ShopPage = () => {
  const [sizeQuery, setSizeQuery] = useState<string[]>([])
  const [brandQuery, setBrandQuery] = useState<string[]>([])
  const [layout, setLayout] = useState<string>('grid')
  const productList: ProductProps[] = useSelector((state: any) => state.cart.productList)

  const pagingSelection = [
    { id: 1, text: 'Show 12', value: '12' },
    { id: 2, text: 'Show 15', value: '15' },
    { id: 3, text: 'Show 30', value: '30' },
  ]

  const sortSelection = [
    { id: 1, text: 'Sort By Default', value: 'default' },
    { id: 2, text: 'Sort By Popularity', value: 'popularity' },
    { id: 3, text: 'Sort By Rated', value: 'rated' },
    {
      id: 4,
      text: 'Sort By Price',
      value: 'price-desc',
      icon: <FontAwesomeIcon icon={faArrowDownLong} size='xs' />
    },
    {
      id: 5,
      text: 'Sort By Price',
      value: 'prices-asc',
      icon: <FontAwesomeIcon icon={faArrowUpLong} size='xs' />
    }
  ]

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

  const handleLayout = (layout: string) => {
    setLayout(layout)
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
                  <Link href={color.link} key={color.id}>
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
              {
                SidebarBrands.map((brand) =>
                  <div className='flex items-center mb-3' key={brand.id}>
                    <input
                      type="checkbox"
                      name="brand"
                      id={brand.label}
                      value={brand.value}
                      onChange={handleBrandChange} />
                    <label htmlFor={brand.label} className='ml-3 text-sm cursor-pointer'>{brand.label}</label>
                  </div>
                )
              }
            </div>
          </div>
          <div className={styles.banner}>
            <div className={styles.overlay} />
          </div>
          <div className={styles.instagram}>
            <h3 className={`${styles.heading} text-xl leading-6 montserrat font-semibold`}>Instagram</h3>
            <div className={styles.grid}>
              {
                SidebarInstagram.map((post) =>
                  <div className={styles.post} key={post.id}>
                    <img src={post.url_image} alt="img" />
                  </div>
                )
              }
            </div>
          </div>
        </section>
        <section className={styles.main}>
          <div className={styles.header}>
            <p className={styles.showing}>Showing 1–12 of 88 results</p>
            <div className={styles.controls}>
              <Select options={pagingSelection} classStyles='hidden lg:block' />
              <Select options={sortSelection} classStyles='hidden lg:block' />
              <ListIcon
                className={`${styles.list_icon} ${layout === 'list' && styles.active}`}
                onClick={() => handleLayout('list')} />
              <GridIcon
                className={`${styles.grip_icon} ${layout === 'grid' && styles.active}`}
                onClick={() => handleLayout('grid')} />
            </div>
          </div>
          <div className={styles.products}>
            {
              productList.map((item) =>
                <Item
                  data={item}
                  key={item.id}
                  textCenter
                />
              )
            }
          </div>
        </section>
      </main>
    </div>
  )
}

export default ShopPage