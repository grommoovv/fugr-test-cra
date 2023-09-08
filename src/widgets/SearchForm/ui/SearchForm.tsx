import { FC, FormEvent } from 'react'
import cls from './SearchForm.module.scss'
import { FilterByCategories } from '../../../features/FilterByCategories'
import { SearchByQuery } from '../../../features/SearchByQuery'
import { SortByOrder } from '../../../features/SortByOrder'

interface SearchFormProps {}

export const SearchForm: FC = () => {
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <form className={cls.form} onSubmit={handleSubmitForm}>
        <div className={cls.search}>
          <SearchByQuery />
        </div>
        <div className={cls.filters}>
          <FilterByCategories />
          <SortByOrder />
        </div>
      </form>
    </>
  )
}
