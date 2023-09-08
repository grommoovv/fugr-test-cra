import { FC } from 'react'
import cls from './LoadMore.module.scss'
import { useAppSelector, useAppDispatch } from '../../../app/providers/redux'
import { reciveAllBooks } from '../../../entities/book'
import { maxBookResultPerLoad } from '../../../entities/book/api/service/BookService'
import { SearchParams } from '../../../entities/book/api/types'
import { setPrevSearchParams } from '../../../entities/book/model/slice/bookSlice'
import { Button } from '../../../shared/ui/button'

export const LoadMore: FC = () => {
  const {
    searchCount,
    books: { length },
    prevSearchParams,
  } = useAppSelector((s) => s.BOOKS)
  const dispatch = useAppDispatch()

  const handleLoadMore = () => {
    if (prevSearchParams) {
      const searchParams: SearchParams = {
        ...prevSearchParams,
        startIndex: prevSearchParams?.startIndex + maxBookResultPerLoad,
      }

      dispatch(setPrevSearchParams(searchParams))
      dispatch(reciveAllBooks(searchParams))
    }
  }

  if (searchCount > length && length !== 0) {
    return (
      <div className={cls.wrap}>
        <Button theme='primary' onClick={handleLoadMore}>
          Load More
        </Button>
      </div>
    )
  }

  return null
}
