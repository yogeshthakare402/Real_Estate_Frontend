import React from 'react';
import './Common.css'
import { TbEye, TbBell, TbArrowBarUp, TbArrowBarToDown, TbTag, TbUser } from "react-icons/tb";
import { AiFillCaretDown, AiOutlineHome } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useState } from 'react';
import Logout from './EntryExitPages/Logout';

function CommonPage({ children }) {

    const [showpages, setShowPages] = useState(false);

    const [user] = useState({
        name: localStorage.getItem("name"),
        userid: localStorage.getItem("userid")
    })



    return (
        <section className='property'>
            <div className='asideLeft'>
                <div><img className='logo' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/88975523945059.5632b7d5654ae.png' alt='Logo' /></div>

                <div className='menuBar'>
                    <div className='menu'>
                        <div className='open'><AiOutlineHome className="icons" /></div>
                        <div className='open'>Property</div>
                    </div>
                    <div className='menu'>
                        <div><TbBell className="icons" /></div>
                        <div>Assistance</div>
                    </div>
                    <div className='menu'>
                        <div><TbArrowBarToDown className="icons" /></div>
                        <div>Received Interest</div>
                    </div>
                    <div className='menu'>
                        <div><TbArrowBarUp className="icons" /></div>
                        <div> Send Interest</div>
                    </div>
                    <div className='menu'>
                        <div><TbEye className="icons" /></div>
                        <div> Property Views</div>
                    </div>
                    <div className='menu'>
                        <div><TbTag className="icons" /></div>
                        <div>Tariff Plan</div>
                    </div>
                </div>
            </div>
            <div className='asideRight'>
                <header className='header'>
                    <div>USER ID : {user.userid}</div>

                    <div>
                        <TbUser className="iconsUsers" />
                        {user.name}
                        <AiFillCaretDown
                            className="drop_down"
                            onClick={() => {
                                setShowPages(!showpages);
                            }}
                        />
                        {showpages ? <Logout /> : null}
                    </div>
                </header>

                <div className='commonPage'>
                    {children}
                </div>
            </div>

        </section>
    )
}

export default CommonPage