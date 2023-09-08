import { FC, InputHTMLAttributes } from 'react'
import cls from './Input.module.scss'
import { cn } from '../../libs/classNames'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input: FC<InputProps> = (props) => {
  const { className, ...rest } = props

  return (
    <>
      <input className={cn(cls.input, {}, [className])} {...rest} />
    </>
  )
}
