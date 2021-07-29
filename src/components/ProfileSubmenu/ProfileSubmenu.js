import React from 'react';
import './ProfileSubmenu.css';
import smallProfileIcon from '../../data/img/small-Profile-icon-1.png';
import passwordIcon from '../../data/img/password.png';
import keysIcon from '../../data/img/keysIcon.png';
import notificationIcon from '../../data/img/notifaction-con.png';
import computerIcon from '../../data/img/computer-icon.png';
import agreementIcon from '../../data/img/agreement-con.png';
import { Link} from 'react-router-dom';
const ProfileSubmenu = (props) => {
    const [menu] = props.menu
    return (
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
    );
};

export default ProfileSubmenu;