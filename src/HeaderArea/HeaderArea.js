import React from "react";
import'./HeaderArea.css';
import {AiOutlineSearch, AiOutlineWallet, AiFillHome} from 'react-icons/ai';
import {FaFlag,FaUsers, FaPlusCircle, FaBell,FaFacebookMessenger} from 'react-icons/fa';

// import {Link} from 'react-router-dom';

// import {MdOnDemandvideo} from 'react-icons/md';
import MainArea from '../MainArea/MainArea';
import { Link } from "react-router-dom";
function HeaderArea(){
    return(
        <div className="Homepage">
            <div className="header">
                <div className="first-header">
                    <div className="logo">
                        <Link to='/'><img src="/image/logo.png" alt="logo" style={{height:"50px", padding:"1rem"}}/></Link>
                    </div>
                    <div className="Search">
                        <AiOutlineSearch style={{height:"4rem"}}/>
                        <input placeholder="Search Facebook" type="Search"/>
                    </div>
                </div>
                <div className="middle-header">
                    <div className="Icon">
                        <AiFillHome color="#1877F2"/>
                    </div>
                    <div className="Icon">
                        <FaFlag  />
                    </div>
                    <div className="Icon">
                        {/* <MdOnDemandvideo   /> */}
                    </div>
                    <div className="Icon">
                        <FaUsers   />
                    </div>
                    <div className="Icon">
                        <AiOutlineWallet   />
                    </div>
                </div>
                <div className="third-header">
                    <div className="plus">
                        <FaPlusCircle fontSize="2rem"/>
                    </div>
                    <div className="plus">
                        <FaFacebookMessenger fontSize="2rem"/>
                    </div>
                    <div className="plus">
                        <FaBell fontSize="2rem"/>
                    </div>
                    <div className="pluss">
                        <img src="/image/1.jpge" alt="dp" style={{height:"40px"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderArea