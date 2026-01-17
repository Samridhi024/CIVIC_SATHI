// src/components/MainLayout.js
import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {Routes,Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardPage from '../pages/DashboardPage';
import IssuesPage from '../pages/IssuesPage';
import IssueDetailsPage from '../pages/IssueDetailsPage';
import {FaBars} from 'react-icons/fa'; // hamburger icon

const MainLayout = () => {
  const [sidebarCollapsed,setSidebarCollapsed] = useState(false);
const toggleSidebar =()=>{
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="d-flex vw-100 vh-100">
      {/* Sidebar */}
      <div className={`sidebar-container ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <Sidebar toggleSidebar={toggleSidebar} isCollapsed={sidebarCollapsed} />
      </div>

      {/* Main Content Area */}
      <div className="main-content-container flex-grow-1 overflow-auto">
        {/* Toggle button for mobile */}
        <div className="d-lg-none p-3">
          <Button onClick={toggleSidebar} className="toggle-button">
            <FaBars />
          </Button>
        </div>

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/issue/:id" element={<IssueDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;
