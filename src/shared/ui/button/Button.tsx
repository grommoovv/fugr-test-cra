import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cls from './Button.module.scss'
import { cn } from '../../libs/classNames'

type ButtonTheme = 'primary' | 'default'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, theme = 'clear', ...rest } = props

  const adds = [className, cls[theme]]

  return (
    <button className={cn(cls.button, {}, adds)} {...rest}>
      {children}
    </button>
  )
}
