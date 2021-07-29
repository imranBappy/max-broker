import React from 'react';
import './Signature.css';
import Stepper from './../../components/Stepper/Stepper';
import Picture from '../../components/Picture/Picture';
const Signature = () => {
    return (
        <div className='signature-container'>
            <Stepper/>
            <Picture
                path1='/self-pic/123'
                path2='/successful/12345'
                p='Take a Picture of your Signature'
                title='Signature'
            />
        </div>
    );
};

export default Signature;