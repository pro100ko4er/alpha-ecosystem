import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../'
import { ProductState } from '../types'
import { IProduct } from '../../types'


// Define the initial state using that type
const initialState: ProductState = {
   products: []
}

export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getProduct(state, action) {

    },
    getProducts(state, action) {
      
    },
    addProducts(state, action: PayloadAction<IProduct[]>) {

    },
    createProduct(state, action: PayloadAction<IProduct>) {

    },
    removeProduct(state, action: PayloadAction<number>) {

    },
    likeProduct(state, action: PayloadAction<number>) {

    },
    unlikeProduct(state, action: PayloadAction<number>) {

    }
  },
})

export const { getProduct, getProducts, addProducts, createProduct, removeProduct, likeProduct, unlikeProduct } = productSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default productSlice.reducer