// import { BookSlice } from '@/entities/book/model/slice/bookSlice'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { BookSlice } from '../../../../entities/book'

const rootReducer = combineReducers({
  [BookSlice.name]: BookSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
