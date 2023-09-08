import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../config/store'

interface ReduxProviderProps {
  children: ReactNode
}

export const ReduxProvider: FC<ReduxProviderProps> = (props) => {
  const { children } = props

  return <Provider store={store}>{children}</Provider>
}
