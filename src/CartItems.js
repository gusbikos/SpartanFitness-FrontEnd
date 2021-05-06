import React from "react"
import Cart from "./Cart"

const CartItems = ({ items, cartItems, setCartItems }) => {
    console.log(cartItems)

    const allCartItems = cartItems.map((cartItem, index) => {
        return (
            <Cart
                key={index}
                cartItem={cartItem}
            />
        )
    })

    return (
        <div className="products">
            {allCartItems}
        </div>
    )
}

export default CartItems