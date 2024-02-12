import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './Layout.module.scss'
import '../../sass/globals.scss'
import Sidebar from '../../components/Sidebar/Sidebar'

const Layout = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('jwt')
    navigate('/auth/login')
  }

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar logout={logout} />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
