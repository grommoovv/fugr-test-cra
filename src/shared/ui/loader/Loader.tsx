import { FC } from 'react'
import cls from './Loader.module.scss'

interface LoaderProps {}

export const Loader: FC = (props) => {
  return (
    <div className={cls.loader}>
      <div className={cls.wrap}>
        <div className={cls.animation}></div>
      </div>
    </div>
  )
}
