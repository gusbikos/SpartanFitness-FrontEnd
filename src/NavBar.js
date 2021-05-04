import React from "react"
import { Link } from "react-router-dom"
// import { useHistory } from 'react-router-dom'

const NavBar = ({ user, setUser }) => {

    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    return (
        <header>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            {user ? (
            <>
                <Link to="/profile">Profile</Link>
                <button onClick={logout}>Logout</button>
            </>
            ) : (
            <>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
            </>
            )}
        </div>
        </header>
    )
}

export default NavBar