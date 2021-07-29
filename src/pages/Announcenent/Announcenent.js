import React from 'react';
import './Announcenent.css';
import rightArrow from '../../data/img/t-right-arrow.png';
import leftArrow from '../../data/img/t-left-arrow.png';

const Announcenent = () => {
    return (
        <div className='announcenent-container'>
            <div className="announcenent-topVar">
                <div>
                    <h3>Official Announcenent</h3>
                </div>
                <div>
                    <div>
                        <p>Display</p>
                    </div>
                    <div className='page-selector'>
                        <select name="page" id="page">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                    <div>
                        <p>Records Per Page</p>
                    </div>
                </div>
                </div>
                <div className="announcenent-list">
                    <table>
                        <tr className='t-head'>
                            <th style={{minWidth:30}}>#</th>
                            <th style={{minWidth:30}}>Name</th>
                            <th>Posted Date</th>
                            <th>Detail</th>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>Enriques Jr.</td>
                            <td>2023-06-28</td>
                            <td></td>
                        </tr>
                        {
                            [1,2,3,4,5,6,7,8,9].map(n=>(
                                <tr key={n}>
                                    <td>{n}</td>
                                    <td>Enriques Jr.</td>
                                    <td>2023-06-28</td>
                                    <td></td>
                                </tr>
                            ))
                        }
                    </table>
                    <div className='pagination'>
                        <button>1</button>
                        <p>of 34</p>
                        <div className="leftArrow">
                            <button>
                            <img src={leftArrow} alt="leftArrow" />
                            </button>
                        </div>
                        <div className="rightArrow">
                            <button>
                                <img src={rightArrow} alt="rightArrow" />
                            </button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Announcenent;