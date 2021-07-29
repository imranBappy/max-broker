import React from 'react';
import './Income_Details.css';
const Income_Details = (props) => {
    const {left, right} = props.data
    return (
        <div className='income_details_container'>
            <div className="income_detail_left">
                <div style={{background:left.bd_color}}>
                    <img src={left.img} alt="" />
                </div>
                <div>
                    <p>{left.text}</p>
                    <h5><b>{left.income}</b></h5>
                </div>
                <div>
                    {
                        left.btn && <button>{left.btn}</button>
                    }
                </div>
            </div>
            <div className="income_detail_right">
                <div style={{background:right.bd_color}}>
                    <img src={right.img} alt="" />
                </div>
                <div>
                    <p>{right.text}</p>
                    <h5><b>{right.income}</b></h5>
                </div>
                <div>
                    {
                        right.btn && <button>{right.btn}</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Income_Details;