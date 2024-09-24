import React from "react";
import'./HeaderArea.css'
import {AiOutlineSearch, AiOutlineWallet, AiFillHome} from 'react-icons/ai'
import {FaFlag,FaUsers, FaPlusCircle, FaBell,FaFacebookMessenger} from 'react-icons/fa'
import {} from 'react-icons/md'
import MainArea from '../MainArea/MainArea'
function HeaderArea(){
    return(
        <div className="Homepage">
            <div className="header">
                <div className="first-header">
                    <div className="logo">
                        <img src="/image/logo.png" alt="logo" style={{height:"50px", padding:"1rem"}}/>
                    </div>
                    <div className="Search">
                        <AiOutlineSearch style={{height:"4rem"}}/>
                        <input placeholder="Search Facebook" type="Search"/>
                    </div>
                </div>
                <div className="middle-header">
                    <div className="Icon">
                        <AiFillHome fontsize="2.3rem" color="#1877F2"/>
                    </div>
                    <div className="Icon">
                        <FaFlag fontsize="2.3rem" />
                    </div>
                    {/* <div className="Icon">
                        <MdOnDemandvideo fontsize="2.3rem" />
                    </div> */}
                    <div className="Icon">
                        <FaUsers fontsize="2.3rem" />
                    </div>
                    <div className="Icon">
                        <AiOutlineWallet fontsize="2.3rem" />
                    </div>
                </div>
                <div className="third-header">
                    <div className="plus">
                        <FaPlusCircle fontsize="2rem"/>
                    </div>
                    <div className="plus">
                        <FaFacebookMessenger fontsize="2rem"/>
                    </div>
                    <div className="plus">
                        <FaBell fontsize="2rem"/>
                    </div>
                    <div className="pluss">
                        <img src="/image/1.jpge" alt="dp" style={{height:"40px"}}/>
                    </div>
                </div>
            </div>
            <MainArea/>
        </div>
    )
}
export default HeaderArea