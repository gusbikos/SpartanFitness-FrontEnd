import GymClass from './GymClass'
import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import GymClassReview from './GymClassReview'
import CreateGymClassReview from './CreateGymClassReview'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment'
import axios from 'axios'

const GymClassContainer = ({ gymClasses, setGymClasses, user, itemReviews, setItemReviews, date, setDate, calendarData }) => {
    const [calendarClickId, setCalendarClickId] = useState("")
    const [classReview, setClassReview] = useState([])
    // console.log(showGymReview)

    useEffect(() => {
        axios.get("/class_reviews").then((response) => {
            // console.log(response.data)
            setClassReview(response.data)
        })
    }, [] )

    const handleClassReview = (classReviewObj) => {
        const updatedClassReview = [...classReview, classReviewObj]
        console.log(updatedClassReview)
        setClassReview(updatedClassReview)
    }

    
    const setReview = () => {
        return classReview.map((classRev) =>{
        // console.log(classRev)
            return (
                <div>
                    <CreateGymClassReview
                        key={classRev.id}
                        classRev={classRev}
                        setItemReviews={setItemReviews}
                        deleteReviews={deleteReviews}
                        user={user}
                    />
                </div>
            )
    }   )}

    const allClasses = gymClasses.map((gymClass) => {
        return (
            <>
                {/* {gymClass.id === parseInt(calendarClickId) ? ( */}
                    <div>
                        <div>
                            <GymClass
                                key={gymClass.id}
                                gymClass={gymClass}
                                user={user}
                                setGymClasses={setGymClasses}
                                // date={date}
                                // setDate={setDate}
                                handleClassReview={handleClassReview}
                                classReview={classReview}
                            />
                        </div>
                    </div>
                    {/* ) : null  */}
                {/* } */}
            </>
        )
    })

    const deleteReviews = (review) => {
        const removeOneReview = classReview.filter((rev) => rev.id !== review.id)
        setClassReview(removeOneReview)
    }

    // const clickToSchedule = user.gym_classes.map((gymClass) => {
    //     return (
    //         <>
    //             {gymClass.id === parseInt(calendarClickId) ? (
    //                 <div >
    //                     <div>
    //                         <h1>{gymClass.time}</h1>
    //                         <h3>{gymClass.style}</h3>
    //                         <h3>{gymClass.booked}</h3>
    //                         <h3>Date: {moment.utc(gymClass.date).format("YYYY-MM-DD")}</h3>
    //                         <h3>When: {moment.utc(gymClass.date).format("dddd, MMMM Do YYYY")}</h3>
    //                     </div>
    //                     <GymClass
    //                     key={gymClass.id}
    //                     gymClass={gymClass}
    //                     user={user}
    //                     setGymClasses={setGymClasses}
    //                     date={date}
    //                     setDate={setDate}
    //                 />
    //                 </div>
    //                 ) : null
    //             }
    //         </>
    //     )
    // })

    // const handleClick = () => {
    //     // console.log(showGymReview)
    //     setShowGymReview(!showGymReview)
    // }

    const handleDateClick = (title) => {
        setCalendarClickId(title)
        console.log(title)
    }

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                eventClick={(e) => handleDateClick(e.event.id)}
                events={[
                    { title: "KickBoxing 5:00 P.M Beginner" , date: "2021-05-10"},
                    { title: "KickBoxing 7:00 P.M Advanced", date: "2021-05-10"},
                    { title: "Boxing 5:00 P.M Beginner", date: "2021-05-11" },
                    { title: "Boxing 7:00 P.M Advanced", date: "2021-05-11" },
                    { title: "Muay Thai 5:00 P.M Beginner", date: "2021-05-12" },
                    { title: "Muay Thai 7:00 P.M Advanced", date: "2021-05-12" },
                    { title: "Jui-Jitsu 5:00 P.M Beginner", date: "2021-05-13" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-05-13" },
                    { title: "KickBoxing 5:00 P.M Beginner", date: "2021-05-14" },
                    { title: "KickBoxing 7:00 P.M Advanced", date: "2021-05-14" },
                    { title: "Boxing 5:00 P.M Beginner", date: "2021-05-17" },
                    { title: "Boxing 7:00 P.M Advanced", date: "2021-05-17" },
                    { title: "Mauy Thai 5:00 P.M Beginner", date: "2021-05-18" },
                    { title: "Mauy Thai 7:00 P.M Advanced", date: "2021-05-18" },
                    { title: "KickBoxing 5:00 P.M Beginner", date: "2021-05-19" },
                    { title: "KickBoxing 7:00 P.M Advanced", date: "2021-05-19" },
                    { title: "Jui-Jitsu 5:00 P.M Beginner", date: "2021-05-20" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-05-20" },
                    { title: "Boxing 5:00 P.M Beginner", date: "2021-05-21" },
                    { title: "Boxing 7:00 P.M Advanced", date: "2021-05-21" },
                    { title: "KickBoxing 5:00 P.M Beginner" , date: "2021-05-24"},
                    { title: "KickBoxing 7:00 P.M Advanced", date: "2021-05-24"},
                    { title: "Boxing 5:00 P.M Beginner", date: "2021-05-25" },
                    { title: "Boxing 7:00 P.M Advanced", date: "2021-05-25" },
                    { title: "Muay Thai 5:00 P.M Beginner", date: "2021-05-26" },
                    { title: "Muay Thai 7:00 P.M Advanced", date: "2021-05-26" },
                    { title: "Jui-Jitsu 5:00 P.M Beginner", date: "2021-05-27" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-05-27" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-05-28" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-05-28" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-05-31" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-05-31" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-01" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-01" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-02" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-02" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-03" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-03" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-04" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-04" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-07" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-07" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-08" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-08" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-09" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-09" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-10" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-10" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-11" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-11" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-14" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-14" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-15" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-15" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-16" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-16" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-17" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-17" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-18" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-18" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-21" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-21" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-22" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-22" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-23" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-23" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-24" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-24" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-25" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-25" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-28" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-06-28" },
                    { title: "Jui-Jitsu 7:00 P.M Advanced", date: "2021-05-27" }
                ]}
            />
            <div>
                {allClasses}
            </div>
            <div>
                <GymClassReview
                    user={user}
                    gymClasses={gymClasses}
                    handleClassReview={handleClassReview}
                    key={classReview.id}
                    classReview={classReview}
                    setClassReview={setClassReview}
                />
            </div>
            { user ? (
                setReview()
            ) : (
                <div>
                    Loading...
                </div>
            )
        }
                
        </div>

    )
}

export default GymClassContainer