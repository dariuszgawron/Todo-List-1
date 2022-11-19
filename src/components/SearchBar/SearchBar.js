import React from "react";

import './SearchBar.scss';

const SearchBar = props => {
    return (
        <div className="search-bar" id="search-bar">
            <input className="search-bar__input" type="text" placeholder="Search" value={props.keyword} /> 
        </div>
    )
};

export default SearchBar;