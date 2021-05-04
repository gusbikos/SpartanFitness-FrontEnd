import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"


const SignUp = ({ setUser }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/signup', formData)
            .then((response) => {
                const { user, token } = response.data
                localStorage.setItem("token", token)
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                setUser(user)
                history.push('/profile')
            })
            .catch((error) => {
                setErrors(error.response.data.errors)
            })
    }

    const { name, email, password } = formData

    return (
        <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <label>Username</label>
                <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
                />
    
            <label>Email</label>
                <input 
                    type="text"
                    name="email" 
                    autoComplete="off"
                    value={email} 
                    onChange={handleChange} 
                />
            <label>Password</label>
                <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handleChange}
                />
                {errors.map((error) => (
                    <p style={{ color: "red" }} key={error}>
                        {error}
                    </p>
                ))}
            <input type="submit" value="Signup" />
        </form>
    )
}

export default SignUp