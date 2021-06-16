import axios from "axios"
import React from "react"

const Cart = ({ cartItem, deleteItems, item }) => {

    const removeCartItem = () => {
        const cartItemId = cartItem.id
        const itemId = {item_id: item.id}
        axios.post(`/cart_items/${cartItemId}`, itemId).then((response) => {
            deleteItems(response.data)
        })
    }

    return (
        <div className="products-list">
            { cartItem.item ? (<div>
                <img src={cartItem.item.image} alt={cartItem.item.image}/>
                <h1>{cartItem.item.price}$</h1>
                <h2>{cartItem.item.name}</h2>
                <h3>{cartItem.item.description}</h3>
                <button className="delete-btn" onClick={() => removeCartItem()}>Remove</button>
            </div>): (
                <div>
                    Loading... Please Wait.
                </div>
                )
            }
        </div> 
    )
}

export default Cart