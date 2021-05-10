import React from "react"
import Cart from "./Cart"
import { useState } from "react"
import { useHistory } from "react-router-dom"

const CartItems = ({ items, cartItems, setCartItems, deleteItems, adjustItems }) => {
    const [purchased, setPurchased] = useState(false)
    const history = useHistory()
    
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

    const handlePurchase = () => {
        alert("Thank You For Your Purchase!!")
        setPurchased(!purchased)
        setCartItems([])
        history.push("/")
    }

    return (
        <div className="products">
            {cartItems ? allCartItems : null}
            <button onClick={handlePurchase}>Make Purchase</button>
        </div>
    )
}

export default CartItems