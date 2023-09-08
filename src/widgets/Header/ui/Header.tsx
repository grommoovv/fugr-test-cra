import { FC } from 'react'
import { useLocation } from 'react-router'
import cls from './Header.module.scss'
import { SearchForm } from '../../SearchForm'

export const Header: FC = () => {
  const location = useLocation()

  if (location.pathname === '/') {
    return (
      <header className={cls.header}>
        <div className={cls.container}>
          <h1 className={cls.title}>Search For Books</h1>
          <SearchForm />
        </div>
      </header>
    )
  }

  return null
}
