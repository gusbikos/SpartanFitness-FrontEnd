// import axios from "axios"
import GymClass from "./GymClass"

const GymClassContainer = ({ gymClasses, setGymClasses, user }) => {
    
    const allClasses = gymClasses.map((gymClass) => {
        return (
            <GymClass
                key={gymClass.id}
                gymClass={gymClass}
                user={user}
                setGymClasses={setGymClasses}
            />
        )
    })

    return (
        <div>
            {allClasses}
        </div>
    )
}

export default GymClassContainer