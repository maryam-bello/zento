import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sideBar/SideBar"; // Sidebar component
import "./Layout.css";
import TaskContext from "../context/TaskContext";


const Layout = () => {

  const {tasks, loading, error, setTasks, fetchTasks} = useContext(TaskContext);

  const [sidebarVisible, setSidebarVisible] = useState(false);
 
  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  useEffect(() => {
    fetchTasks(); // Fetch tasks when the layout is mounted
    }, []);

  return (
    <div className="layout">
     <div>
      <SideBar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
     </div>
      
      <div className="main-content">
        <button className={`toggle-sidebar ${sidebarVisible? 'sidebar-btn' : ''}`} onClick={toggleSidebar}>
          X
        </button>
        <div className="outlet">
          <Outlet  />
        </div>
        
      </div>
     </div>
  );
};

// console.log(Layout);

export default Layout;
