import React from 'react';
import './PostAddForm.css';

const PostAddForm = (props) => {
    const inputRef = React.createRef();
    const addText = (e) => {
        e.preventDefault();
        props.addTextElem(inputRef.current.value)
    }
    return (
        <form className='bottom-panel d-flex'>
            <input
                type="text"
                placeholder="О чем вы думайте сейчас"
                className='form-control new-post-label'
                ref={inputRef}
            />
            <button
                type="submit"
                className='btn btn-outline-secondary'
                onClick={addText}
            >Добавить</button>
        </form>
    );
}

export default PostAddForm;
