import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.head}>
        <Header>Меню</Header>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div className={styles.content}></div>
    </div>
  )
}

export default Menu
