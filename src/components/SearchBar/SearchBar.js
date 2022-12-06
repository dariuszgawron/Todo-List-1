import React, { useState } from "react";

import './SearchBar.scss';

const SearchBar = props => {
    const [keyword, setKeyword] = useState('');

    const handleChange = e => {
        setKeyword(e.target.value);
        props.setKeyword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.setKeyword(keyword);
    }

    return (
        <form className="search-bar" id="search-bar" onSubmit={handleSubmit}>
            <input className="search-bar__input" type="search" placeholder="Search" value={keyword} onChange={handleChange} /> 
        </form>
    )
};

export default SearchBar;