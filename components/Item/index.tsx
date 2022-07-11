import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSquarePlus, faEye } from '@fortawesome/free-regular-svg-icons'
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addToCart, handleShowCart } from '../../redux/cartSlice'
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
  const dispatch = useDispatch()
  const addItem = (data: {id: Number, imageUrl: string, name: string, price: Number}) => {
    dispatch(addToCart(data))
    dispatch(handleShowCart(true))
  }

  return (
    <div className={styles.item}>
      <div className={`${styles.item__image} group`}>
        <img src={data.imageUrl} alt="item image" />
        <div className='absolute inset-0 bg-overlay hidden items-center justify-center group-hover:flex'>
          <button className='w-11 h-11 bg-white text-black hover:text-white hover:bg-primary mx-1 transition hidden lg:block'>
            <FontAwesomeIcon icon={faEye} size='xs'/>
          </button>
          <button className='w-11 h-11 bg-white text-black hover:text-white hover:bg-primary mx-1 transition'>
            <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} size='xs'/>
          </button>
        </div>
      </div>
      <div className={styles.item__desc}>
          <div>
            <a href='#' className='montserrat text-sm lg:text-lg font-semibold hover:text-primary uppercase'>
              {data.name}
            </a>
            <p className='text-primary'>{`£${data.price}`}</p>
          </div>
          <div className='text-primary text-2xl lg:text-xl'>
            <FontAwesomeIcon icon={faHeart} className='cursor-pointer hover:text-black'/>
            <FontAwesomeIcon 
              icon={faSquarePlus} 
              className='cursor-pointer hover:text-black ml-3' 
              onClick={() => addItem(data)}/>
          </div>
      </div>
    </div>
  )
}

export default Item