/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import BalanceBoard from '../../components/BalanceBoard/BalanceBoard';
import SideNav from '../../components/SideNav/SideNav';
import './Dashboard.css';
import Details from './../../components/Details/Details';
import { Route } from 'react-router-dom';
import Profile from '../Profile/Profile';
import TopVar from './../../components/TopVar/TopVar';
import Password from '../../components/Password/Password';
import Announcenent from '../Announcenent/Announcenent';
import FA2 from '../FA2/FA2';
import CAA from '../CAA/CAA';
import Kyc from '../../components/Kyc/Kyc';
import Passport from '../../components/Passport/Passport';
import SelfiePicture from '../SelfiePicture/SelfiePicture';
import Signature from './../Signature/Signature';
import Successful from '../Successful/Successful';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='navbar-container'>
                <SideNav/>
            </div>
            <div className='all-pages-container'>
                <TopVar/>
                    <Route exact path='/'>
                        <div><BalanceBoard/></div>
                        <div>
                        <Details/>
                        </div>
                    </Route>
                    <Route exact path='/profile'>
                        <div>
                            <Profile/>
                        </div>
                        <div></div>
                    </Route>
                    <Route exact path='/profile/password'>
                        <div>
                            <Password/>
                        </div>
                        <div></div>
                    </Route>
                    
                    <Route exact path='/profile/announcenent'>
                        <div>
                            <Announcenent/>
                        </div>
                        <div></div>
                    </Route>
                    <Route exact path='/profile/fa2'>
                        <div>
                            <FA2/>
                        </div>
                        <div></div>
                    </Route>
                    <Route exact path='/profile/caa'>
                        <div>
                            <CAA/>
                        </div>
                        <div></div>
                    </Route>
                    <Route exact path='/profile/personal-info/:pageId'>
                        <div>
                            <Kyc/>
                        </div>
                        <div></div>
                    </Route>
                    <Route exact path='/profile/passportId/:pageId'>
                        <div>
                            <Passport/>
                        </div>
                        <div></div>
                    </Route>
                    <Route exact path='/profile/self-pic/:pageId'>
                        <div>
                            <SelfiePicture/>
                        </div>
                        <div></div>
                    </Route>

                    <Route exact path='/profile/signature/:pageId'>
                        <div>
                            <Signature/>
                        </div>
                        <div></div>
                    </Route>
                    <Route exact path='/profile/successful/:pageId'>
                        <div>
                            <Successful/>
                        </div>
                        <div></div>
                    </Route>
                    
            </div>
        </div>
    );
};

export default Dashboard;