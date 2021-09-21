import { useState } from "react";

const BreedSearch = (props) => {

    const [breedSearch, setBreedSearch] = useState("")

    const [currentBreedList, setCurrentBreedList] = useState([{ name: "" }])

    // handleChange takes the event object as the argument & sets the curent value of the form to the breedSearch using setBreedSearch
    const handleChange = (event) => {
        // console.log shows each letter renders in console
        // console.log(event.target.value)
        setBreedSearch(event.target.value)
        checkBreeds(event.target.value)
    }

    const checkBreeds = (name) => {
        let nameArray = name.split("")
        console.log(nameArray)
        let filteredBreeds = props.breeds.filter(breed => breed.name.split("").slice(0, nameArray.length).every((letter, index) => letter.toLowerCase() === nameArray[index].toLowerCase())) //.length=== nameArray.length) //letter === nameArray[index].toLowerCase()
        setCurrentBreedList(filteredBreeds)
    }

    // Search Bar Notes from Jordan:
    // const checkBreeds = (name) => {
    //     let nameArray = name.split("") // ["A", "f", "f"] - This is what the user has typed in
    //     console.log(nameArray)
    //     // filter method; with split method = splits array into individual characters
    //     // list of breeds
    //     // filter = shows true/falls to whatever we type in
    //     // slice = 1 parameter where it starts; second whre it shoudl end (length = entire array) = getting first character; length = number of characters 
    //     // every = checks every element in array that passes condition => returns true or false then; 
    //     let filteredBreeds = props.breeds.filter(breed =>  
            
            // Each "breed" that filter gives us
            // {
            //     "weight": {
            //     "imperial": "20 - 40",
            //     "metric": "9 - 18"
            //     },
            //     "height": {
            //     "imperial": "15 - 19",
            //     "metric": "38 - 48"
            //     },
            //     "id": 12,
            //     "name": "American Eskimo Dog",
            //     "country_code": "US",
            //     "bred_for": "Circus performer",
            //     "breed_group": "Non-Sporting",
            //     "life_span": "12 - 15 years",
            //     "temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
            //     "reference_image_id": "Bymjyec4m",
            //     "image": {
            //     "id": "Bymjyec4m",
            //     "width": 1000,
            //     "height": 802,
            //     "url": "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg"
            //     }
            //     },
    
        // ["A","m","e","r","i","c","a","n"," ", "E","s","k","i","m","o", " ", "D", "o", "g"]    
    //     breed.name.split("")
    
    //     // The user has typed in 3 characters: aff
    
    //     // ["A", "m", "e"] - ** REFERS TO OUR BREED NAME WHICH WAS SPLIT **
    //     .slice(0, nameArray.length)
        
    //     // Checks to see if every item in the array passes a certain condition
    //     // ['A','m','e'] = ['A', 'f', 'f']
    //     //   0   1   2
    //     //                         0     a         ===          a  ?????? YES
    //     //                         1     m         ===          f  ?????? NO
    //     //                         2     e         ===          f  ?????? NO                   
    //     .every((letter, index) => letter.toLowerCase() === nameArray[index].toLowerCase())) // This returns true IF every condition passes the requirements
        
    //     console.log(filteredBreeds)
    // }
  
    
    return (
        <div className = "breed">
            <form >
                <label htmlFor="breed">Breed: </label>
                <input type="text" id="breed" value={breedSearch} onChange={handleChange} />
                <button type="submit" id="newSearchButton">New Search</button>
            </form>

            {currentBreedList.map(item => (
                <div>
                    <h1>{item.name}</h1>
                    {item.name === "" ? "" : <img src={item.image.url} alt={item.name} />}
                    <h2>{item.temperament}</h2>
                </div>

            ))}


        </div>
    );
};

export default BreedSearch;