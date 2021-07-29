import React from 'react';
import { Link } from 'react-router-dom';
import './Successful.css';
import Stepper from './../../components/Stepper/Stepper';
import successfulImg from '../../data/img/successful-img.png';
const Successful = () => {
    return (
        <div className='successful-container'>
            <Stepper/>
            <div className="successful">
                <div className="successful-head">
                    <div>
                        <h3>successful</h3>
                    </div>
                    <div>
                        <button>Update KYC Request</button>
                    </div>
                </div>
                <div className='successful-img'>
                    <img src={successfulImg} alt="" />
                </div>
                <p>KYC submitted Successfull.</p>
                <p> We Will review your message and get back to you shortly.</p>
                <div className='successful-button'>
                    <button className='btn'>
                        <Link to='/dashboard'>
                            Back to Dashboard
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Successful;