import { createAsyncThunk } from '@reduxjs/toolkit'
import { BookService } from '../../api/service/BookService'
import { ApiResponse, SearchParams } from '../../api/types'

let errorMessage = 'Failed to load data'

export const reciveAllBooks = createAsyncThunk<ApiResponse, SearchParams, { rejectValue: string }>(
  'BOOKS/reciveAllBooks',
  async function (searchParams, { rejectWithValue }) {
    try {
      return await BookService.reciveAllBooks(searchParams)
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message
      }
      return rejectWithValue(errorMessage)
    }
  }
)
