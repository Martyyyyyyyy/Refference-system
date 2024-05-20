import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Ensure this path is correct

// Import images
import computersImage from './computers.avif';
import componentsImage from './components.avif';
import componentsInComputerImage from './componentsInComputer.avif';

const AllDataComponent = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className='app-container'>
      <header className='custom-header'>
        Управління Довідковою системою
      </header>
      <div className='content'>
        <button 
          className='btn-custom' 
          onClick={() => navigateTo('/desktops')}
          style={{ backgroundImage: `url(${computersImage})` }}
        >
          <span className='btn-text'>Комп'ютери організацій</span>
        </button>
        <button 
          className='btn-custom' 
          onClick={() => navigateTo('/components')}
          style={{ backgroundImage: `url(${componentsImage})` }}
        >
          <span className='btn-text'>Окремі компоненти</span>
        </button>
        <button 
          className='btn-custom' 
          onClick={() => navigateTo('/componentsInComputer')}
          style={{ backgroundImage: `url(${componentsInComputerImage})` }}
        >
          <span className='btn-text'>Компоненти в комп'ютері</span>
        </button>
      </div>
      <footer className='footer'>
        <div>© 2024 Your Company</div>
        <div>Privacy Policy</div>
        <div>Contact Us</div>
      </footer>
    </div>
  );
};

export default AllDataComponent;