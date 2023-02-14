import React, { useState } from 'react';
import IdleTimer from '../Components/IdleTimer';
import {BiChevronLeft, BiDotsVerticalRounded} from 'react-icons/bi';
import {GoPrimitiveDot} from 'react-icons/go';
import './Profile.scss'
import Avatar from '../images/avatar.jpg';

function Profile({setProfileView}: any) {

    const [active, setActive] = useState<boolean>(false);

    function handleIdleTimeout() {
        setActive(true);
    }

    const handleBack = () => {
        setProfileView(false);
    }
    return (
        <div className='mobile-main-container'>
            <div className='mobile-header-container'>
                <div className='mobile-header-block'></div>
                <div className='profile-header-left'>
                    <BiChevronLeft id='icon' onClick={handleBack} />
                    <img src={Avatar} />
                    <IdleTimer timeout={30000} onTimeout={handleIdleTimeout} setActive={setActive} />
                    <GoPrimitiveDot id='activity-status' style={{
                        color: active ? 'rgb(255, 61, 47)' : 'greenyellow'
                    }} />
                </div>
                <div className='profile-header-right'>
                    <BiDotsVerticalRounded id='icon' />
                </div>
                </div>
                <div className='mobile-body-container'>
                    <div className='profile-information'>
                        <h3>Samuel Green</h3>
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                    </div>
                    <div className='user-offers'>
                        <button></button>
                        <p>30 minute walk</p>
                        <h3>$29</h3>
                    </div>
                    <div className='user-offers'>
                        <button></button>
                        <p>1 hour walk</p>
                        <h3>$49</h3>
                    </div>
                </div>
        </div>
    );
}

export default Profile;