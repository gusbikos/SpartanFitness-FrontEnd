const GymClass = ({ gymClass, setGymClasses, user }) => {
    const { time, date, booked } = gymClass

    console.log(gymClass.booked)
    // console.log(user)

    // const bookedClass = () => {
    //     if (booked === true) {
    //         return !booked
    //     }
    // }

    return (
        
            <div>
                <h2>{time}</h2>
                <h2>{date}</h2>
                <h2>{booked}</h2>
            </div>
    )
}

export default GymClass