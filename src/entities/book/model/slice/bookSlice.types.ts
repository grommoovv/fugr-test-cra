import { SearchParams } from '../../api/types'
import { Book } from '../types/Book'

export type CategoryType =
  | 'all'
  | 'art'
  | 'biography'
  | 'computers'
  | 'history'
  | 'medical'
  | 'poetry'

export type SortType = 'relevance' | 'newest'

export interface InitialBookState {
  books: Book[]
  searchCount: number
  searchQuery: string
  selectedCategory: CategoryType
  selectedSort: SortType
  status: 'idle' | 'loading' | 'fulfilled' | 'rejected'
  error: string | null
  prevSearchParams: SearchParams | null
}
