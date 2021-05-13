import { useState, useEffect } from 'react'
import { Route, Switch, } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import GymClassContainer from './GymClassContainer'
import ItemsContainer from './ItemsContainer'
import CartItems from './CartItems'
import HomePage from './HomePage'
// import 'react-calendar/dist/Calendar.css'
// import Calendar from 'react-calendar'
import moment from 'moment'
import { useHistory } from "react-router-dom"

const App = () => {
  const [user, setUser] = useState(null)
  const [items, setItems] = useState([])
  const [itemReviews, setItemReviews] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [calendarData, setCalendarData] = useState([])
  const [purchased, setPurchased] = useState(false)
  // const [date, setDate] = useState(new Date())
  const [gymClasses, setGymClasses] = useState([])
  const history = useHistory()

  useEffect(() => {
    axios.get("/me").then((response) => {
      // console.log(response.data.gym_classes)
      setUser(response.data)

      // const acceptedData = response.data.gym_classes.map((classObj) => {
      //   return {
      //     id: classObj.id,
      //     time: classObj.time,
      //     date: moment.utc(classObj.date).format("YYYY-MM-DD"),
      //     style: classObj.style,
      //     booked: classObj.booked,
      //   }
      // })
      // console.log(acceptedData)
      // setCalendarData(acceptedData)
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
      // console.log(response.data.item);
      setCartItems(response.data)
    })
  }, [] )

  useEffect(() => {
    axios.get("/item_reviews").then((response) => {
      // console.log(response.data)
      setItemReviews(response.data)
    })
  }, [] )

  useEffect(() => {
    total()
  }, [cartItems] )

  const total = () => {
    let totalVal = 0
    for ( let i = 0; i < cartItems.length; i++) {
      totalVal += cartItems[i].item.price
      // console.log(totalVal)
    }
    setCartTotal((totalVal))
  }

  const addToCart = (item) => {
    console.log(item.quantity, "BEFORE FETCH")
    const cartItemParams = { user_id: user.id, item_id: item.id }
    axios.post("/cart_items", cartItemParams).then((response) => {
      console.log(response.data.item.quantity, 'AFTER FETCH')
      setCartItems([...cartItems, response.data])
      const updatedItems = items.map((itemObj) => {
        // console.log(itemObj)
        if (itemObj.id === item.id) {
          return { ...itemObj, quantity: itemObj.quantity - 1 } 
        } else {
          return itemObj
          }
      })
      setItems(updatedItems)
    })
  }

  const deleteItems = (item) => {
    const removeOneItem = cartItems.filter((cartItem) => cartItem.id !== item.id)
    console.log(item)
    setCartItems(removeOneItem)
    const updatedItems = items.map((itemObj) => {
      if (itemObj.id === item.item_id) {
        return { ...itemObj, quantity: itemObj.quantity + 1 }
      } else {
        return itemObj 
      }
    })
    setItems(updatedItems)
  }

  const handleAddItemReview = (reviewObj) => {
    const updatedItemReview = [...itemReviews, reviewObj]
    setItemReviews(updatedItemReview)
  } 

  const handlePurchase = () => {
    alert("Thank You For Your Purchase!!")
    setPurchased(!purchased)
    setCartItems([])
    history.push("/items")
}

  // const onChange = (date) => {
  //   setDate(date)
  //   // axios.post("/")
  //   const updatedClasses = [...gymClasses, date]
  //   setGymClasses(updatedClasses) 
  //   console.log(updatedClasses)
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
            <Login 
              setUser={setUser}
              setCalendarData={setCalendarData}
              gymClasses={gymClasses}
            />
          </Route>
          <Route exact path="/signup">
            <SignUp 
              setUser={setUser}
            />
          </Route>
          <Route exact path="/profile">
            { user ? (
                <Profile 
                  user={user} 
                  setUser={setUser}
                  setCalendarData={setCalendarData}
                  calendarData={calendarData}
                />
                ) : ( 
                <h1> You must login to see this page!</h1>
                )}
          </Route>
          <Route exact path="/gym_classes">
            {/* <Calendar 
              value={date}
              onChange={onChange}
            />
              {console.log(date)}
              {date.toString()}  */}
            <GymClassContainer 
              gymClasses={gymClasses} 
              setGymClasses={setGymClasses} 
              user={user}
              setItemReviews={setItemReviews}
              itemReviews={itemReviews}
              // date={date}
              // setDate={setDate}
            />
          </Route>
          <Route exact path="/items">
            <div className="block col-2">
              <h2>Products</h2>
              <ItemsContainer 
                items={items} 
                setItems={setItems}
                addToCart={addToCart}
                cartItems={cartItems} 
                setCartItems={setCartItems}
                handleAddItemReview={handleAddItemReview}
                itemReviews={itemReviews}
                setItemReviews={setItemReviews}
                user={user}
              />
            </div>
          </Route>
          <Route exact path="/cart_items">
            <div className="block col-2">
              <h2>Cart Total: ${cartTotal}</h2>
              <h2>Total Items: {cartItems.length}</h2>
              <button className="button" onClick={handlePurchase}>Make Purchase</button>
              <CartItems
                items={items}
                setItems={setItems}
                cartItems={cartItems}
                setCartItems={setCartItems}
                deleteItems={deleteItems}
                cartTotal={cartTotal}
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
