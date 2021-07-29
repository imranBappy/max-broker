import React, {useState} from 'react';
import './Navbar.css';
import { Link, useLocation} from 'react-router-dom';
import dashboard from '../../data/img/Dashboard.png';
import linkActive from '../../data/img/nav-active.png';
import navDrop from '../../data/img/nav-drap.png';
import navDropActive from '../../data/img/nav-drop-active.png';
import link2 from '../../data/img/Vector.png';
import link3 from '../../data/img/Group.png';
import link4 from '../../data/img/Profile.png';
import link5 from '../../data/img/Group-1.png';
import ProfileSubmenu from '../ProfileSubmenu/ProfileSubmenu';

const Navbar = () => {
    const {pathname} = useLocation();
    const [menu, setMenu] = useState({
        profile:false
    });
    const handleMenu = e =>{
        setMenu({...menu, [e]: !menu[e]});
    }
    return (
        <>
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
                         <ProfileSubmenu
                            menu={[menu, setMenu]}
                         />
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
        </>
    );
};

export default Navbar;