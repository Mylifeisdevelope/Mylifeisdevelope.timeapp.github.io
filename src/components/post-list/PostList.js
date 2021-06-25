import React from 'react';
import './PostList.css';
const PostList = (props) => {
  
    return (
        <ul className='app-list list-group'>
            {props.getLabel}
        </ul>
    );
}

export default PostList;
