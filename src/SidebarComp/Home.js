import React from 'react';

const Home = (props) => {
//    console.log(props)
    return (
        <div>
            <h1>{props.reasons.reason}</h1>
            <h2>{props.reasons.explanation}</h2>
           {/*  */}
        </div>
    );
};

export default Home;