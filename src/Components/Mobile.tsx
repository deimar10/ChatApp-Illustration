import React from 'react';
import './Mobile.scss';
import {BiChevronLeft, BiDotsVerticalRounded} from 'react-icons/bi';
import Avatar from '../images/avatar.jpg';

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
        </div>
    );
}

export default Mobile;