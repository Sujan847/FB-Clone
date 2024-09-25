import React from "react";
import './MainArea.css';
import { FaMedrt, FaFontAwesomeFlag, FaFacebookMessenger, FaAngleDown, FaUserFriends, FaSearch, FaGrin, FaRegThumbsUp, FaCommentAlt, FaRegShareSquare } from 'react-icons/fa';
import { MdVideoCall, MdMoreHoriz } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

import { Link,NavLink } from "react-router-dom";

function MainArea() {
    return (
        <div className="Main">

            <div className="Rside">
                <div className="Profile">
                    <img
                        src="/image/sujan.jpg"
                        alt="dp"
                        style={{ height: "60px", padding: "1rem" }}
                    />
                    <span>Sujan Thapa</span>
                </div>
                <div className="Pro">
                    <FaUserFriends color="blue" fontSize="2rem" />
                    <div>Friends</div>
                </div>
                <div className="Pro">
                    <FaFontAwesomeFlag color="green" fontSize="2rem" />
                    <div>Pages</div>
                </div>
                <div className="Pro">
                    <FaMedrt color="blue" fontSize="2rem" />
                    <div><Link to="/covidinfo">COVID-19 Information Center</Link></div>
                </div>
                <div className="Pro">
                    <FaFacebookMessenger color="green" fontSize="2rem" />
                    <div>Messenger Kids</div>
                </div>

                <div className="Pro">
                    <FaAngleDown color="green" fontSize="2rem" />
                    <div>See More</div>
                </div>
                <br></br>
                <div className="Profiles">
                    <img src="/image/2.jpeg" alt="logo" style={{ height: "35px", padding: "1rem" }} />
                    MEAN STACK
                </div>
                <div className="Profiles">
                    <img src="/image/3.jpeg" alt="logo" style={{ height: "35px", padding: "1rem" }} />
                    JavaScript
                </div>
                <div className="Profiles">
                    <img src="/image/sujan.jpg" alt="logo" style={{ height: "35px", padding: "1rem" }} />
                    React Developer
                </div>
                <div className="Pross">
                    <FaAngleDown color="blue" fontSize="2rem" />
                    <div>See More</div>
                </div>
            </div>

            <div className="MainArea">
                <div className="addStory">
                    <div className="Story">
                        <img src="../image/IMG_3464.jpg" alt="IMG" style={{ height: "60px", width: "50px", borderRadius: "60%" }} />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Sujan
                    </div>
                    <div className="Story">
                        <img src="/image/IMG_9267.PNG" alt="IMG" style={{ height: "60px", width: "50px", borderRadius: "60%" }} />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Flowers
                    </div>
                    <div className="Story">
                        <img src="/image/IMG_8552.PNG" alt="IMG" style={{ height: "60px", width: "50px", borderRadius: "60%" }} />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Night
                    </div>
                    <div className="Story">
                        <img src="/image/IMG_3279.PNG" alt="IMG" style={{ height: "60px", width: "50px", borderRadius: "60%" }} />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Picture
                    </div>
                    {<div className="Story">
                        <img src="/image/home.jpeg" alt="IMG" style={{ height: "60px", width: "50px", borderRadius: "60%" }} />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Picture
                    </div>}
                </div>
                <div className="message">
                    <div className="text">
                        <div className="Post">
                            <img src="/image/IMG_3464.jpg" alt="PIC" />
                            <input type="Mind" placeholder="What's on your mind, Anubhav?" />
                        </div>
                        <div className="Call">
                            <div className="ico">
                                <div className="icone">
                                    <MdVideoCall fontSize="2rem" color="red" />
                                    <div>LiveVideo</div>
                                </div>
                                <div className="icone">
                                    <AiFillFileImage fontSize="2rem" color="green" />
                                    <div>Photo/Video</div>
                                </div>
                                <div className="icone">
                                    <FaGrin fontSize="2rem" color="orange" />
                                    <div>Felling/activity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Posted">
                        <div className="poster">
                            <div className="Simplilearn">
                                <img src="/image/simplilearn.jpeg" alt="Img" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                                Simplilearn
                                <div className="update"> Updated his cover image.</div>
                            </div>
                            <div className="edit"><MdMoreHoriz fontSize="1.5rem" /></div>
                        </div>
                        <div className="caption">
                            Please Like, Comment and Subscribe to our YouTube Channel.
                        </div>
                        <br></br>
                        <div className="FacebookImg">
                            <img src="/image/pic1.jpeg" alt="dp" style={{ height: "auto", width: "100%" }} />
                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="grey" />Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="grey" />Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="grey" />Share
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="Lside">
                <div className="Contact">
                    <div className="Contacts">
                        Contacts
                    </div>

                    <div className="chaticon">
                        <div className="icons">
                            <MdVideoCall fontSize="1.8rem" />
                        </div>
                        <div className="icons">
                            <FaSearch fontSize="1.6rem" />
                        </div>
                        <div className="icons">
                            <MdMoreHoriz fontSize="1.6rem" />
                        </div>
                    </div>
                </div>
                <div className="concise">
                    <div className="Profilee">
                        <img src="image/1.jpeg" alt="logo" style={{ height: "35px", padding: "1rem" }} />
                        Anubhav Sharma
                    </div>
                    <div className="Profilee">
                        <img src="image/2.jpeg" alt="logo" style={{ height: "35px", padding: "1rem" }} />
                        Anuragini
                    </div>
                    <div className="Profilee">
                        <img src="image/3.jpeg" alt="logo" style={{ height: "35px", padding: "1rem" }} />
                        Mayank
                    </div>
                    <div className="Profilee">
                        <img src="image/1.jpg" alt="logo" style={{ height: "35px", padding: "1rem" }} />
                        Anjali
                    </div>
                    <div className="Profilee">
                        <img src="image/pic1.jpeg" alt="logo" style={{ height: "35px", padding: "1rem" }} />
                        Kaushal
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainArea