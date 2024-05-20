import React from 'react';
import { AiOutlineMail, AiOutlineGlobal, AiOutlineInfoCircle, AiOutlineUser, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import homeImage from './home.avif';
import backgroundHeader from './backgroundHeader.avif';
import profileImage from './profile.jpeg'; // Assume you have a profile image
import './header.css';

const HeaderComponent = () => {
  return (
    <div>
      <header className='new-header' style={{ backgroundImage: `url(${backgroundHeader})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='header-bg'>
          <div className='header-content'>
            <div className='contact-info'>
              <div className='contact-item'>
                <AiOutlineGlobal />
                <span>Поставки зі всього світу</span>
              </div>
              <div className='contact-item'>
                <AiOutlineMail />
                <span>Зв'язок з нами: info@gmail.com</span>
              </div>
              <div className='contact-item'>
                <AiOutlineInfoCircle />
                <span>Допомога</span>
              </div>
            </div>
            <div className='header-title'>
              <span className='title-text'></span>
            </div>
            <div className='profile-section'>
              <img src={profileImage} alt="Profile" className='profile-photo' />
              <span className='profile-text'>My Profile</span>
              <AiOutlineUser className='profile-icon' />
              <AiOutlineSetting className='profile-icon' />
              <AiOutlineLogout className='profile-icon' />
            </div>
          </div>
        </div>
      </header>
      <nav className='new-nav'>
        <Link to='/' className='btn-home' style={{ backgroundImage: `url(${homeImage})` }}>
          <span className='btn-text'>На головну</span>
        </Link>
      </nav>
    </div>
  );
};

export default HeaderComponent;
