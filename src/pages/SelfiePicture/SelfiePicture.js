import React from 'react';
import Stepper from './../../components/Stepper/Stepper';
import Picture from './../../components/Picture/Picture';
import './SelfiePicture.css';
const SelfiePicture = () => {
    return (
        <div className='SelfiePicture'>
            <Stepper/>
            <Picture
                path1='/passportId/12'
                path2='/signature/1234'
                p='Take a Selfie Picture of yourself holding your ID/Passport'
                title='Selfie Picture'
            />
        </div>
    );
};

export default SelfiePicture;