import { useState, useEffect } from 'react'
import { Route, Switch, } from 'react-router-dom'
import axios from "axios"
import './App.css'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import GymClassContainer from './GymClassContainer'
import ItemsContainer from './ItemsContainer'
import CartItems from './CartItems'

const App = () => {
  const [user, setUser] = useState(null)
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [gymClasses, setGymClasses] = useState([])
  // console.log(id)
  // console.log(items.id)
  // console.log(user)



  useEffect(() => {
    axios.get("/me").then((response) => {
        // console.log(response.data)
        setUser(response.data)
    })
  }, [] )

  useEffect(() => {
    axios.get("/items").then((response) => {
        // console.log(response.data)
        setItems(response.data)
      })
  }, [] )

  useEffect(() => {
    axios.get("/gym_classes").then((response) => {
      setGymClasses(response.data)
    })
  }, [] )

  useEffect(() => {
    axios.get("/cart_items").then((response) => {
      console.log(response.data);
      setCartItems(response.data)
    })
  }, [] )

  const addToCart = (item) => {
    console.log('I am in cart')
    const cartItemParams = { user_id: user.id, item_id: item.id }
    axios.post(`/cart_items`, cartItemParams).then((response) => {
    console.log(response.data)
    })
    setCartItems([...cartItems, item])
  }

  const filterCartItems = (id) => {
    const filteredItems = cartItems.filter(cartItem => cartItem.id === id)
    // console.log(filteredItems)
    setCartItems(filteredItems)
}

  // const addToCart = (item) => {
  //   console.log('clicked')
  //   const product = cartItems.find(cartItem => cartItem.id === item.id)
  //   if (product) {
  //     setCartItems(
  //       cartItems.map((cartItem) => 
  //         cartItem.id === item.id ? { ...product, quantity: product.quantity + 1 } : cartItem
  //       )
  //     )
  //   } else {
  //     setCartItems([...cartItems, { ...item, quantity: item.quantity }])
  //   }
  // }

  return (
    <div className="App">
      <NavBar 
        user={user} 
        setUser={setUser}
        cartItems={cartItems}
      />
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
                <Profile 
                  user={user} 
                  setUser={setUser}
                />
                ) : ( 
                <h1> You must login to see this page!</h1>
                )}
          </Route>
          <Route exact path="/gym_classes">
            <GymClassContainer 
              gymClasses={gymClasses} 
              setGymClasses={setGymClasses} 
              user={user}
            />
          </Route>
          <Route exact path="/items">
            <div className="block col-2">
          <h2>Products</h2>
            <ItemsContainer 
              items={items} 
              addToCart={addToCart}
              cartItems={cartItems} 
              setCartItems={setCartItems} 
              user={user}
            />
            </div>
          </Route>
          <Route exact path="/cart_items">
            <div className="block col-2">
              <h2>Cart</h2>
              <CartItems
                items={items}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
