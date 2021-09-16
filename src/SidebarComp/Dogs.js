import React from 'react';



const Dogs = (props) => {
    console.log(props)


    return (

        <div className="AllDogs">
            {props.dogs.map(dog =>
                <div className="EachDog">

                  <div className="buttonPosition">
                    <h1>This is {dog.name} </h1>
                    <button onClick={() => props.meetMe(dog)} >Meet Me</button>
                    </div>
                    <h2><img src={dog.image} /> </h2>
                    <h2>{dog.bio}</h2>

                    <div className="stats">
                        <h2>Age: <br/> {dog.age}</h2>
                        <h2>Gender: <br/> {dog.gender}</h2>
                        <h2>Breed: <br/> {dog.breed}</h2>
                        <h2>Fees: <br/> {dog.fees}</h2>
                    </div>
                    
                </div>)}


        </div>
    );
};

export default Dogs;