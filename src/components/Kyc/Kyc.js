import React from 'react';
import ProfileUpdate from '../ProfileUpdate/ProfileUpdate';
import './Kyc.css';
import Stepper from './../Stepper/Stepper';
const Kyc = () => {
    return (
        <div className="kye-container">
            <Stepper/>
            <div className="kye">
                <div className='key-info'>
                    <h3 className="personal-info-heading">Personal Information</h3>
                    <div className='kye-btn'>
                        <button>Update KYC Request</button>
                    </div>
                </div>
                <ProfileUpdate
                    btn='Save or Next'
                    path="/profile/passportId/12"
                />
            </div>
        </div>
    );
};


export default Kyc;