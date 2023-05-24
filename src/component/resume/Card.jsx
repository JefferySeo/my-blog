import React from 'react';

const Card = (props) => {

    return (

        <li>
            <div className="box btn-shadow card">
                <h2>{props.title}</h2>
                <p className='cate'>{props.category}</p>
                <span>{props.year}</span>
                <hr />
                <p>{props.desc}</p>
            </div>
        </li>

    );
};

export default Card;