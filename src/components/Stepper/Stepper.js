import React from 'react';
import './Stepper.css';
import profileIcon from '../../data/img/stapper-profile-icon.png';
import PassportIcon from '../../data/img/PassportIcon.png';
import cameraIcon from '../../data/img/cameraIcon.png';
import SignatureIcon from '../../data/img/SignatureIcon.png';
import SuccessfulIcon from '../../data/img/SuccessfulIcon.png';

import PassportIconActive from '../../data/img/PassportIcon-active.png';
import cameraIconActive from '../../data/img/cameraIcon-active.png';
import SignatureIconActive from '../../data/img/SignatureIcon-active.png';
import SuccessfulIconActive from '../../data/img/SuccessfulIcon-active.png';

import { useParams } from 'react-router-dom';



const Stepper = () => {
    let { pageId } = useParams()
    console.log(pageId[0]);
    return (
        <div className='stepper'>
            <h3>KYC Steps</h3>
            <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                    <div className="mdl-stepper-horizontal-alternative">
                    <div className="mdl-stepper-step active-step step-done">
                        <div 
                            style={pageId[0] === '1' ? {background:'yellow'} :{color: 'rgba(217, 234, 255, 0.3)'}} 
                            className="mdl-stepper-circle">
                            <img className="stepper-profile-icon" src={profileIcon} alt="" />
                        </div>
                        <div className="mdl-stepper-title"
                            style={pageId[0] === '1' ? {color:'yellow'} :{color: 'rgba(217, 234, 255, 0.3)'}} 
                        >Add pets</div>
                        <div className="mdl-stepper-bar-right"></div>
                    </div>
                    <div className="mdl-stepper-step active-step editable-step">
                        <div
                            style={pageId[1] === '2' ? {background:'yellow'} :{}}
                            className="mdl-stepper-circle">
                            <img  className="stepper-passport-icon" 
                                src={
                                    pageId[1] === '2' ? PassportIconActive : PassportIcon
                                }
                            alt="" />
                        </div>
                        <div className="mdl-stepper-title"
                            style={pageId[1] === '2' ? {color:'yellow'} :{color: 'rgba(217, 234, 255, 0.3)'}}
                        >Passport Id Card</div>
                        <div className="mdl-stepper-bar-left"></div>
                        <div className="mdl-stepper-bar-right"></div>
                    </div>
                    <div className="mdl-stepper-step active-step editable-step">
                        <div 
                        style={pageId[2] === '3' ? {background:'yellow'} :{}}
                        className="mdl-stepper-circle">
                            <img className="stepper-camera-icon"  
                            src={
                                pageId[2] === '3' ? cameraIconActive : cameraIcon
                            }
                            alt="" />
                        </div>
                        <div className="mdl-stepper-title"
                        style={pageId[2] === '3' ? {color:'yellow'} :{color: 'rgba(217, 234, 255, 0.3)'}}

                        >Selfie Picture</div>
                        <div className="mdl-stepper-bar-left"></div>
                        <div className="mdl-stepper-bar-right"></div>
                    </div>
                    <div className="mdl-stepper-step active-step">
                        <div 
                            style={pageId[3] === '4' ? {background:'yellow'} :{}}
                            className="mdl-stepper-circle">
                            <img className="stepper-signature-icon" 
                             src={
                                pageId[3] === '4' ? SignatureIconActive : SignatureIcon
                            }
                             alt="" />
                        </div>
                        <div className="mdl-stepper-title"
                            style={pageId[3] === '4' ? {color:'yellow'} :{color: 'rgba(217, 234, 255, 0.3)'}}
                        >Signature</div>
                        <div className="mdl-stepper-bar-left"></div>
                        <div className="mdl-stepper-bar-right"></div>
                    </div>
                    <div className="mdl-stepper-step active-step">
                        <div 
                            style={pageId[4] === '5' ? {background:'yellow'} :{}}
                            className="mdl-stepper-circle">
                            <img className="stepper-successful-icon" 
                                src={
                                    pageId[4] === '5' ? SuccessfulIconActive : SuccessfulIcon
                                }
                            alt="" />
                        </div>
                        <div className="mdl-stepper-title"
                            style={pageId[4] === '5' ? {color:'yellow'} :{color: 'rgba(217, 234, 255, 0.3)'}}
                        >Successful</div>
                        <div className="mdl-stepper-bar-left"></div>
                        <div className="mdl-stepper-bar-right"></div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Stepper;