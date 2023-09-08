import { CategoryType, SortType } from '../model/slice/bookSlice.types'
import { Book } from '../model/types/Book'

export interface ApiResponse {
  kind: string
  totalItems: number
  items: Book[]
}

export interface SearchParams {
  query: string
  subject?: CategoryType
  sort?: SortType
  startIndex: number
}
