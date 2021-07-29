import React from 'react';
import './CAA.css';
import downloadBtn from '../../data/img/download-btn.png';
import pdfIcon from '../../data/img/pdf-icon.png';
const CAA = () => {
    return (
        <div className='caa-container'>
            <div className="caa">
                <div>
                    <h3>Dashboard CAA Agreement</h3>
                    <div className='pdf-icon'>
                        <img src={pdfIcon} alt="" />
                    </div>
                    <div className='caa-btn'>
                        <button>Download CAA Agreement</button>
                        <div><img src={downloadBtn} alt="" /></div>
                    </div>
                </div>
                <div>
                    <h3>Dashboard CAA Agreement</h3>
                    <div className='pdf-icon'>
                        <img src={pdfIcon} alt="" />
                    </div>
                    <div className='caa-btn'>
                        <button>Download CAA Agreement</button>
                        <div><img src={downloadBtn} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CAA;