import React from 'react';
import './Search.css';
import Search_icon from '../../data/img/Search.png';
const Search = () => {
    return (
        <div className="search-container">
            <div>
                <img src={Search_icon} alt="Search_icon" />
                <input 
                placeholder='Type here to Search'
                type="search" />
            </div>
        </div>
    );
};

export default Search;