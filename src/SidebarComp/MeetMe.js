import React from 'react';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';

const MeetMe = (props) => {
const history = useHistory()

    useEffect(() => {
      if(props.dog.default) {
        history.push("/dogs")
      }
    }, [])

    return (
        <div>
        <div className="meetMe">
             <h1>Want to meet {props.dog.name}?</h1>
             <h2><img src={props.dog.image} /> </h2>
             <h1>Send us your info & we'll get back to you to setup a play date:</h1>
             <form id="form">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name"></input>

                <label htmlFor="email">Email: </label>
                <input type="text" id="email"></input>

                <label htmlFor="phone">Phone: </label>
                <input type="text" id="phone"></input>
                
                <input type="submit" id="submit"/>
            </form>
                   
        </div>
        </div>
    );
};

export default MeetMe;