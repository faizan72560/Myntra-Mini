// src/redux/cartSlice.js
import { createSlice,current} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    writable: true
  
  },
  reducers: {
    addToCart: (state,action) => {
      // console.log(state)
      // console.log(param)
      // const {payload}=param
      // console.log(payload)


      console.log(current(state));
      const itemInCart = current(state).cart.find((item) => item.id === action.payload.id);
      console.log(itemInCart)
      
      if (itemInCart) {
        itemInCart.quantity++;
        console.log(itemInCart.quantity)
      } else {
        state.cart.push({ ...action.payload, quantity: 1 ,  writable: true});
        localStorage.setItem("cart",JSON.stringify(state.cart))
      }
    },
    incrementQuantity: (state, action) => {
      const item =  current(state).cart.find((item) => item.id === action.payload);
      console.log(item)
      item.quantity++;
      localStorage.setItem("cart",JSON.stringify(state.cart))

    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
      localStorage.setItem("cart",JSON.stringify(state.cart))

    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
      localStorage.setItem("cart",JSON.stringify(state.cart))

    },

    
  },

  

});



export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;