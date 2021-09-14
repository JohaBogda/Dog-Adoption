import React from 'react';


const Application = (props) => {
    console.log(props.cartItems)

    return (
        
        <div>
           {props.cartItems.map((dog) => (<div>{dog.name}</div>))}
        </div>
    );
};

export default Application;