import axios from "axios"
import React, { useState } from "react"

const GymClassReview = ({ handleClassReview, classReview, setClassReview, user, gymClasses }) => {
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")
    const [showGymReview, setShowGymReview] = useState(false)
    // console.log(user.class_reviews)


    
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            description: description,
            rating: parseInt(rating),
            user_id: parseInt(user.id),
            // class_review: user.class_reviews
        }

        axios.post("/class_reviews", formData).then((response) => {
            console.log(response.data)
            handleClassReview(response.data)
        })
    }

    const handleClick = () => {
        // console.log(showGymReview)
        setShowGymReview(!showGymReview)
    }

    return (
        <div className="container">
            <h1>Add Review</h1>        
                <form onSubmit={handleSubmit}>
                    <label>Review: </label>
                        <input
                            type="textarea"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    <label>  Rating: </label>
                        <input
                            type="text"
                            name="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                        <div>
                            <button type="submit">Submit</button>  
                        </div>
                    
                </form> 
        </div>
    )

}

export default GymClassReview