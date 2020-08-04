import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

// import css file
import './styles.css';
// import { Container } from './styles';

function Landing() {
  return (
      <div id='page-landing'>
          <div id="page-landing-content" className="container">
              <div className="logo-container">
                <img src={logo} alt='proffy' />
                <h2>
                    Your online classroom platform
                </h2>
              </div>
                <img src={landingImg} alt='Plataforma de estudos' className='hero-image' />
                    <div className="buttons-container">
                        <Link to='/study' className='study'>
                            <img src={studyIcon} alt='Study' />
                            Study
                        </Link>
                        <Link to='/give-classes' className='give-classes'>
                            <img src={giveClassesIcon} alt='Give Classes' />
                            Be a Proffy
                        </Link>
                </div>
              <span className='total-connections'>
                200 connections already made <img src={purpleHeartIcon} alt='Purple heart' />
              </span>
          </div>
      </div>
  )
}

export default Landing;