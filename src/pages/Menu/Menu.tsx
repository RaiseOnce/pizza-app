import React, { useEffect, useState } from 'react'
import styles from './Menu.module.scss'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import ProductCards from '../../components/ ProductCards/ProductCards'
import { PREFIX } from '../../api/API'
import { ProductProps } from '../../types'
import axios, { AxiosError } from 'axios'

const Menu = () => {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>()

  const getMenu = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get<ProductProps[]>(`${PREFIX}/products`)
      setProducts(data)
    } catch (e) {
      console.log(e)
      if (e instanceof AxiosError) {
        setError(e.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMenu()
  }, [])

  return (
    <div className={styles.menu}>
      <div className={styles.head}>
        <Header>Меню</Header>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div>
        {error && <h1 className={styles.header}>Error: {error}</h1>}
        {isLoading ? (
          <h1 className={styles.header}>Loading...</h1>
        ) : (
          <ProductCards products={products} />
        )}
      </div>
    </div>
  )
}

export default Menu
