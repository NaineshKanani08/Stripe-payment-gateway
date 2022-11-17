import React from 'react'
import ProductCard from './ProductCard'
const Products = ({ products, handleBuy }) => {
    return (
        <div className="productContainer">
            {
                products.map((product) => {
                    return (<ProductCard key={product.id} product={product} handleBuy={handleBuy} />)
                })
            }
        </div>
    )
}

export default Products