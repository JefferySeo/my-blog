import React, {useState} from 'react';
import {FcLike, FcRight} from 'react-icons/fc';
import {FaRegThumbsUp, FaAngleRight, FaTimes} from 'react-icons/fa';


const Card = ({img, title, category, totallike}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
        <div className="box btn-shadow card">
            <div className="img">
                <img src={img} alt={img} onClick={toggleModal} />
            </div>
            <div className="category d-flex">
                <span>{category}</span>
                <label><FcLike />{totallike}</label>
            </div>
            <div className="title">
                <h2>{title}</h2>
                <a href="#popup" onClick={toggleModal} className='arrow'>
                    <FcRight />
                </a>
            </div>
        </div>
        {modal && (
        <div className="modal">
            <div className="modal-content d-flex">
                <div className="modal-img left">
                    <img src={img} alt={img} />
                </div>
                <div className="modal-text right">
                    <span>Features - Design</span>
                    <h1>{title}</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='btn-shadow'>Like This <FaRegThumbsUp /> </button>
                    <button className='btn-shadow'>View Project <FaAngleRight /> </button>
                    <button className="btn-shadow close-modal" onClick={toggleModal}><FaTimes /></button>
                </div>
            </div>
        
        </div>
        )}
        </>
    );
};

export default Card;