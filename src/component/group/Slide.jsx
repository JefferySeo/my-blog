import React from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';
import Groupdata from '../../data/api4';

const Slide = ({id, img, role, name, company, post, date, desc, valueIndex, index}) => {
    let position = "nextSlide";
    if(valueIndex === index){
        position = "activeSlide";
    }
    if((valueIndex === index-1) || (index === 0 && valueIndex === Groupdata.length - 1)){
        position = "lastSlide";
    }
    return (
        <>
            <article className={`d-flex ${position}`} key={id}>
                <div className="left box-shadow">
                    <div className="img">
                        <img src={img} alt={img} />
                    </div>
                    
                </div>
                <div className="right">
                    <div className="icon">
                        <RiDoubleQuotesR />
                    </div>
                    <h3>{name}</h3>
                    <p><span>{post}</span></p>
                    <p>{role} : ({company}) - {date} 입사</p>
                    <p className="desc">{desc}</p>
                </div>
            </article>
        </>
    );
};

export default Slide;