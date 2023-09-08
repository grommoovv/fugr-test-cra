import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialBookState } from './bookSlice.config'
import { reciveAllBooks } from '../thunk/BookThunk'
import { CategoryType, SortType } from './bookSlice.types'
import { SearchParams } from '../../api/types'
import { AppState } from '../../../../app/providers/redux'

/*
	Main logic of book slice

	Reducers:
	1. Searching by Search Query
	2. Selecting Category
	3. Selecting Sort
	4. Save Previous Search Params
	5. Reset Filters

	Builder:
	1. Recive data by search query
*/

export const BookSlice = createSlice({
  name: 'BOOKS',
  initialState: initialBookState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setSelectedCategory: (state, action: PayloadAction<CategoryType>) => {
      state.selectedCategory = action.payload
    },
    setSelectedSort: (state, action: PayloadAction<SortType>) => {
      state.selectedSort = action.payload
    },
    setPrevSearchParams: (state, action: PayloadAction<SearchParams>) => {
      state.prevSearchParams = action.payload
    },
    resetRecivedData: (state) => {
      state.books = []
    },
    resetFilters: (state) => {
      state.searchQuery = ''
      state.selectedCategory = 'all'
      state.selectedSort = 'relevance'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(reciveAllBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(reciveAllBooks.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.books.push(...action.payload.items)
        state.searchCount = action.payload.totalItems
      })
      .addCase(reciveAllBooks.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload as string
      })
  },
})

export const {
  setSearchQuery,
  setSelectedCategory,
  setSelectedSort,
  setPrevSearchParams,
  resetRecivedData,
  resetFilters,
} = BookSlice.actions
