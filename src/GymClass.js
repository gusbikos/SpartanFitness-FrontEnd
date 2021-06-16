const GymClass = ({ user }) => {

    if (user) {
    const setReview = user.class_reviews.map((classRev) =>{
        return (
            <div>
                <h5>{classRev.description}</h5>
                <h5>{classRev.rating}</h5>
            </div>
        )
    })
    } else{
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
            <div>
                {/* <h2>{time}</h2>
                <h2>{date}</h2>
                <h2>{booked}</h2>
                <h2>{style}</h2> */}
                {/* {setReview} */}
            </div>
    )
}

export default GymClass