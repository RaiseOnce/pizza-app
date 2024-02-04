import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <>
      <div>
        <Link to="/">Меню</Link>
        <Link to="/cart">Корзина</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
