import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './reducers/product-reducer'
import { themeSlice } from './reducers/theme-reducer'
// ...

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    theme: themeSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch