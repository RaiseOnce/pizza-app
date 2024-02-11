import React from 'react'
import styles from './Auth.module.scss'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.containerInner}>
          <div className={styles.sidebar}>
            <img className={styles.logo} src="/logo.svg" alt="" />
          </div>

          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
