import React from "react"
import ItemCard from "./ItemCard"

const ItemsContainer = ({ items, itemReviews, setItemReviews, handleAddItemReview, addToCart }) => {

    const allItems = items.map((item) => {
        
        return (
            <div>
                <ItemCard
                    key={item.id}
                    item={item}
                    itemReviews={itemReviews}
                    setItemReviews={setItemReviews}
                    handleAddItemReview={handleAddItemReview}
                    addToCart={addToCart}
                />
            </div>
        )   
    })

    return (
            <div className="products">
                {allItems}
            </div>
    )

}

export default ItemsContainer