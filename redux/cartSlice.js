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
      const index = state.cartList.findIndex(element => {
        if (element.id === action.payload.data.id) {
          return true;
        }
        return false;
      });
      
      if (index !== -1) {
        let newCart = state.cartList
        let product = state.cartList[index]
        product.quantity++
        newCart.splice(index, 1)

        state.cartList = [...newCart, product]

      } else {
        state.cartList = [...state.cartList, {...action.payload.data, quantity: action.payload.quantity || 1}]
      }
    },
    increaseItem: (state, action) => {
      const index = state.cartList.findIndex(element => {
        if (element.id === action.payload) {
          return true;
        }
        return false;
      });
      
      if (index !== -1) {
        let product = state.cartList[index]
        product.quantity++
      }
    },
    decreaseItem: (state, action) => {
      const index = state.cartList.findIndex(element => {
        if (element.id === action.payload) {
          return true;
        }
        return false;
      });
      
      if (index !== -1) {
        let product = state.cartList[index]
        product.quantity--
        if (product.quantity === 0) {
          state.cartList.splice(index, 1)
        }
      }
    },
    deleteItem: (state, action) => {
      let newCart = state.cartList
      const itemIndex = newCart.findIndex((item) => item.id == action.payload)
      newCart.splice(itemIndex, 1)
    }
  }
})

export const { handleShowCart, addToCart, deleteItem, increaseItem, decreaseItem } = cartSlice.actions
export default cartSlice.reducer
