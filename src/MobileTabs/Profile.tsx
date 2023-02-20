import React, { useEffect, useState } from 'react';
import IdleTimer from '../Components/IdleTimer';
import {BiChevronLeft, BiDotsVerticalRounded} from 'react-icons/bi';
import {GoPrimitiveDot} from 'react-icons/go';
import './Profile.scss'
import Avatar from '../images/avatar.jpg';

function Profile({setProfileView}: any) {
type OfferState = {
    offerOne: boolean;
    offerTwo: boolean;
    confirmedOffer: boolean;
    };
    type TimeRemaining = {
    minutes: number |'';
    seconds: number | '';
    }

const [active, setActive] = useState<boolean>(false);
const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    minutes: '',
    seconds: ''
});
const [offer, setOffer] = useState<OfferState>({
    offerOne: false,
    offerTwo: false,
    confirmedOffer: false
});

const handleOffer = (id: number) => {
    if (id === 1) {
        setOffer({...offer, offerOne : true, offerTwo : false, confirmedOffer : false})
    }

    if (id === 2) {
        setOffer({...offer, offerTwo : true, offerOne : false, confirmedOffer : false})
    }
}

const cancelOffer = () => {
    setOffer({ offerOne: false, offerTwo: false, confirmedOffer: false });
}

const confirmOffer = () => {
    const min = 10;
    const max = 59;
    const now = new Date();
    const estimateTime = new Date(now.getTime() + ((Math.random() * (max - min) + min) * 60 * 1000));

    const distance = estimateTime.getTime() - now.getTime();

    const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeRemaining({...timeRemaining, minutes :  minutesRemaining, seconds : secondsRemaining});
    setOffer({ offerOne: false, offerTwo: false, confirmedOffer: true });
}

function handleIdleTimeout() {
    setActive(true);
}

const handleBack = () => {
    setProfileView(false);
}

useEffect(() => {
        const intervalId = setInterval(() => {
        setTimeRemaining((prevTime: any) => {
            const newSeconds = prevTime.seconds === 0 ? 59 : prevTime.seconds - 1;
            const newMinutes = newSeconds === 59 ? prevTime.minutes - 1 : prevTime.minutes;
            return {
                minutes: newMinutes,
                seconds: newSeconds,
            };
        });
        }, 1000);
    
        return () => clearInterval(intervalId);
    
    }, [confirmOffer]);      
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
                }}/>
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
                <div>
                <div className='profile-user-offers'>
                    <button onClick={() => handleOffer(1)} style={{
                        background: offer.offerOne ? 'white' : 'none'
                    }}>
                    </button>
                    <p>30 minute walk</p>
                    <h3>$29</h3>
                </div>
                <div className='profile-user-offers'>
                    <button onClick={() => handleOffer(2)} style={{
                        background: offer.offerTwo ? 'white' : 'none'
                    }}>
                    </button>
                    <p>1 hour walk</p>
                    <h3>$49</h3>
                </div>
                {offer.offerOne ? 
                    <div className='offer-confirmation'>
                        <p>Are you sure you want to pick 30 minute walk for 29$?</p>
                        <button onClick={cancelOffer}>Cancel</button>
                        <button onClick={confirmOffer}>Confirm</button>
                    </div>
                : null }
                {offer.offerTwo ?
                    <div className='offer-confirmation'>
                        <p>Are you sure you want to pick 1 hour walk for 49$?</p>
                        <button onClick={cancelOffer}>Cancel</button>
                        <button onClick={confirmOffer}>Confirm</button>
                        </div>
                : null}
                {offer.confirmedOffer ?
                <div className='offer-time'>
                    <h3>Your courier will arrive with u shortly</h3>
                    <p>Time remaining: 00:{timeRemaining.minutes}:{timeRemaining.seconds}</p>
                </div>
                : null}
                </div>
            </div>
    </div>
);
}

export default Profile;