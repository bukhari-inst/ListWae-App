import React from 'react';
import Button from 'elements/Button';
import logo from 'assets/images/logo.png';

export const IconText = () => {
  return (
    <Button
      className="sidebar-brand d-flex align-items-center justify-content-center"
      type="link"
      href="/"
    >
      <div className="sidebar-brand-icon rotate-n-15">
        <img src={logo} alt="logo" />
      </div>
      <div className="sidebar-brand-text mx-3">ListWae</div>
    </Button>
  );
};

export default IconText;
