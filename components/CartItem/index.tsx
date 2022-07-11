import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../redux/cartSlice'

interface CartItemProps {
  data: {
    id: number, 
    imageUrl: string, 
    name: string, 
    price: number
  }
}
const CartItem: React.FC<CartItemProps> = ({data}) => {
  const dispatch = useDispatch()
  const deleteCartItem = (id: number) => {
    dispatch(deleteItem(id))
  }
  return (
    <div className='flex justify-between items-start w-full h-[90px] mb-8'>
      <div className='flex'>
        <a href="#">
          <img className='h-full w-[70px] border border-gray-200 object-cover' src={data.imageUrl} alt="item images" />
        </a>
        <div className='ml-5'>
          <a href='#' className='text-base text-black hover:text-primary'>{data.name}</a>
          <p className='text-sm pt-1'>2 <span className='text-xs'>x</span> £{data.price}</p>
        </div>
      </div>
      <button className='text-sm hover:text-primary' onClick={() => deleteCartItem(data.id)}>
        &#10005;
      </button>
    </div>
  )
}

export default CartItem