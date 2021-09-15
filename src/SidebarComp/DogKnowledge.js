import { useState } from "react";


// The Dog API: 
// API key: edcbab02-96db-4643-b194-54722888fc64
// URL: https://api.thedogapi.com/v1/images/search

// https://thedogapi.com/v1/images?api_key=ABC123
// Only shows empty array: 
// https://api.thedogapi.com/v1/images?api_key=edcbab02-96db-4643-b194-54722888fc64

// https://thedogapi.com/v1/images?headers[“x-api-key”] = "edcbab02-96db-4643-b194-54722888fc64"


const DogKnowledge = (props) => {

    const [breedSearch, setBreedSearch] = useState("")

    const [currentBreed,setCurrentBread] = useState({})

    const handleChange = (event) => {
        setBreedSearch (event.target.value) 
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // look through array props.breeds
        // if props.breeds.name matches breedSearch 
        // then set currentBreed to that item 

        // then conditionally render currentBreed on line 42
    }

  console.log(props.breeds)
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="breed">Breed: </label>
                <input type="text" id="breed" value={breedSearch} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>

            {/* {props.breeds.map(breed =>             
            <h1>Breed: {breed.name}</h1>
            /* <h3>{props.breeds.image}</h3> */
            /* <h3>Personality: {props.breeds.temperament}</h3> */
            /* <h3>Average size: {props.breeds.weight}</h3> )} */}


        </div>
    );
};

export default DogKnowledge;