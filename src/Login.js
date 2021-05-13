import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import "./Login.css"
import moment from 'moment'

const Login = ({ setUser, setCalendarData, }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    console.log(errors)

    const responseGoogle = (response) => {
        // console.log(response.tokenId)
        if (response.tokenId) {
            axios
                .post("/login/google", null, {
                    headers: {
                    Authorization: `Bearer ${response.tokenId}`,
                    },
                })
                .then((response) => {
                    const { user, token } = response.data
                    localStorage.setItem("token", token)
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                    setUser(user)

                    // const acceptedData = user.gym_classes.map((classObj) => {
                    //     return {
                    //         id: classObj.id,
                    //         time: classObj.time,
                    //         date: moment.utc(classObj.date).format("YYYY-MM-DD"),
                    //         style: classObj.style,
                    //         booked: classObj.booked,
                    //     }
                    // })
                    //     console.log(acceptedData)
                    //     setCalendarData(acceptedData)
                        history.push("/profile")
                })
                .catch((error) => {
                    setErrors(error.response.data.errors)
                })
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/login', formData)
            .then((response) => {
                const { user, token } = response.data
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                setUser(user)
                // const acceptedData = user.gym_classes.map((classObj) => {
                //     return {
                //         id: classObj.id,
                //         time: classObj.time,
                //         date: moment.utc(classObj.date).format("YYYY-MM-DD"),
                //         style: classObj.style,
                //         booked: classObj.booked,
                //     }
                // })
                    // console.log(acceptedData)
                    // setCalendarData(acceptedData)
                    history.push("/profile")
            })
            .catch((error) => {
                setErrors(error.response.data.errors)
            })
        }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>Username</label>
                <input
                    type="text"
                    name="username"
                    autoComplete="off"
                    className="login-input"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="username"
                />

                <br/>


            <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    className="login-input"
                    onChange={handleChange}
                    autoComplete="current-password"
                />
                {errors.map((error) => (
                    <p style={{ color: "black" }} key={error}>
                        {error}
                    </p>
                ))}
                <input className="login-button" type="submit" value="Login" />
            </form>
            <hr />
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
            />
        </div>
    )
}

export default Login