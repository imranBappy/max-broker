import React from 'react';
import './FA2.css';
import QrCode from '../../data/img/qr-code.png';
const FA2 = () => {
    return (
        <div className='fa2-container'>
            <h3>Two Factor Authentication (2FA)</h3>
            <div className='qr-code'>
                <img src={QrCode} alt="" />
            </div>
            <p className='fa2-title-1'>G7FDNK6E0P5R4T0Y</p>
            <p className='fa2-title-2'>G7FDNK6E0P5R4T0Y</p>
            <div className='fa2-input'>
                <input placeholder='Enter 2FA Code to Enable' type="text" />
            </div>
            <div className='fa2-btn' >
                <button className='btn'>Enable 2FA</button>
            </div>
        </div>
    );
};

export default FA2;