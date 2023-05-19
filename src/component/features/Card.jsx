import React from 'react';
import {RiArrowRightLine} from 'react-icons/ri';
import {MdOutlineSportsBaseball, MdOutlineSportsCricket, MdOutlineSportsBasketball, MdOutlineSportsFootball, MdOutlineSportsMartialArts, MdOutlineSportsMotorsports} from 'react-icons/md';

const Card = (props) => {

    return (

        <div className="box btn-shadow card">
            {props.icon}
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <a href=""><RiArrowRightLine className='fe-icon' /></a>
        </div>

    );
};

export default Card;