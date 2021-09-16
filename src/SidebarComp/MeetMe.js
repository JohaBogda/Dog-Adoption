import React from 'react';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react/cjs/react.development';

const MeetMe = (props) => {

    // ====== history method in case anything happens the viewer gets redireced to the dogs again; otherwise if viewer refreshes page they just see empty values======
    const history = useHistory()

    useEffect(() => {
        if (props.dog.default) {
            history.push("/dogs")
        }
    }, [])



    // ====== Submit button ====== 
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        // preventdefault stops it from refreshing and losing the value input
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="meetMe">
            <div onSubmit={handleSubmit}>
                <h1>Want to meet {props.dog.name}?</h1>
                <h2><img src={props.dog.image} /> </h2>
                <h1>Send us your info & we'll get back to you to setup a play date:</h1>
                {/* eventually add value to the forms for input to appear right away */}
                <form id="form">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" ></input>

                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" ></input>

                    <label htmlFor="phone">Phone: </label>
                    <input type="text" id="phone" ></input>

                    <input type="submit" id="submit" />
                </form>
                {submitted && <div className='success-message'>Success! We'll email/ call you in the next 24 hours to set up a play date with {props.dog.name}!</div>}
            </div>
        </div>
    );
};

export default MeetMe;