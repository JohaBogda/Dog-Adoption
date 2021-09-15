import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="Sidebar">

        <ul>
            <li><Link to="/home" className="link">10 Reasons Why You Should Adopt</Link> </li>
            <li><Link to="/fees" className="link">Everything You Need To Know</Link> </li>
            <li><Link to="/info" className="link">Check out Dog Breeds To Match Your Lifestyle</Link> </li>
            <li><Link to="/dogs" className="link">Adoptable Dogs</Link> </li>
            <li><Link to="/application" className="link">Apply now!</Link> </li>
            </ul>
            
        </div>
    );
};

export default Sidebar;