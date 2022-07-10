import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showCart: false,
  cartList: []
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
    }
  }
})

export const { handleShowCart, addToCart } = cartSlice.actions
export default cartSlice.reducer