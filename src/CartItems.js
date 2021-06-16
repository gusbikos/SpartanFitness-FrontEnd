import React from "react"
import Cart from "./Cart"

const CartItems = ({ cartItems, deleteItems, adjustItems }) => {
    
    const allCartItems = cartItems.map((cartItem) => {
        return (
            <Cart
                key={cartItem.id}
                cartItem={cartItem}
                deleteItems={deleteItems}
                adjustItems={adjustItems}
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