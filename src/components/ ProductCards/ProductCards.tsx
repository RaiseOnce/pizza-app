import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { ProductCards } from '../../types'
import styles from './ProductCards.module.scss'

const ProductCards = ({ products }: ProductCards) => {
  return (
    <div className={styles.wrapper}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          name={p.name}
          description={p.ingredients.join(', ')}
          rating={p.rating}
          price={p.price}
          image={p.image}
        />
      ))}
    </div>
  )
}

export default ProductCards
