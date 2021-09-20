import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

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
        // filter method; with split method = splits array into individual characters
        // list of breeds
        // filter = shows true/falls to whatever we type in
        // slice = 1 parameter where it starts; second whre it shoudl end (length = entire array) = getting first character; length = number of characters 
        // every = checks every element in array that passes condition => returns true or false then; 
        let filteredBreeds = props.breeds.filter(breed => breed.name.split("").slice(0, nameArray.length).every((letter, index) => letter.toLowerCase() === nameArray[index].toLowerCase())) //.length=== nameArray.length) //letter === nameArray[index].toLowerCase()
        setCurrentBreedList(filteredBreeds)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        checkBreeds(breedSearch)

    }

    // console.log(props.breeds)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="breed">Breed: </label>
                <input type="text" id="breed" value={breedSearch} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>

            {currentBreedList.map(item => (

                // key={item.value}
                // value={item.value}

                <div>    <p>{item.name}</p>

{
                item.name === "" ? "" : <img src={item.image.url} alt={item.name} />
            } </div>

            ))}

            {/* {currentBreedList.map(item => (
                {item.name}
            ))} */}

            {/* <select>
                {currentBreedList.map(item => (
                    <option
                        // key={item.value}
                        // value={item.value}
                    >
                        {item.name}
                    </option>
                ))}
            </select> */}

            {/* {props.breeds.map(breed =>             
            <h1>Breed: {breed.name}</h1>
            /* <h3>{props.breeds.image}</h3> */
            /* <h3>Personality: {props.breeds.temperament}</h3> */
            /* <h3>Average size: {props.breeds.weight}</h3> )} */}




        </div>
    );
};

export default BreedSearch;