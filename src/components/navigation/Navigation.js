import React from 'react';
import { Link } from 'react-router-dom';
import cn from "classnames"
import './Navigation.css';

const Navigation = (props) => {
    const findLi = props.li;
    const liMap = findLi.map((item,index) => {
        return <li className='nav-item' key={index}><Link className={cn(item.className,'nav-link')} to={item.link}>{item.name}</Link></li>
    })
    return (
        <ul className='btn-group nav-list'>
            {liMap}
        </ul>

    );
}

export default Navigation;
