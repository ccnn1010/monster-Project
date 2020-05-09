import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange}) => (
    <input 
        className='search'
        type='search' 
        placeholder= { placeholder }
        onChange= { handleChange }
      />

);



//functional component is just a component that gets some props and returns html. Easy to test and use