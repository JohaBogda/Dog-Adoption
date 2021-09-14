import React from 'react';


const Dogs = (props) => {
console.log(props)
// const dogList = () => {
//     fetch("API")
//         .then(response => response.json())
//         .then()
// }

    return (
        <div>
            <button onClick={() => props.addToCart(props.dog)} >Adopt Me</button>
            <h2>{props.dogs.url}</h2>
           <h1>Name: {props.dogs.name} </h1>
           <h2>Bio: {props.dogs.bio}</h2>
           <h2>Age: {props.dogs.age}</h2>
           <h2>Breed: {props.dogs.breed}</h2>
           <h2>Fees: {props.dogs.fees}</h2>
        
        </div>
    );
};

export default Dogs;