// import { $axios } from '@/shared/api/axios'
// import { __API_KEY__ } from '@/shared/api/keys'
import { ApiResponse, SearchParams } from '../types'
import { Book } from '../../model/types/Book'
import { $axios } from '../../../../shared/api/axios'
import { __API_KEY__ } from '../../../../shared/api/keys'

export const maxBookResultPerLoad = 30

/**
 * Build Query String Function
 * Logic of build query string
 */

const buildQueryString = ({ query, subject, sort, startIndex }: SearchParams) => {
  let buildedQueryString = `?q=${query}`

  if (subject && subject !== 'all') {
    buildedQueryString += `+subject:${subject}`
  }
  if (sort) {
    buildedQueryString += `&orderBy=${sort}`
  }

  buildedQueryString += `&startIndex=${startIndex}&maxResults=${maxBookResultPerLoad}&key=${__API_KEY__}`

  return buildedQueryString
}

/**
 * Book Service
 * Logic of api requests
 */

export class BookService {
  static async reciveAllBooks(searchParams: SearchParams) {
    return (await $axios<ApiResponse>(`${buildQueryString(searchParams)}`)).data
  }

  static async reciveOneBook(id: string) {
    return (await $axios<Book>(`${id}?key=${__API_KEY__}`)).data
  }
}
