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



function App() {

    const [reasons, setReasons] = useState(

      [
        {
        reason: "1. You’re Saving More Than One Life",
         explanation: "It goes without saying that when you adopt a rescue pet, you’re saving a life—but you’re actually saving more than one. By adopting, you’re helping make space for another animal in need and helping to give them the opportunity to become beloved pets."
      },
      { 
        reason: "2. Unconditional Love! What Could Be Better?",
        explanation: "Many people worry about connecting with a rescued dog, but shelter dogs have so much love to give—and they won’t ever stop giving it to you once you let them into your heart!"
        },
      {
        reason: "3. You’re Giving a Second Chance to a Deserving Animal",
        explanation: "Beyond just helping an animal in need, you’re giving a rescue an opportunity to find their voice; to be themselves and get a second chance to become a dog beyond the walls of shelter or rescue. You truly give them the keys to start anew in a life where second chances can often be hard to come by. ",
      },
      {
        reason: "4.  You Get a Chance to Stay Active",
        explanation: "Maybe you’re trying to live a more active lifestyle, or maybe you’re just looking for a new adventure. Either way, a new four-legged friend gives you a reason to get outdoors more and stretch your legs!",
      },
      {
        reason: "5.  You Have Someone New to Shop For ",
        explanation: "It’s always fun to spoil your pets and bringing home a new furry family member gives you a reason to do just that. You can enjoy all the retail therapy you want while making sure your new rescue dog is living in the lap of luxury.",
      },
      {
        reason: "6. You’re Fighting Back Against Cruel Breeding",
        explanation: "Puppies purchased at pet stores almost always come from cruel breeding facilities where dogs are confined to small, filthy spaces and receive little to no veterinary care. By adopting from your local shelter or rescue, you are giving back to your community instead of helping cruel breeders profit.",
      },
      {
        reason: "7. Destress and Unwind with Someone Who Will Never Judge You",
        explanation: "Life is full of stresses, but your rescue dog is always there to listen. They won’t ever judge you or let you down. Taking some time to destress with your furry friends can help you unwind and keep you at peace. ",
      },
      {
        reason: "8. Increase Your Social Interactions",
        explanation: "Getting out there with your pet can also help you make new human friends, too! You can befriend other pet parents, or even meet someone special when you’re making the rounds at your local dog park or dog-friendly café.",
      },
      {
        reason: "9. You’ll Have a Lifelong BFF",
        explanation: "What could be better than having a lifelong friend? In your time with your rescue dog, you’ll have a confidante, a pal and ultimately—a beloved family member. You’ll never feel lonely, and in return neither will your shelter dog.",
      },
      {
        reason: "10. Life Will Never Be Boring Again",
        explanation: "One thing that’s for certain, is that life with a rescue dog brings big changes—in the best way! Say goodbye to predictable nights and your boring routine and say hello to a new lease on life. Your new pet will keep life exciting, fresh and full of love. ",
      },
      
    ]
    )

    const [dogs, setDogs] = useState(
      
      [
        {img: "pawprints1.jpeg",
      name: "Walter",
      age: 3,
      breed: "Dachshund",
      weight: "14 pounds",
      bio: "happy dog",
      fees: "$200",
      id: 1},

      {img: "pawprints1.jpeg",
      name: "Dottie",
      age: 3,
      breed: "mix",
      weight: "20 pounds",
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


// const reasonsData = reasons.map(reasons => <Home something = {reasons} />)
// console.log(reasonsData)

  return (
    <div className="App">

    {/* <div key={reasons.id}>{reasonsData}</div> */}

      <Sidebar />
            <Switch>
                <Route exact path="/home">
                    {reasons.map(reasons => <Home reasons = {reasons} />)}
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
