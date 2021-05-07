import React from "react"
import ItemCard from "./ItemCard"

const ItemsContainer = ({ items, addToCart }) => {
    // console.log(items)
    // USE ALERT LOOK IT UP

    const allItems = items.map((item , index) => {
        return (
        <ItemCard
            key={index}
            item={item}
            addToCart={addToCart}
        />
        )
    })

    return (
            <div className="products">
                {allItems}
            </div>
    )

}

export default ItemsContainer