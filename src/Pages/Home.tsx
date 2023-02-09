import React from 'react';
import './Home.scss';
import Mobile from '../Components/Mobile';

function Home (){
    return (
        <div className='home-main-container'>
            <div className='home-left-container'>
                <div className='home-left-illustrative'></div>
                <div className='home-mobile-container'>
                    <Mobile />
                </div>
            </div>
            <div className='home-right-container'>
                <div className='home-right-info'>
                    <h1>Simple booking</h1>
                    <p>Stay in touch with our dog walkers trough the chat interface.
                        This makes it easy to discuss arrangements and make bookings.
                        Once the walk has been completed you can rate your walk and 
                        book again all trough the chat.
                     </p>
                </div>
                <div className='home-right-illustrative'></div>
            </div>
        </div>
    );
}

export default Home;