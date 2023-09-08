import { FC } from 'react'
import cls from './BookCard.module.scss'
import { volumeInfo } from '../../model/types/Book'
import { Link } from 'react-router-dom'

interface BookCardProps {
  book: volumeInfo
  bookId: string
}

export const BookCard: FC<BookCardProps> = ({ book, bookId }) => {
  const title = book?.title
  const publishedDate = book?.publishedDate
  const imageURL = book?.imageLinks?.thumbnail
  const formattedAuthors = book?.authors?.join(', ')
  const formattedCategories = book?.categories?.join(', ')

  return (
    <>
      <Link to={`/books/${bookId}`}>
        <div className={cls.card}>
          <div className={cls.media}>
            <img src={imageURL} alt={title} />
          </div>
          <div className={cls.info}>
            <div className={cls.categories}>{formattedCategories}</div>
            <div className={cls.title}>{title}</div>
            <div className={cls.authors}>{formattedAuthors}</div>
            <div className={cls.published}>Published: {publishedDate}</div>
          </div>
        </div>
      </Link>
    </>
  )
}
