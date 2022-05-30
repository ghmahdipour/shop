import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = (props) => {
    return (
            <li className='footer-menu-tab__list__item'>
                <Link 
                    onClick={props.item['onClick']}
                    to={props.item['link']}
                    className={props.item['classname']}                                                    
                    >
                    {props.item['title']}     
                </Link>
            </li>
    )
}

export default MenuItem