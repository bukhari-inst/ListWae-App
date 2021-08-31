import React from 'react';
import IconText from 'parts/IconText';
import Dasboard from 'parts/Dasboard';
import Menu from 'parts/Menu';

export const SidebarHomePage = () => {
  return (
    <ul className="navbar-nav menu-nav sidebar accordion" id="accordionSidebar">
      <IconText /> <Dasboard /> <Menu />
    </ul>
  );
};

export default SidebarHomePage;
