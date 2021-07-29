import React from 'react';
import './SideNav.css';
import logo from '../../data/img/logo.png';
import profilePic from '../../data/img/profile-avatar.png';
import active from '../../data/img/active.png';
import Navbar from '../Navbar/Navbar';


const SideNav = () => {
    
    return (
        <div className='side-navbar'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="profile">
                <div>
                    <img src={profilePic} alt="profilePic" />
                </div>
                <div>
                    <div>
                        <img src={active} alt="" />
                    </div>
                    <p>User ID: 6310450</p>
                    <p>Sponsor ID: 123456</p>
                </div>
                
            </div>
            <div className="user-info">
                <h3> <span>Hello,</span> Enriques Jr.</h3>
                <p>New user</p>
            </div>
            <Navbar/>
        </div>
    );
};

export default SideNav;