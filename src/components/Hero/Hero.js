import React from 'react';
import './Hero.css';
import HeroVideo from '../../assets/maldivesVideo.mp4';
import {AiOutlineSearch} from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='Hero'>
    <div className='overlay'></div>
        <video loop muted  autoPlay id='video'>
            <source src={HeroVideo} type='video/mp4'/>
        </video>
        <div className='Hero-Content'>
            <h1>First Class Travel</h1>
            <h2>Top 1% Locations Worldwide</h2>
            <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Hero