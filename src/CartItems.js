import React from "react"
import Cart from "./Cart"

const CartItems = ({ cartItems, deleteItems }) => {
    
    const allCartItems = cartItems.map((cartItem) => {
        return (
            <Cart
                key={cartItem.id}
                cartItem={cartItem}
                deleteItems={deleteItems}
                item={cartItem.item}
            />
        )
    })

    return (
        <div className="products">
            {cartItems ? allCartItems : null}
        </div>
    )
}

export default CartItems