import React from "react"

const Cart = ({ cartItem }) => {
    console.log(cartItem.item)
    const { image, price, name, description } = cartItem

    return (
        <div className="products-list">
            <div>
                <img className="small" src={image} alt={cartItem.id}/>
                <h1>{price}$</h1>
                <h2>{name}</h2>
                <h3>{description}</h3>
            </div>
        </div> 
    )
}

export default Cart