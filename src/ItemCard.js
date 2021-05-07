import React from "react"

const ItemCard = ({ item, addToCart }) => {
    const { name, price, description, quantity, image } = item
    // console.log(adjustQuantity)

    const addCartItems = () => {
        // console.log(item)
        addToCart(item) 
    }

    const checkQuantity = () => {
        if ( quantity === 0 ) {
            return "Sorry None Left"
        }
    }

    return (
        <div className="products-list">
            <div>
                <img className="small" src={image} alt={description}/>
                <h1>{price}$</h1>
                <h2>{name}</h2>
                <h3>{description}</h3>
                <h3> Quantity: {quantity}</h3>
                <button onClick={() => addCartItems()}>Add To Cart</button>
            </div>
        </div> 
    )
}

export default ItemCard