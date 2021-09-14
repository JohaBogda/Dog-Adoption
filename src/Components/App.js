import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { useState } from "react"
// import background from "./img/pawprints.jpeg"

// Sidebar: 
import { Switch, Route } from "react-router-dom"
import Home from "../SidebarComp/Home"
import Fees from "../SidebarComp/Fees"
import Dogs from "../SidebarComp/Dogs"
import Application from '../SidebarComp/Application';
import DogFacts from './FunFacts';



function App() {

    const [dogs, setDogs] = useState(
      
      [
        {img: "pawprints1.jpeg",
      name: "Walter",
      age: 3,
      breed: "mix",
      weight: "14 pounds",
      bio: "happy dog",
      fees: "$200",
      id: 1},

      {img: "pawprints1.jpeg",
      name: "Dottie",
      age: 3,
      breed: "mix",
      weight: "14 pounds",
      bio: "sad dog",
      fees: "$200",
      id: 1},
      ]      
    )
 
  const [cartItems,setCartItems] = useState([])

  // method for button
  const addToCart = (dog) => {
    let currentCartItems = cartItems 
    // console.log(cartItems)
    currentCartItems.unshift(dog)
    setCartItems(currentCartItems);
  };



  return (
    <div className="App">
      <Sidebar />
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
          
                <Route exact path="/dogs">
                    {dogs.map(dogs => <Dogs dogs = {dogs} addToCart = {addToCart}/>)}
                </Route>

                <Route exact path="/fees">
                    <Fees />
                </Route>

                <Route exact path="/application">
                    <Application handleAdd = {addToCart} cartItems = {cartItems}/>
                </Route>
            </Switch>

      <Header />
      <Footer />
          
    </div>
  );
}

export default App;
