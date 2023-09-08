import { InitialBookState } from './bookSlice.types'

export const initialBookState: InitialBookState = {
  books: [],
  searchCount: 0,
  searchQuery: '',
  selectedCategory: 'all',
  selectedSort: 'relevance',
  status: 'idle',
  error: null,
  prevSearchParams: null,
}
