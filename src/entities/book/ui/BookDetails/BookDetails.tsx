import { FC } from 'react'
import cls from './BookDetails.module.scss'
import { volumeInfo } from '../../model/types/Book'
import { Link } from 'react-router-dom'

interface BookDetailsProps {
  book: volumeInfo
}

export const BookDetails: FC<BookDetailsProps> = ({ book }) => {
  const categories = book.categories?.join(', ') || 'no categories'
  const authors = book.authors?.join(', ') || 'unknown author'
  const description = book.description || 'There is no description for this book'

  return (
    <>
      <div className={cls.details}>
        <div className={cls.back_button}>
          <Link to={'/'}>Back to Home page</Link>
        </div>
        <div className={cls.primary}>
          <div className={cls.media}>
            <img
              className={cls.image}
              src={book.imageLinks.thumbnail}
              alt={book.title}
              title={book.title}
            />
          </div>
        </div>
        <div className={cls.secondary}>
          <div className={cls.info}>
            <div className={cls.categories}>{categories}</div>
            <div className={cls.title}>{book.title}</div>
            <div className={cls.authors}>{authors}</div>
            <div className={cls.description}>
              <p className={cls.desc_text}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
