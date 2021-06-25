import React from 'react';
import './PostStatusFilter.css';

const PostStatusFilter = (props) => {
    return (
        <div className='btn-group'>
            <button onClick={ props.showAll} className="btn btn-info">Все</button>
            <button  onClick={ props.showLike} className="btn btn-outline-secondary">Понравилось</button>
        </div>
    );
}

export default PostStatusFilter;
