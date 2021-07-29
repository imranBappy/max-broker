import React from 'react';
import Stepper from '../Stepper/Stepper';
import './Passport.css';
import largeCameraIcon from '../../data/img/large-camera.png';
import { Link } from 'react-router-dom';
const Passport = () => {
    return (
        <div className='passport-container' >
            <Stepper/>
            <div className="passport">
                <div className="passport-info">
                    <div>
                        <h3>Passport Id Card</h3>
                    </div>
                    <div className="passport-btn">
                        <button>Update KYC Request</button>
                    </div>
                </div>
                <div className="passport-from">
                    <div>
                        <label htmlFor="">Select ID Card</label>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="">X</option>
                            <option value="">y</option>
                            <option value="">z</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Select ID Card</label>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <p>Take a Picture of your ID/Passport</p>
                    <div>
                        <div className='passport-img'>
                            <div>
                            <img src={largeCameraIcon} alt="" />
                            </div>
                        </div>
                        <div className='passport-img-info'>
                            <p>Admin Approval</p>
                            <p>Admin Approval</p>
                        </div>
                    </div>
                    <div className='passport-btn-section'>
                        <button>
                            <Link to='/profile/personal-info/1'>Previous</Link>
                        </button>
                        <button>
                            <Link to='/profile/self-pic/123'>Save or Next</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Passport;