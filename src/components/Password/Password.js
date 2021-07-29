import React from 'react';
import './Password.css';
const Password = () => {
    return (
        <div className='password-container'>
            <h3>Change Password</h3>
            <div className="change-password-form">
                <div>
                    <h4>Profile Password</h4>
                    <div>
                        <label htmlFor="idNumber">ID Number</label>
                        <input name='idNumber' type="text" />
                    </div>
                    <div>
                        <label htmlFor="idNumber">ID Number</label>
                        <input name='idNumber' type="text" />
                    </div>
                    <div>
                        <label htmlFor="idNumber">ID Number</label>
                        <input name='idNumber' type="text" />
                    </div>
                    <div>
                        <label htmlFor="idNumber">ID Number</label>
                        <input name='idNumber' type="text" />
                    </div>
                    <button className="btn">Update</button>

                </div>
                <div>
                    <h4>Profile Password</h4>
                    <div>
                        <label htmlFor="idNumber">ID Number</label>
                        <input name='idNumber' type="text" />
                    </div>
                    <div>
                        <label htmlFor="idNumber">ID Number</label>
                        <input name='idNumber' type="text" />
                    </div>
                    <div>
                        <label htmlFor="idNumber">ID Number</label>
                        <input name='idNumber' type="text" />
                    </div>
                    <div>
                        <label htmlFor="idNumber">ID Number</label>
                        <input name='idNumber' type="text" />
                    </div>
                    <button className="btn">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Password;