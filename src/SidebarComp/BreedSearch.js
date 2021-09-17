import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const BreedSearch = (props) => {

    const [breedSearch, setBreedSearch] = useState("")

    const [currentBreed, setCurrentBreed] = useState({})

    // handleChange takes the event object as the argument & sets the curent value of the form to the breedSearch using setBreedSearch
    const handleChange = (event) => {
        // console.log shows each letter renders in console
        // console.log(event.target.value)
        setBreedSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // look through array props.breeds
        // if props.breeds.name matches breedSearch 
        // then set currentBreed to that item 

        // TRY2: 
        // useEffect(() => {
        // const results = props.breed.map(breed => breed.toLowerCase().includes(breedSearch));
        // setCurrentBreed(results);
        // }, [searchBreed]);

        // TRY 1: 
        // {props.breeds.map(item) => {
        //     if props.breeds.name === breedSearch {
        //         currentBreed === item
        //     }
        // }}

        // then conditionally render currentBreed on line 42
    }

    // console.log(props.breeds)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="breed">Breed: </label>
                <input type="text" id="breed" value={breedSearch} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>

            <select>
                {props.breeds.map(item => (
                    <option
                        // key={item.value}
                        // value={item.value}
                    >
                        {props.name}
                    </option>
                ))}
            </select>

            {/* {props.breeds.map(breed =>             
            <h1>Breed: {breed.name}</h1>
            /* <h3>{props.breeds.image}</h3> */
            /* <h3>Personality: {props.breeds.temperament}</h3> */
            /* <h3>Average size: {props.breeds.weight}</h3> )} */}




        </div>
    );
};

export default BreedSearch;