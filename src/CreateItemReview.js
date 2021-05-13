import { useState } from "react"

const ItemReview = ({ item, itemReview, setItemReview, handleAddItemReview }) => {
    const [rating, setRating] = useState("")
    const [review, setReview] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const formData = {
            rating: parseInt(rating),
            review: review,
            item_id: item.id,
        }

        fetch("http://localhost:4000/item_reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((review) => {
            console.log(review)
            // localStorage.setItem("itemId", review.id)
            handleAddItemReview(review)
        })
    }
    
    return (
        <div className="container">
        <h1>Add Review</h1>        
            <form onSubmit={handleSubmit}>
                <label>Review: </label>
                    <input
                        type="text"
                        name="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                <label>Rating: </label>
                    <input
                        type="text"
                        name="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                <button type="submit">Submit</button>  
            </form> 
        </div>
    )
}

export default ItemReview