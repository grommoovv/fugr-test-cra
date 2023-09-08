import { createBrowserRouter } from 'react-router-dom'
import { DetailedBookPage } from '../../../../pages/DetailedBookPage'
import { HomePage } from '../../../../pages/HomePage'
import { NotFoundPage } from '../../../../pages/NotFoundPage'
import { RootLayout } from '../../../../shared/layout'

export const AppRouterProvider = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/books/:id',
        element: <DetailedBookPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
