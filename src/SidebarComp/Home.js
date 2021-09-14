import React from 'react';

const Home = (props) => {
//    console.log(props)
    return (
        <div>
            <h1>{props.reasons.reason}</h1>
            <p>{props.reasons.explanation}</p>
           {/*  */}
        </div>
    );
};

export default Home;