import React from "react"
import ItemCard from "./ItemCard"

const ItemsContainer = ({ items, itemReviews, setItemReviews, handleAddItemReview, addToCart }) => {
    // console.log(items)
    // USE ALERT LOOK IT UP

    const allItems = items.map((item) => {
        return (
        <ItemCard
            key={item.id}
            item={item}
            itemReviews={itemReviews}
            setItemReviews={setItemReviews}
            handleAddItemReview={handleAddItemReview}
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