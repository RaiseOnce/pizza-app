import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import ProductCards from '../../components/ ProductCards/ProductCards'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.head}>
        <Header>Меню</Header>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div className={styles.products}>
        {/* <ProductCards /> */}
        <Link to="/product">card</Link>
      </div>
    </div>
  )
}

export default Menu
