import CreateItemReview from "./CreateItemReview"
import Review from "./Review"
import React, { useState } from "react"


const ItemCard = ({ item, addToCart, itemReviews, setItemReviews, handleAddItemReview }) => {
    const [showReview, setShowReview] = useState(false)
    const { name, price, description, quantity, image } = item

    const addCartItems = () => {
        addToCart(item) 
    }

    const handleClick = () => {
        setShowReview(!showReview)
    }

    const postReview = itemReviews.map((itemReview) => {
        return (
                <Review
                    key={itemReview.id}
                    itemReview={itemReview}
                />
        )
    })

    return (
        <div className="products-list">
            <div>
                <img className="small" src={image} alt={description}/>
                <h1>{price}$</h1>
                <h2>{name}</h2>
                <h3>{description}</h3>
                <h3> Quantity: {quantity}</h3>
                <button onClick={() => addCartItems()}>Add To Cart</button>
                <button onClick={handleClick}>Add Review</button> 
                    { showReview ? (
                        <div>
                            <CreateItemReview
                                item={item}
                                itemReviews={itemReviews}
                                setItemReviews={setItemReviews}
                                handleAddItemReview={handleAddItemReview}
                            />
                                <div>
                                    {postReview}
                                </div>
                        </div>
                            ) : (
                                null
                        )
                    }
            </div>
        </div> 
    )
}

export default ItemCard