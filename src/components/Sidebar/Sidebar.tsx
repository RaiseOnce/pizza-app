import React from 'react'
import styles from './Sidebar.module.scss'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
            }
          >
            <img src="./doc.svg" alt="" />
            <span>Меню</span>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
            }
          >
            <img src="./bag.svg" alt="" />
            <span>Корзина</span>
          </NavLink>
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
