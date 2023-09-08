import { FC } from 'react'
import cls from './SearchCountMessage.module.scss'
import { useAppSelector } from '../../../app/providers/redux'

interface SearchCountMessageProps {}

export const SearchCountMessage: FC = () => {
  const { searchQuery, searchCount } = useAppSelector((s) => s.BOOKS)

  if (searchQuery && searchCount > 0) {
    return (
      <div className={cls.message}>
        Found {searchCount} books for the keyword '{searchQuery}'
      </div>
    )
  }

  return null
}
