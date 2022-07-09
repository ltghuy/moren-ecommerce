import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSquarePlus, faEye } from '@fortawesome/free-regular-svg-icons'
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'
import styles from './item.module.scss'

interface ItemProps {
  data: {
    id: Number,
    imageUrl: string,
    name: string,
    price: Number
  }
}

const Item : React.FC<ItemProps> = ({ data }) => {
  return (
    <div className={styles.item}>
      <div className={`${styles.item__image} group`}>
        <img src={data.imageUrl} alt="item image" />
        <div className='absolute inset-0 bg-overlay hidden items-center justify-center group-hover:flex'>
          <button className='w-11 h-11 bg-white text-black hover:text-white hover:bg-primary mx-1 transition'>
            <FontAwesomeIcon icon={faEye} size='xs'/>
          </button>
          <button className='w-11 h-11 bg-white text-black hover:text-white hover:bg-primary mx-1 transition'>
            <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} size='xs'/>
          </button>
        </div>
      </div>
      <div className={styles.item__desc}>
          <div>
            <a href='#' className='montserrat font-semibold hover:text-primary'>{data.name}</a>
            <p className='text-primary'>{`£${data.price}`}</p>
          </div>
          <div className='text-primary text-xl'>
            <FontAwesomeIcon icon={faHeart} className='cursor-pointer hover:text-black'/>
            <FontAwesomeIcon icon={faSquarePlus} className='cursor-pointer hover:text-black ml-3'/>
          </div>
      </div>
    </div>
  )
}

export default Item