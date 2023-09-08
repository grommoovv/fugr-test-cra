import { ChangeEvent, FC, SelectHTMLAttributes, useState } from 'react'
import { SelectFields } from './types'
import cls from './Select.module.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  fields: SelectFields[]
  handleSelectSort: (selectValue: any) => void
}

export const Select: FC<SelectProps> = (props) => {
  const { fields, handleSelectSort } = props

  const [selectValue, setSelectValue] = useState('')

  const localSelectOption = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentValue = e.target.value
    setSelectValue(currentValue)
    handleSelectSort(currentValue)
  }

  return (
    <>
      <select className={cls.select} value={selectValue} onChange={localSelectOption}>
        {fields.map((field) => (
          <option className={cls.option} value={field.value} key={field.value}>
            {field.text}
          </option>
        ))}
      </select>
    </>
  )
}
