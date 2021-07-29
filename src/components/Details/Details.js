import React from 'react';
import Chart from './../Chart/Chart';
import'./Details.css';
import Users from './../Users/Users';
import WorldMaps  from '../WorldMap/WorldMap';
const Details = () => {
    return (
        <div className='details-container'>
            <Chart/>
            <WorldMaps/>
            <Users/>
        </div>
    );
};
export default Details;