import React from 'react';
import {Button,Navbar,Form,FormControl,Dropdown} from 'react-bootstrap';
import {ChevronLeft,ChevronRight} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

const Header = ({ toggleSidebar, isSidebarOpen,newIssueCount, onNotificationClick,searchTerm,setSearchTerm}) => {
  return (
            {/* side bar for admin navigation to different areas*/} 
    <Navbar className="header-bar p-3 shadow-sm bg-light">
      <Button 
        variant="ghost" 
        className="d-lg-none me-2"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </Button>
          {/* searching issues */}
      <div className="search-bar flex-grow-1">
        <Form className="d-flex">
          <FormControl type="search"
            placeholder="Search by ID, category, location, status..."
            className="me-2 search-input"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
      </div>
          {/*Notification on new reports*/}
      <div className="header-icons d-flex align-items-center ms-3">
        <Button 
          variant="ghost" 
          onClick={onNotificationClick} 
          className="notification-icon position-relative me-3 border-0 p-0"
        >
          <i className="bi bi-bell-fill"></i>
          {newIssueCount > 0 && (<span className="notification-badge">{newIssueCount}</span>)}
        </Button>
           {/* Account and profile*/}
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic" className="user-profile-dropdown d-flex align-items-center">
            <i className="bi bi-person-circle user-avatar me-2"></i>
            Admin User
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
            <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
