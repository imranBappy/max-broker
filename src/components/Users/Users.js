import React from 'react';
import SingleUser from '../SingleUser/SingleUser';
import './users.css';
const Users = () => {
    return (
        <div className='user-container'>
            <h1>Monthly Assocates</h1>
            <div className='user-btn-container' >
                <button>Top Earners</button>
                <button>Joinings</button>
            </div>
            <div>
                <SingleUser/>
                <SingleUser/>
                <SingleUser/>
                <SingleUser/>
                <SingleUser/>
                <SingleUser/>
            </div>
        </div>
    );
};

export default Users;