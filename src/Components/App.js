import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { useState, useEffect } from "react"

import Bella from "../Images/Bella.jpeg"
import Eddie from "../Images/Eddie.jpeg"
import Rupert from "../Images/Rupert.jpeg"
import Bobby from "../Images/Bobby.jpeg"
import Chihuahua from "../Images/Chihuahua.jpeg"
import Chow from "../Images/chow.jpeg"
import Doberman from "../Images/DobermanPinscher.jpeg"


// Sidebar: 
import { Switch, Route } from "react-router-dom"
import Home from "../SidebarComp/Home"
import Fees from "../SidebarComp/Fees"
import Dogs from "../SidebarComp/Dogs"
import DogKnowledge from "../SidebarComp/DogKnowledge"


function App() {

const [breeds, setBreeds] = useState([])

  useEffect(() => {
    const url ="https://api.thedogapi.com/v1/breeds"
    fetch(url)
    .then(response => response.json())
    .then(response =>setBreeds(response))
  },[])


  const [contact, setContact] = useState(
    [
      {
        organization: "Doggo Rescue Peeps",
        street: "1 Main Street",
        city: "Madeupcity, 00000, CA",
        phone: "111-222-3333",
        email: "doggorescuepeeps@gmail.com"
      }
    ]
  )

  const [whatToKnow, setWhatToKnow] = useState(
    [
      {
        headline: "Heck of a lot of Work",
        explanation: "Be sure you have time to exercise your pet, take care of their teeth, fur, and nails on a regular basis - just like a human. Depending on the type of dog this can be extremely time consuming - make sure you have a lot of time to spend with and on your dog!"
      },
      {
        headline: "Cost & Fees",
        explanation: "Dogs are a longterm investment. On average, people spend about $150/ per month for food and other basic necessities. This isn't including vet visits, flea and tick as well as heartworm prevention.. those additional expenses like check ups, vaccinations and emergency visits average at $1500 a year so make sure you have the budget to financially take care of a pet! "
      },
      {
        headline: "We all have Personalities/ Baggage",
        explanation: "Just like humans, dogs also have their own unique personalities and come with some kind of baggage which is why they landed at an adoption agency. Remember to be patient, and start training your dog immediately! The only reason a dog acts out is because of lack of empathy and training from its owners. Only humans are to blame."
      },
    ]
  )

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
      {
        image: `${Bella}`,
        name: "Bella",
        age: 4,
        breed: "mix",
        weight: "50 pounds",
        gender: "Female",
        bio: "Bella's perfect home would be with a person/people who are prepared to provide structure and lots of outlets for physical and mental exercise. She would love a yard/private place to run around but is doing great as an apartment dweller too! Bella is strong, so kids should be old enough to safely handle her energy and follow through with structure. Overall, she is a fun and lovable companion with a very sweet disposition! ",
        fees: "$300",
        id: 1
      },

      {
        image: `${Eddie}`,
        name: "Munchkin",
        age: 11,
        breed: "mix",
        weight: "4 pounds",
        gender: "Male",
        bio: "Munchkin has the typical tiny dog traits: he likes to bark at everything to protect his human! If he's not barking, he's sleeping on your lap.",
        fees: "$100",
        id: 2
      },

      {
        image: `${Rupert}`,
        name: "Rupert",
        age: "puppy",
        breed: "Chinese Shar Pei",
        weight: "45 pounds",
        gender: "Male",
        bio: "Rupert is a typical puppy! He loves to play, but he also listens to commands and will settle quickly. He loves to play with other dogs, but he will also snuggle and stay calm when settled.",
        fees: "$400",
        id: 3
      },

      {
        image: `${Bobby}`,
        name: "Bobby",
        age: 3,
        breed: "Pit Bull",
        weight: "65 pounds",
        gender: "Female",
        bio: "Bobby is a gentle giant! She loves to cuddle and be under a blanket. She’s pretty chill but can have some energetic moments. Naps are a big thing in her life and she loves to take advantage of them. She enjoys them more if you cuddle her while he naps.",
        fees: "$200",
        id: 5
      },
      {
        image: `${Chihuahua}`,
        name: "Maxwell",
        age: 3,
        breed: "Chihuahua",
        weight: "7 pounds",
        gender: "Male",
        bio: "Maxwell is a special dog who needs a special, child free home. He had a very tough upbringing and still has trust issues because of his early years. Since being in rescue, Maxwell has made considerable strides. Maxwell is very much a person-dog and wants to be with his person as much as possible. He will shadow his person around the house: supervise cooking, chores, and naps. Maxwell takes a while to warm up for petting but does seek close contact (lap sitting) almost immediately.",
        fees: "$200",
        id: 6
      },
      {
        image: `${Chow}`,
        name: "Coco",
        age: 2,
        breed: "Chow Chow",
        weight: "65 pounds",
        gender: "Female",
        bio: "Coco is a young, sweet, and very energetic girl. She is a tripod, but she is not handicapped in any way! She can outrun and outplay the most active of dogs. She’s super affectionate, great with other dogs, crate trained, rides well in a vehicle, and just enjoys life to the fullest. Coco’s more than ready to find that perfect family and her new forever home.",
        fees: "$200",
        id: 5
      },
      {
        image: `${Doberman}`,
        name: "Clover",
        age: 3,
        breed: "Doberman Pinscher",
        weight: "65 pounds",
        gender: "Female",
        bio: "Clover does well with dogs but is not recommended for cats. Clover is recommended for older kids since she sometimes jumps on people. Clover is house and crate trained. However, she may whine initially in the crate before settling. She is working on leash training. Clover is considered a flight risk.",
        fees: "$200",
        id: 5
      }
    ]
  )

  const [cartItems, setCartItems] = useState([])

  // method for button
  const addToCart = (dog) => {
    let currentCartItems = cartItems
    // console.log(cartItems)
    currentCartItems.unshift(dog)
    setCartItems(currentCartItems);
  };


  return (
    <div className="App" >
      <Header />

      {/* <div key={reasons.id}>{reasonsData}</div> */}

      <Sidebar />
      <Switch>
        <Route exact path="/home">
          <Home reasons={reasons} />
        </Route>


        <Route exact path="/dogs">
         <Dogs dogs={dogs} addToCart={addToCart} />
        </Route>

        <Route exact path="/fees">
          <Fees whatToKnow={whatToKnow} />
        </Route>

        <Route exact path="/info">
         <DogKnowledge breeds={breeds} />
        </Route>

        {/* <Route exact path="/application">
          <Application handleAdd={addToCart} cartItems={cartItems} />
        </Route> */}
      </Switch>

      

      {contact.map(contact => <Footer contact={contact} />)}
      


    </div>
  );
}

export default App;
