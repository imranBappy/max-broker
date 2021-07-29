import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileUpdate.css';
const ProfileUpdate = (props) => {
    return (
        <div>
            <div className="profile-from">
                    <div>
                        <div>
                            <label htmlFor="fartName">Fast Name</label>
                            <input name='fartName' type="text" />
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input name='lastName' type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="name">User Name</label>
                            <input name='userName' type="text" />
                        </div>

                        <div>
                            <label htmlFor="address">Your Address</label>
                            <input name='address' type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="name">Country</label>
                            <select name="country" id="country">
                                <option value="">No Selected</option>
                                <option value="bd">Bangladesh</option>
                                <option value="us">US</option>
                                <option value="uk">UK</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                            <input name='state' type="text" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="city">City</label>
                            <input name='city' type="text" />
                        </div>
                        <div>
                            <label htmlFor="zipCode">ZIP Code</label>
                            <input name='zipCode' type="text" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="contactNumber">Contact Number</label>
                            <input name='contactNumber' type="text" />
                        </div>
                        <div>
                            <label htmlFor="zipCode">ZIP Code</label>
                            <input name='zipCode' type="date" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="gender">
                                <option value="">No Selected</option>
                                <option value="bd">Male</option>
                                <option value="us">Female</option>
                                <option value="uk">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="idNumber">ID Number</label>
                            <input name='idNumber' type="text" />
                        </div>
                    </div>
                    <button className="btn">
                        <Link to={props.path}>
                            {props.btn}
                        </Link>
                    </button>
            </div>
        </div>
    );
};

export default ProfileUpdate;