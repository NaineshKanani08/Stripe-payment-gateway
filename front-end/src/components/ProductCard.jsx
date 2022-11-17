import React from 'react'

const ProductCard = ({ product, handleBuy }) => {
    return (
        <div  className="product">
            <h3>Name:{product.name}</h3>
            <p>Description:{product.description}</p>
            <h5>Price:${product.amount}</h5>
            <button onClick={() => handleBuy(product.id)}>Buy Now</button>
        </div >
    )
}

export default ProductCard