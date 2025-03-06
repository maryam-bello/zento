import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';


export const Button = ({text, onClick, className, type = "button"}) => {
  return(
  <button type={type} className={`btn ${className}`} onClick={onClick}>
     {text}
  </button>
  );
}

export const ButtonLink = ({text, onClick, className, type = "button", to,}) => {
  return (
    <button className={`btn ${className}`}>
      <Link to={to} type={type} className='btn-link' onClick={onClick}>
        {text}
      </Link>
    </button>
  );
}