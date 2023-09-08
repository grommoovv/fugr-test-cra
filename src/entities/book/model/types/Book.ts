export interface volumeInfo {
  authors: string[]
  categories: string[]
  title: string
  description: string
  pageCount: number
  publishedDate: number
  imageLinks: {
    smallThumbnail: string | undefined
    thumbnail: string | undefined
  }
}

export interface Book {
  kind: string
  id: string
  volumeInfo: volumeInfo
}
