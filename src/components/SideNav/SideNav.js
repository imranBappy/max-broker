import React, {useState} from 'react';
import './SideNav.css';
import logo from '../../data/img/logo.png';
import profilePic from '../../data/img/profile-avatar.png';
import active from '../../data/img/active.png';
import { Link, useLocation} from 'react-router-dom';
import dashboard from '../../data/img/Dashboard.png';
import linkActive from '../../data/img/nav-active.png';
import navDrop from '../../data/img/nav-drap.png';
import navDropActive from '../../data/img/nav-drop-active.png';
import link2 from '../../data/img/Vector.png';
import link3 from '../../data/img/Group.png';
import link4 from '../../data/img/Profile.png';
import link5 from '../../data/img/Group-1.png';
import smallProfileIcon from '../../data/img/small-Profile-icon-1.png';
import passwordIcon from '../../data/img/password.png';
import keysIcon from '../../data/img/keysIcon.png';
import notificationIcon from '../../data/img/notifaction-con.png';
import computerIcon from '../../data/img/computer-icon.png';
import agreementIcon from '../../data/img/agreement-con.png';



const SideNav = () => {
    const {pathname} = useLocation();
    const [menu, setMenu] = useState({
        profile:false
    });
    const handleMenu = e =>{
        setMenu({...menu, [e]: !menu[e]});
    }
    return (
        <div className='side-navbar'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="profile">
                <div>
                    <img src={profilePic} alt="profilePic" />
                </div>
                <div>
                    <div>
                        <img src={active} alt="" />
                    </div>
                    <p>User ID: 6310450</p>
                    <p>Sponsor ID: 123456</p>
                </div>
                
            </div>
            <div className="user-info">
                <h3> <span>Hello,</span> Enriques Jr.</h3>
                <p>New user</p>
            </div>
            <nav>
                <div className="link-container active-link">
                    <div className="link-active">
                        {
                            pathname === '/'?
                            <img src={linkActive} alt="" />:''
                        }
                    </div>
                    <div className="link-left-side">
                        <img src={dashboard} alt="Dashboard" />
                    </div>
                    <div className="link-right-side">
                        <Link 
                        style={pathname === '/'?{color:'rgba(233, 213, 0, 1)'}: {}}
                         to="/">Dashboard</Link>
                    </div>
                    <div className='nav-drop'>

                    </div>
                </div>
                <div className="link-container">
                    <div className="link-active">
                        {
                            pathname === '/corporation'?
                            <img src={linkActive} alt="" />:''
                        }
                    </div>
                    <div className="link-left-side">
                        <img src={link2} alt="Dashboard" />
                    </div>
                    <div className="link-right-side">
                        <Link
                        style={pathname === '/corporation'?{color:'rgba(233, 213, 0, 1)'}: {}}
                         to="/corporation">Corporation</Link>
                    </div>
                    <div className='nav-drop'>
                        <img src={navDrop} alt="" />
                    </div>
                </div>
                <div className="link-container">
                    <div className="link-active">
                    {
                            pathname === '/finance'?
                            <img src={linkActive} alt="" />:''
                        }
                    </div>
                    <div className="link-left-side">
                        <img src={link3} alt="Dashboard" />
                    </div>
                    <div className="link-right-side">
                        <Link
                        style={pathname === '/finance'?{color:'rgba(233, 213, 0, 1)'}: {}}
                        to="/finance">Finance</Link>
                    </div>
                    <div className='nav-drop'>
                        <img src={navDrop} alt="" />
                    </div>
                </div>
                <div name='profile' className="link-container">
                    <div className="link-active">
                        {
                            pathname === '/profile'?
                            <img src={linkActive} alt="" />:''
                        }
                    </div>
                    <div className="link-left-side">
                        <img  onClick={()=>handleMenu('profile')} src={link4} alt="Profile" />
                    </div>
                    <div style={menu.profile?{height:255,}:{height:50, }} className="link-right-side profile-dropdown-menu">
                        <Link
                        style={pathname === '/profile'?{color:'rgba(233, 213, 0, 1)'}: {}}
                        onClick={()=>handleMenu('profile')}
                         to="/profile">Profile</Link>
                         <ul style={menu.profile? {display: 'block'}:{display:'none'}}>
                             <li>
                                <img src={smallProfileIcon} alt="" />
                                 <Link to='/profile'>
                                    Personal Information
                                 </Link>
                             </li>
                             <li>
                                <img src={passwordIcon} alt="" />
                                 <Link to='/profile/password'>
                                    Password
                                 </Link>
                             </li>
                             <li>
                                <img src={keysIcon} alt="" />

                                 <Link to='/profile/personal-info/1'>
                                    KYC
                                 </Link>
                             </li>
                             <li>
                                <img src={notificationIcon} alt="" />

                                 <Link to='/profile/announcenent'>
                                    Announcenent
                                 </Link>
                             </li>
                             <li>
                                <img src={computerIcon} alt="" />

                                 <Link to='/profile/fa2'>
                                 2FA
                                 </Link>
                             </li>
                             <li>
                                <img src={agreementIcon} alt="" />
                                 <Link to='/profile/caa'>
                                    CAA Agreement
                                 </Link>
                             </li>
                         </ul>
                    </div>
                    <div className='nav-drop'>
                        <img onClick={()=>handleMenu('profile')} src={ menu.profile? navDropActive :navDrop  }  alt="" />
                    </div>
                </div>      
                <div className="link-container">
                    <div className="link-active">
                        {
                            pathname === '/affiliate'?
                            <img src={linkActive} alt="" />:''
                        }
                    </div>
                    <div className="link-left-side">
                        <img src={link5} alt="Dashboard" />
                    </div>
                    <div className="link-right-side">
                        <Link 
                        style={pathname === '/affiliate'?{color:'rgba(233, 213, 0, 1)'}: {}}
                        to="/affiliate">Affiliate Pro</Link>
                    </div>
                    <div className='nav-drop'>
                        <img src={navDrop} alt="" />
                    </div>
                </div>           
            </nav>
        </div>
    );
};

export default SideNav;