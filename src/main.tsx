import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom'
import Cart from './pages/Cart/Cart.tsx'
import Error from './pages/Error/Error.tsx'
import Layout from './layout/Layout/Layout.tsx'
import Product from './pages/Product/Product.tsx'
import axios from 'axios'
import { PREFIX } from './api/API.ts'

const Menu = lazy(() => import('./pages/Menu/Menu'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Загрузка...</div>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <h1 style={{ textAlign: 'center' }}>Some Error</h1>,
        loader: async ({ params }) => {
          return defer({
            data: await axios
              .get(`${PREFIX}/products/${params.id}`)
              .then((data) => data),

            // data: new Promise((resolve, reject) => {
            //   setTimeout(() => {
            //     axios
            //       .get(`${PREFIX}/products/${params.id}`)
            //       .then((data) => resolve(data))
            //       .catch((e) => reject(e))
            //   }, 2000)
            // }),
          })
        },
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
