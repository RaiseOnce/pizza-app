import React from 'react'
import styles from './Sidebar.module.scss'
import Button from '../Button/Button'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src="./user.jpeg" alt="user" />
      </div>

      <div className={styles.user}>
        <div className={styles.name}>Ильяс Юнусов</div>
        <div className={styles.email}>elias.yunusoff@gmail.com</div>
      </div>

      <div className={styles.nav}>
        <div className={styles.navItems}>
          <Link
            to="/"
            className={`${styles.navItem} ${
              location.pathname === '/' ? styles.navItemActive : ''
            }`}
          >
            <img src="./doc.svg" alt="" />
            <span>Меню</span>
          </Link>
          <Link
            to="/cart"
            className={`${styles.navItem} ${
              location.pathname === '/cart' ? styles.navItemActive : ''
            }`}
          >
            <img src="./bag.svg" alt="" />
            <span>Корзина</span>
          </Link>
        </div>

        <Button>
          <div className={styles.btn}>
            <img className={styles.exit} src="./exit.png" alt="exit" />
            <span>Выйти</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
