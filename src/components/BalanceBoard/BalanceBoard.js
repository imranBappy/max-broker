/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import TotalIncome from '../TotalIncome/TotalIncome';
import './BalanceBoard.css';
import Income_Details from './../Income_Details/Income_Details';
import inIcon1 from '../../data/img/income_icon_1.png';
import inIcon2 from '../../data/img/income_icon_2.png';
import inIcon3 from '../../data/img/income-icon-3.png';
import inIcon4 from '../../data/img/income-icon-4.png';
import inIcon5 from '../../data/img/income-icon-5.png';
import inIcon6 from '../../data/img/income-icon-6.png';
import inIcon7 from '../../data/img/income-icon-7.png';
import inIcon8 from '../../data/img/income-icon-8.png';
import inIcon9 from '../../data/img/income-icon-9.png';
import inIcon10 from '../../data/img/income-icon-10.png';
import inIcon11 from '../../data/img/income-icon-11.png';
import inIcon12 from '../../data/img/income-icon-12.png';
import inIcon13 from '../../data/img/income-icon-13.png';
import inIcon14 from '../../data/img/income-icon-14.png';




const BalanceBoard = () => {
    const allIncome =[
        {
            left:{
                text:'Passive Income',
                income:'$ 90.00',
                img:inIcon1,
                bd_color:'rgba(233, 213, 0, 0.1)',
                btn:'See Detailed'
            },
            right:{
                text:'Group Level Income',
                income:'$ 63.30',
                img:inIcon2,
                bd_color:'rgba(33, 132, 250, 0.2)',
                btn:'See Detailed'
            }
        },
        {
            left:{
                text:'Ranking Bonus Income',
                income:'$ 0.00',
                img:inIcon3,
                bd_color:'rgba(255, 86, 33, 0.2)',
                btn:'See Detailed'
            },
            right:{
                text:'Acheivment Bonus',
                income:'$ 0.00',
                img:inIcon4,
                bd_color:'rgba(68, 194, 131, 0.2)',
                btn:'See Detailed'
            }
        },
        {
            left:{
                text:'Ranking Bonus Income',
                income:'$ 0.00',
                img:inIcon5,
                bd_color:'rgba(233, 213, 0, 0.1)',
                btn:'See Detailed'
            },
            right:{
                text:'Direct Income Bonus',
                income:'$ 397.00',
                img:inIcon6,
                bd_color:'rgba(33, 132, 250, 0.2)',
                btn:'See Detailed'
            }
        },
        {
            left:{
                text:'This Month Business',
                income:'$ 0.00',
                img:inIcon7,
                bd_color:'rgba(255, 86, 33, 0.2)',
                btn:'See Detailed'
            },
            right:{
                text:'This Month Associates',
                income:'0.00',
                img:inIcon8,
                bd_color:'rgba(68, 194, 131, 0.2)',
                btn:'See Detailed'
            }
        },
        {
            left:{
                text:'My Available Point',
                income:'1801',
                img:inIcon9,
                bd_color:'rgba(33, 132, 250, 0.2)',
                btn:''
            },
            right:{
                text:'Contract Point',
                income:'6000',
                img:inIcon10,
                bd_color:'rgba(233, 213, 0, 0.15)',
                btn:''
            }
        },
        {
            left:{
                text:'Total Team Point',
                income:'9,100.00',
                img:inIcon11,
                bd_color:'rgba(68, 194, 131, 0.2)',
                btn:''
            },
            right:{
                text:'Total Associates',
                income:'5',
                img:inIcon12,
                bd_color:'rgba(255, 86, 33, 0.2)',
                btn:''
            }
        },
        {
            left:{
                text:'Total Team Point',
                income:'9,100.00',
                img:inIcon13,
                bd_color:'rgba(233, 213, 0, 0.1)',
                btn:''
            },
            right:{
                text:'Credits',
                income:'$ 550.30',
                img:inIcon14,
                bd_color:'rgba(68, 194, 131, 0.2)',
                btn:''
            }
        }
   
    ]
    return (
        <div className='balanceBoard'>
            <TotalIncome/>
            {
                allIncome.map(data =><Income_Details 
                    data={{...data}}
                />)
            }
        </div>
    );
};

export default BalanceBoard;