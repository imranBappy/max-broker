import React from 'react';
import './Picture.css';
import largeCameraIcon from '../../data/img/large-camera.png';
import { Link } from 'react-router-dom';

const Picture = (props) => {
    return (
        <div className="picture-component">
            <div className="picture-top-var">
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div>
                    <button>Update KYC Request</button>
                </div>
            </div>
            <p>{props.p}</p>
            <div className="picture-img">
                <div>
                    <img src={largeCameraIcon} alt="largeCameraIcon" />
                </div>
            </div>
            <div className="picture-img-info" >
                <p>Admin Approval</p>
                <p>Admin Approval</p>
            </div>
            <div className="picture-btn-bottom">
                <button>
                    <Link to={`/profile${props.path1}`}>Previous</Link>
                </button>
                <button>
                    <Link to={`/profile${props.path2}`}>Save or Next</Link>
                </button>
            </div>
        </div>
    );
};

export default Picture;