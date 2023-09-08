import { FC } from 'react'
import cls from './BookList.module.scss'
import { BookCard } from '../BookCard'
import { useAppSelector } from '../../../../app/providers/redux'
import { Loader } from '../../../../shared/ui/loader'

interface BookListProps {}

export const BookList: FC = (props) => {
  const { books, status, error } = useAppSelector((s) => s.BOOKS)

  if (status === 'loading' && books.length === 0) {
    return <Loader />
  }

  if (error) {
    return <div>{error}</div>
  }

  if (books.length > 0) {
    return (
      <ul className={cls.list}>
        {books.map((book) => (
          <li className={cls.item} key={book.id}>
            <BookCard book={book.volumeInfo} bookId={book.id} />
          </li>
        ))}
      </ul>
    )
  }

  return null
}
