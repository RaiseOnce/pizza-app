import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Menu from './pages/Menu/Menu.tsx'
import Cart from './pages/Cart/Cart.tsx'
import Error from './pages/Error/Error.tsx'
import Layout from './layout/Layout/Layout.tsx'
import Product from './pages/Product/Product.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Menu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/products/:id',
        element: <Product />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
