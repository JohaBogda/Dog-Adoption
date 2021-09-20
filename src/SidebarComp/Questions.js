import React, {useState} from 'react';

const Questions = () => {

        // ====== Submit button ====== 
        const [submitted, setSubmitted] = useState(false);

        const handleSubmit = (e) => {
            // preventdefault stops it from refreshing and losing the value input
            e.preventDefault();
            setSubmitted(true);
        };

    return (
        <div onSubmit={handleSubmit} className="questions">
            <h2>Send us your info - we'll get in touch within 24hrs:</h2>
            <form  id="form">

                
                <label htmlFor="name">Name: </label>
                <input type="text" id="name"></input>

                <label htmlFor="email">Email: </label>
                <input type="text" id="email"></input>

                <label htmlFor="phone">Phone: </label>
                <input type="text" id="phone" ></input>

                <label htmlFor="questions">Question: </label>
                {/* instead of input, use textarea for mult rows */}
                <textarea rows="5"></textarea>

                <input type="submit" id="submit"></input>
                {submitted && <div className='success-message'>Success! We'll be in touch to clarify your question!  </div>}

            </form>
        </div>
    );
};

export default Questions;