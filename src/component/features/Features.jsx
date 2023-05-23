import React from 'react';
import "./features.css";
import { RiArrowRightLine } from 'react-icons/ri';
import Card from './Card';
import data from '../../data/api';
import {MdOutlineSportsBaseball, MdOutlineSportsCricket, MdOutlineSportsBasketball, MdOutlineSportsFootball, MdOutlineSportsMartialArts, MdOutlineSportsMotorsports} from 'react-icons/md';

const Features = () => {
    return (
        <div>
            <section className="features top" id="features">
                <div className="container">
                    <div className="heading">
                        <h4>Features</h4>
                        <h1>What I Do?</h1>
                    </div>
                </div>
                <div className="container grid">
                    {data.map((dt, index) => {
                        return <Card key={index} icon={dt.icon} title={dt.title} content={dt.content}/>
                    })}
                </div>
            </section>
        </div>
    );
};

export default Features;