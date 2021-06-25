import React from 'react';
import './PostListItem.css';
const PostListItem = ({ onImportant, onRemove, onLike, label, important = false, like, remove }) => {
    let classNames = 'app-list-item  d-flex justify-content-between';
    if (important === true) {
        classNames += ' important'
    }

    if (like === true) {
        classNames += ' like'
    }

    return (
        <li className={classNames}>
            <span className='app-list-item-label' onClick={onLike}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-heart btn-sm"><i className='fas fa-heart'></i></button>
                <button type="button" onClick={onImportant} className="btn-star btn-sm"><i className='fa fa-star'></i></button>
                <button type="button" onClick={onRemove} className="btn-trash btn-sm"><i className='fa fa-trash-o'></i></button>
            </div>
        </li>
    );
}

export default PostListItem;
