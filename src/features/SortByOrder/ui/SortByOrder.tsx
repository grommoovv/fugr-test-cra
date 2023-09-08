import { FC, useState } from 'react'
import cls from './SortByOrder.module.scss'
import { useAppDispatch } from '../../../app/providers/redux'
import { setSelectedSort } from '../../../entities/book/model/slice/bookSlice'
import { SortType } from '../../../entities/book/model/slice/bookSlice.types'
import { Select } from '../../../shared/ui/select'

interface SortByOrderProps {}

export const SortByOrder: FC = (props) => {
  const [sortValue, setSortValue] = useState<SortType>('relevance')
  const dispatch = useAppDispatch()

  const handleSort = (value: SortType) => {
    setSortValue(value)
    dispatch(setSelectedSort(value))
  }

  const sortOptions = [
    {
      value: 'relevance',
      text: 'Relevance',
    },
    {
      value: 'newest',
      text: 'Newest',
    },
  ]

  return (
    <>
      <label className={cls.label}>
        <div className={cls.label__title}>Sort by</div>
        <div>
          <Select fields={sortOptions} handleSelectSort={handleSort} />
        </div>
      </label>
    </>
  )
}
