import React from 'react';
import './SingleUser.css';
import user1 from '../../data/img/user-1.png';
const SingleUser = () => {
    return (
        <div className='single-user'>
            <div className='user-pic'>
                <img src={user1} alt="profile-pic" />
            </div>
            <div className='single-user-info'>
                <h3>Imran Hossen</h3>
                <p>23*****32*23</p>
            </div>
            <div className='single-user-balance'>
                <h5>$ 3213</h5>
            </div>
        </div>
    );
};

export default SingleUser;