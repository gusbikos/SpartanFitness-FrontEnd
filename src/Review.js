const Review = ({ itemReview, setItemReview }) => {
    const { review, rating } = itemReview

    return ( 
        <div>
            <h4>{review}</h4>
            <h4>{rating} ⭐️</h4>
        </div>
    )
}

export default Review