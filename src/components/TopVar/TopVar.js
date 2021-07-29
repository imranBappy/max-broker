import React from 'react';
import './TopVar.css';
import Search from '../Search/Search';
import profilePic from '../../data/img/small-profile-icon.png';
import SettingIcon from '../../data/img/Setting.png';
import notificationIcon from '../../data/img/notification.png';


const TopVar = () => {
    return (
        <div className="top-var">
            <div className="top-search-container">
                <Search/>
            </div>
            <div className="option-container">
                <div className="notification-icon">
                    <img src={notificationIcon} alt="notification" />
                </div>
                <div className="setting-icon">
                    <img src={SettingIcon} alt="setting" />
                </div>
                
                <div className="option-profile-pic">
                    <img src={profilePic} alt="profile-pic" />
                </div>
            </div>
        </div>
    );
};

export default TopVar;