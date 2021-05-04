import axios from "axios"
import React, { useState } from "react"

const Profile = ({ user, setUser }) =>  {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        password: user.password,
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
      // TODO: update the user's profile
      // PATCH /me
        axios.patch("/me", formData)
        .then((response) => {
            console.log(response);
            setUser(response.data)
        })
      // send form data
      // update the user object in state
    }

    const { name, email, password }  = formData

    return (
        <form onSubmit={handleSubmit}>
        <h1>{user.name}'s Profile</h1>
        <label>Edit name</label>
            <input
                type="text"
                name="name"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
        <label>Edit email</label>
            <input
                type="email"
                name="email"
                autoComplete="off"
                value={email}    
                onChange={handleChange}
            />
        <label>Change Password</label>
            <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}    
                onChange={handleChange}
            />
        <input type="submit" value="Update" />
        </form>
    )
}

export default Profile