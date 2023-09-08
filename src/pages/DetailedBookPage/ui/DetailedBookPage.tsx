import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { BookService } from '../../../entities/book'
import { volumeInfo } from '../../../entities/book/model/types/Book'
import { BookDetails } from '../../../entities/book/ui/BookDetails'
import { Loader } from '../../../shared/ui/loader'
// import cls from './DetailedBookPage.module.scss'

interface DetailedBookPageProps {}

const DetailedBookPage: FC = (props) => {
  const { id } = useParams()

  const [book, setBook] = useState<volumeInfo | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const reciveBook = async () => {
      try {
        if (id) {
          const res = await BookService.reciveOneBook(id)
          setBook(res.volumeInfo)
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
        setError('Failed To Load Data')
      } finally {
        setLoading(false)
      }
    }

    reciveBook()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      {book ? (
        <BookDetails book={book} />
      ) : (
        <div>
          <div>Loading Failed</div>
        </div>
      )}
    </>
  )
}

export default DetailedBookPage
