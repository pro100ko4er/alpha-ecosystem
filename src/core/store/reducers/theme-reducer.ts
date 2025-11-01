import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../'
import { ThemeState } from '../types'


// Define the initial state using that type
const initialState: ThemeState = {
   theme: 'light'
}

export const themeSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    switchTheme(state, action: PayloadAction<ThemeState>) {
        state.theme = action.payload.theme
    }
  },
})

export const { switchTheme } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default themeSlice.reducer