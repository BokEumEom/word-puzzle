import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ onClick, type = "button", children, className = "", ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
