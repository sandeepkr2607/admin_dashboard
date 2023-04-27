import React, { useState } from 'react';
import css from './Sidebar.module.css';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { MdHomeRepairService } from 'react-icons/md';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { FaBars, FaCity } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <MdSpaceDashboard />,
    },
    {
      path: '/users',
      name: 'Users',
      icon: <FaUsers />,
    },
    {
      path: '/services',
      name: 'Services',
      icon: <MdHomeRepairService />,
    },

    {
      path: '/logout',
      name: 'Logout',
      icon: <BiLogOut />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? '250px' : '70px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            <FaCity className={css.logo} />
          </h1>
          <div
            style={{ marginLeft: isOpen ? '150px' : '0px' }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            // activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? 'block' : 'none' }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
