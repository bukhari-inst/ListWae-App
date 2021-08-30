import React from 'react';
import Button from 'elements/Button';

export const Dasboard = () => {
  return (
    <li className="nav-item active">
      <Button className="nav-link" type="link" href="/">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </Button>
    </li>
  );
};

export default Dasboard;
