import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { ProductCards } from '../../types'

const ProductCards = ({ products }: ProductCards) => {
  return products.map((p) => (
    <ProductCard
      key={p.id}
      id={p.id}
      name={p.name}
      description={p.ingredients.join(', ')}
      rating={p.rating}
      price={p.price}
      image={p.image}
    />
  ))
}

export default ProductCards
