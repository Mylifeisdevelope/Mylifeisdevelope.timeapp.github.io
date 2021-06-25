import React from 'react';
import   './SearchPanel.css';

const SearchPanel = (props) => {
    return (
      <input type="text" onChange={(e) => {props.searchFunc(e)}} className='form-control search-input' placeholder={props.placeholder}/>
    );
}

export default SearchPanel;
