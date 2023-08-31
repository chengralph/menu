import React, { useState } from 'react';
import './TopAlert.css'; // Create this CSS file for styling

const TopAlert = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="top-alert">
      <span className="message">{message}</span>
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
    </div>
  ) : null;
};

export default TopAlert;