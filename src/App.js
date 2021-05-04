import { useState, useEffect } from 'react'
import { Route, Switch, } from 'react-router-dom'
import axios from "axios"
// import { Link } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import GymClassContainer from './GymClassContainer'
import ItemsContainer from './ItemsContainer'

const App = () => {
  const [user, setUser] = useState(null)

  console.log(user)
  
  useEffect(() => {
    axios.get("/me")
      .then((response) => {
        console.log(response)
        setUser(response.data)
      })
  }, [])

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <main>
        <Switch>
          <Route exact path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route exact path="/signup">
            <SignUp setUser={setUser}/>
          </Route>
          <Route exact path="/profile">
            { user ? (
              <Profile user={user} setUser={setUser}/>
            ) : (
              <h1> You must login to see this page!</h1>
            )}
          </Route>
          <Route exact path="/gym_classes">
            <GymClassContainer/>
          </Route>
          <Route exact path="/items">
            <ItemsContainer/>
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
