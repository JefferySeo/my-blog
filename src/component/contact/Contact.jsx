import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import emailJs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();
    //const dispatch = useDispatch();
    const myid = {
        SERVICE_ID : "jefferyGmail",
        TEMPLATE_ID : "template_5mlhcb8",
        USER_ID : "IEVeaIR2CZOX8vl6J"
    }
    // const closeEmail= () =>{
    //     dispatch({type : "CLOSE_EMAIL"});
    // }
    const sendEmail = (e) => {
        e.preventDefault();
        emailJs.sendForm(myid.SERVICE_ID, myid.TEMPLATE_ID, form.current, myid.USER_ID)
        .then((rs)=> {
            console.log(rs.text);
            alert("전송되었습니다.");
            //closeEmail();
        }, 
        (error)=>{
            console.log(error.text);
            alert("전송에 실패했습니다.");
        });
    };

    return (
        <div>
            <section className="Contact" id="contact">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>Contact Me!!</h4>
                        <h1>Contact With Me</h1>
                    </div>
                    <div className="content d-flex">
                        <div className="left">
                            <div className="box box-shadow">
                                <div className="img">
                                    <img src="images/together.jpg" alt="함께" />
                                </div>
                                <div className="details">
                                    <h1>저에게 연락주세요!!!</h1>
                                    <p>느아아아아아아</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="box box-shadow">
                                <form ref={form} onSubmit={sendEmail} className="emailform">
                                    <div className="f-flex">
                                        <div className='col-50'>
                                            <label>보내시는분 성함</label>
                                            <input type="text" name="user_name" placeholder='이름' />
                                        </div>
                                        <div className='col-50'>
                                            <label>보내시는분 이메일</label>
                                            <input type="text" name="user_email" placeholder='이메일' />
                                        </div>
                                    </div>
                                    <div>
                                        <textarea name="message" placeholder='하실 말씀'></textarea>
                                    </div>
                                    <div className='text-center'>
                                        <button type="submit">이메일 전송</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;