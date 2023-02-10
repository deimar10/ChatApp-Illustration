import React from 'react';
import './Mobile.scss';
import {BiChevronLeft, BiDotsVerticalRounded} from 'react-icons/bi';
import {HiChevronRight} from 'react-icons/hi';
import Avatar from '../images/avatar.jpg';
import FirstDog from '../images/dog-image-1.jpg';
import SecondDog from '../images/dog-image-2.jpg';
import ThirdDog from '../images/dog-image-3.jpg';

function Mobile() {
    return (
        <div className='mobile-main-container'>
            <div className='mobile-header-container'>
                <div className='mobile-header-block'></div>
                <div className='mobile-header-left'>
                    <BiChevronLeft id='icon' />
                    <img src={Avatar} />
                    <div className='mobile-header-left-text'>
                        <h3>Samuel Green</h3>
                        <p>Available to Walk</p>
                    </div>
                </div>
                <div className='mobile-header-right'> 
                    <BiDotsVerticalRounded id='icon' />
                </div>
            </div>
            <div className='mboile-body-container'>
                <div className='user-messages'>
                    <div id='message'>
                        <p>That sounds great. I'd be happy with that.</p>
                    </div>
                    <div id='message'>
                        <p>Could you send over some pictures of your dog. Please?</p>
                    </div>
                </div>
                <div className='client-messages'>
                    <div id='client-pictures'>
                        <img src={FirstDog} />
                        <img src={SecondDog} />
                        <img src={ThirdDog} />
                    </div>
                    <div id='message'>
                        <p>Here are a few pictures. She's a happy girl!</p>
                    </div>
                    <div id='message'>
                        <p>Can you make it?</p>
                    </div>
                </div>
                <div className='user-messages'>
                    <div id='message'>
                        <p>She looks os happy! The time we discussed works. How long shall i take her out for?</p>
                    </div>
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
                <div className='message-input-container'>
                   <span><input placeholder='Type a message...'></input><HiChevronRight id='submit'/></span> 
                </div>
            </div>
        </div>
    );
}

export default Mobile;