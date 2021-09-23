import React, { useContext } from 'react';
// import to use context-provider: useContext AND variable DataContext from boilerplate
import DataContext from '../contexts/DataContext';


const Dogs = () => {
    // props not necessary anymore when using context-provider!
    // console.log(props)

    // necessary for Context-Provider: 
    const data = useContext(DataContext)
    console.log("we're in the dogs component", data)

    return (

        <div className="AllDogs">

            {/* necessary for Context-Provider; use data instead of props: */}
            {data.dogs.map(dog =>
                <div className="EachDog">

                    <div className="buttonPosition">
                        <h1>This is {dog.name} </h1>
                        <button onClick={() => data.meetMe(dog)} >Meet Me</button>
                    </div>
                    <h2><img src={dog.image} /> </h2>
                    <h2>{dog.bio}</h2>

                    <div className="stats">
                        <h2>Age: <br /> {dog.age}</h2>
                        <h2>Gender: <br /> {dog.gender}</h2>
                        <h2>Breed: <br /> {dog.breed}</h2>
                        <h2>Fees: <br /> {dog.fees}</h2>
                    </div>

                </div>)}


        </div>
    );
};

export default Dogs;