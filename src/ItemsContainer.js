import React from "react"
import ItemCard from "./ItemCard"
// import CartItems from "./CartItems"
// import { useState, useEffect } from "react"

const ItemsContainer = ({ id, items, cartItems, setCartItems, addToCart }) => {
    console.log(items)

    const allItems = items.map((item) => {
        return (
        <ItemCard
            key={item.id}
            item={item}
            // cartItems={cartItems}
            // setCartItems={setCartItems}
            addToCart={addToCart}
        />
        )
    })

    return (
        <>
            <div className="products">
                {allItems}
            </div>
        </>
    )

}

export default ItemsContainer