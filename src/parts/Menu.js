import React from 'react';
import Button from 'elements/Button';

export const Menu = () => {
  return (
    <li className="nav-item">
      <Button
        className="nav-link collapsed"
        type="link"
        isExternal
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i className="fas fa-fw fa-cog"></i>
        <span>Components</span>
      </Button>
      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Custom Components:</h6>
          <Button className="collapse-item" type="link" isExternal href="/">
            Buttons
          </Button>
          <Button className="collapse-item" type="link" isExternal href="/">
            Cards
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Menu;
