import React from 'react';
import './SideBar.css';
import {Link} from 'react-router-dom';

const Sidebar = ({ sidebarVisible, toggleSidebar }) => {
  return (
    <div className={`sidebar ${sidebarVisible ? 'show' : 'hidden'}`}>
      <div className="sidebar-header">
        <div className="username-cont">
          <span className='letter'>M</span>
          <span className='username'>Maryam</span>
          <span>^</span>
        </div>
        {/* <div className="close-btn-cont">
        <button className="toggle-sidebar" onClick={toggleSidebar}>
          X
        </button>
        </div> */}
      </div>
      
      <div className="sidebar-menu">
        <Link className='sidebar-link' to={'today'}> Today</Link>
        <Link className='sidebar-link' to={'upcoming'}> Upcoming</Link>
        <Link className='sidebar-link' to={'completed'}> Completed</Link>
        <Link className='sidebar-link' to={'dashboard'}> All</Link>
      </div>
    </div>
  );
};

export default Sidebar;
