import React from "react"
import { Link } from "react-router-dom"
// import { useHistory } from 'react-router-dom'

const NavBar = ({ user, setUser, cartItems }) => {

    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    return (
        <header className="row block center">
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/gym_classes">Classes</Link>
        </div>
        <div>
            <Link to="/items">Browse Store</Link>
        </div>
            {user ? (
            <>
                <Link to="/profile">Profile</Link> 
                <Link to="/cart_items">Cart ({cartItems.length})</Link>
                <Link to="/gym_classes">Scheduled Classes</Link>
                <Link to="/"><button onClick={logout}>Logout</button></Link>
            </>
            ) : (
            <>
                <Link to="/login">Login</Link> <Link to="/signup">Signup</Link>                
            </>
            )}
        </header>
    )
}

export default NavBar