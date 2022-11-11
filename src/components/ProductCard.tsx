import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../models/product'

interface IProductCard{
    product: IProduct
}

export default function ProductCard({product}: IProductCard) {

    const navigate = useNavigate();

    const clickHandler = () => navigate(`/product/${product.id}`)

  return (
    <div onClick={clickHandler}>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.rating.rate}</p>
        <p>{product.rating.count}</p>
        <img src={product.image} alt={product.title} />
    </div>
  )
}
