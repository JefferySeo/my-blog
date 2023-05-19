import React from 'react';
import './hero.css'
import HeroImg from "../../img/profile.jpg"
import { Typewriter } from 'react-simple-typewriter';
import{RiKakaoTalkFill, RiInstagramLine, RiFacebookCircleLine} from 'react-icons/ri';
import{TbBrandJavascript, TbBrandHtml5} from 'react-icons/tb';
import{FaJava} from 'react-icons/fa';



const Hero = () => {
    return (
        <div>
            <section className="hero" id="hero">
                <div className="container f-flex top">
                    <div className="left top">
                        <h3>welcome to my world</h3>
                        <h1>
                            Hello! I'm <span>Jeffery Seo.</span>
                        </h1>
                        <h2>
                            a 
                            <span>
                                <Typewriter words={[" Newbie Developer.", " Professtional Coder."]} 
                                            loop cursor cursorStyle="|" delaySpeed={1000} typeSpeed={70} deleteSpeed={50} />
                            </span>
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <div className="hero-btn d-flex">
                            <div className="col">
                                <h4>View My SNS</h4>
                                <div className="button">
                                    <button className="btn-shadow"><RiKakaoTalkFill className='icon' /></button>
                                    <button className="btn-shadow"><RiInstagramLine className='icon' /></button>
                                    <button className="btn-shadow"><RiFacebookCircleLine className='icon' /></button>
                                </div>
                            </div>
                            <div className="col">
                                <h4>BEST MY SKILL</h4>
                                <div className="button">
                                    <button className="btn-shadow"><TbBrandJavascript className='icon' /></button>
                                    <button className="btn-shadow"><TbBrandHtml5 className='icon'/></button>
                                    <button className="btn-shadow"><FaJava className='icon'/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-img">
                            <img src={HeroImg} alt="내사진" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;