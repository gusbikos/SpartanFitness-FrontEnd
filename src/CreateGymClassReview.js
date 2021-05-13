import React, { useState } from "react"
import axios from "axios"

const CreateGymClassReview = ({ classRev, setItemReviews, user, deleteReviews }) => {
    console.log(classRev)
    const { id, description, rating } = classRev
    // console.log(classRev)
    const [showGymReview, setShowGymReview] = useState(false)

    const handleClick = () => {
        // console.log(showGymReview)
        setShowGymReview(!showGymReview)
    }

    const removeReview = () => {
        const classRevId = classRev.id
        const attributes = { user_id: user.id, description: classRev.description, rating: classRev.rating }
        axios.delete(`/class_reviews/${classRevId}`).then((response) => {
            deleteReviews(response.data)
        })
    }
    
    return (
        <div className="container">
            <h4>{description}</h4>
            <h2>{rating} ⭐️</h2> 
            <button className="delete-btn" onClick={() => removeReview()}>Delete</button>
        </div>
    )
}

export default CreateGymClassReview