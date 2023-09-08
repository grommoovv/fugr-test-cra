import { FC } from 'react'
import { RouterProvider } from 'react-router'
import { AppRouterProvider } from './providers/router'

interface AppProps {}

export const App: FC = () => {
  return (
    <>
      <RouterProvider router={AppRouterProvider} />
    </>
  )
}
