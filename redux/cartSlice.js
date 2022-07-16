import { createSlice } from '@reduxjs/toolkit'
import { GirlItemList, BoyItemList } from '../ultils/homeItems'

const initialState = {
  showCart: false,
  cartList: [],
  productList: [...GirlItemList, ...BoyItemList]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleShowCart: (state, action) => {
      state.showCart = action.payload
    },
    addToCart: (state, action) => {
      state.cartList = [...state.cartList, action.payload]
    },
    deleteItem: (state, action) => {
      let newCart = state.cartList
      const itemIndex = newCart.findIndex((item) => item.id == action.payload)
      newCart.splice(itemIndex, 1)
    }
  }
})

export const { handleShowCart, addToCart, deleteItem } = cartSlice.actions
export default cartSlice.reducer