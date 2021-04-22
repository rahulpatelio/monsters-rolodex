import React from 'react';

import './SearchBox.styles.css';

const SearchBox = props => (
    <input
        className='search' 
        type='search' 
        placeholder= 'Search Monsters'
        onChange={props.onSearchChange} 
    />
)

export default SearchBox;

