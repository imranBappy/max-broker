import React from 'react';
import  './Profile.css';
import profilePic from '../../data/img/input_profile.png';
import ProfileUpdate from '../../components/ProfileUpdate/ProfileUpdate';

const Profile = () => {
    return (
        <>
        <br /><br />
        <br />
        <div className='profile-info-container'>
            <h3 className='personal-info-heading'>Personal Information</h3>
            <div className="profile-pic">
                <div>
                    <label htmlFor="input-profile-pic">
                        <img src={profilePic} alt="" />
                    </label>
                </div>
                <input id='input-profile-pic' type="file" />
            </div>
            <ProfileUpdate
                path='/profile'
                btn='Save Information'
            />
        </div>
        </>
    );
};

export default Profile;