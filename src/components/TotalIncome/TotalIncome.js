import React from 'react';
import './TotalIncome.css';
import total_income_icon from '../../data/img/total-income.png';

const TotalIncome = () => {
    return (
        <div className='total-income'>
            <div className="total-income-left">
                <div className="total-income-icon">
                    <img src={total_income_icon} alt="" />
                </div>
                <div className="total-income-text">
                    <h5>Total Income</h5>
                    <p>Percentage Income: 55%</p>
                </div>
            </div>
            <div className="total-income-right">
                <div className="total-income-balance">
                    <h5>$ 550</h5>
                </div>
                <div className="total-income-detailed">
                    <button>See Detailed</button>
                </div>
            </div>
        </div>
    );
};

export default TotalIncome;