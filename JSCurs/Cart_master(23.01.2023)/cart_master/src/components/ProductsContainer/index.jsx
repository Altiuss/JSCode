import React from 'react'

import { useSelector} from 'react-redux'
import ProductsCard from '../ProductsCard';

export default function ProductsContainer() {

  const products = useSelector(state => state.product);
  console.log(products)


  return (
    <div>
    {products.map(el => <ProductsCard key={el.id} {...el}/>)}
    </div>
  )
}
