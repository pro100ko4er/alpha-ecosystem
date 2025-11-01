import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductState } from '../types'
import { IProduct } from '../../types'


// Define the initial state using that type
const initialState: ProductState = {
   products: [],
   limit: 100,
   page: 0,
   total: 0,
   total_pages: 0,
   filter: 'all'
}

export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getProducts(state, action: PayloadAction<ProductState>) {
        state.products = [...state.products, ...action.payload.products]
        state.total = action.payload.total
        state.total_pages = action.payload.total_pages
        state.page = action.payload.page
    },
    setFilter(state, action: PayloadAction<string>) {
      if(action.payload === 'liked' || action.payload === 'all') state.filter = action.payload
    },
    createProduct(state, action: PayloadAction<IProduct>) {
       state.products = [action.payload, ...state.products]
    },
    updateProduct: (state, action: PayloadAction<IProduct>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(product => product.id !== action.payload)
    },
    switchLikeProduct(state, action: PayloadAction<number>) {
      const find_product = state.products.find(p => p.id === action.payload)
      if(find_product) find_product.liked = !find_product.liked
    },
  },
})

export const { getProducts, setFilter, createProduct, updateProduct, removeProduct, switchLikeProduct } = productSlice.actions

// Other code such as selectors can use the imported `RootState` type


export default productSlice.reducer