import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import '../../sass/globals.scss'
import Sidebar from '../../components/Sidebar/Sidebar'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
