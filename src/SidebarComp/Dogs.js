import React from 'react';



const Dogs = (props) => {
console.log(props)


    return (

        <div>
        {props.dogs.map(dog =>         
        <div>

<h2>{dog.url}</h2>
<h1>This is {dog.name} </h1>
<h2><img src={dog.image} /> </h2>
<h2>{dog.bio}</h2>
<h2>Age: {dog.age}</h2>
<h2>Gender: {dog.gender}</h2>
<h2>Breed: {dog.breed}</h2>
<h2>Fees: {dog.fees}</h2>
<button onClick={() => props.addToCart(dog)} >Meet Me</button>

</div>)}


</div>
    );
};

export default Dogs;