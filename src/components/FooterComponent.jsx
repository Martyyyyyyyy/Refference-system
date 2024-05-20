// FooterComponent.jsx
import React from 'react';
import { AiFillMedicineBox, AiOutlinePhone, AiOutlineInfoCircle } from 'react-icons/ai';
import './App.css'; // Make sure to import the updated CSS file

const FooterComponent = () => {
  return (
    <footer className='new-footer'>
      <div className='footer-content'>
        <div>
          <AiOutlineInfoCircle className='footer-icon' />
          <span>Довідкова інформація</span>
        </div>
        <div>
          <AiOutlinePhone /> +1 (123) 456-7890
        </div>
        <div>
          <AiFillMedicineBox /> We care for you
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
