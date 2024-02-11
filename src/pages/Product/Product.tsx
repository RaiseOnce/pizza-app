import React, { Suspense } from 'react'
import { Await, useLoaderData, useParams } from 'react-router-dom'
import { ProductProps } from '../../types'

const Product = () => {
  const data = useLoaderData() as { data: ProductProps }

  return (
    <div>
      <Suspense fallback={'Загружаю...'}>
        <Await resolve={data.data}>
          {({ data }: { data: ProductProps }) => <>Product - {data.name}</>}
        </Await>
      </Suspense>
    </div>
  )
}

export default Product
