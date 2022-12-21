import { createReducer } from "@reduxjs/toolkit";
const intialState={
  
  
}

export const GetItems = createReducer(intialState, {
    GET_REQUEST: (state) => {
      state.loading = true;
    },
    GET_SUCCESS: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    GET_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
   
  });


  
export const GetCart = createReducer(intialState, {
    GET_TOCART_REQUEST: (state) => {
      state.loading = true;
    },
    GET_TOCART_SUCCESS: (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    },
    GET_TOCART_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
   
  });


  