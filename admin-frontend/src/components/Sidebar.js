import React from 'react';
import {Nav,Button} from 'react-bootstrap';
import {Link,useLocation} from 'react-router-dom';
import {ChevronLeft} from 'react-bootstrap-icons';

// Navigation items
const navigation = [
  { name:"Dashboard", href:"/", icon:"bi-house-door-fill" },
  { name:"Issues/Complaints", href:"/issues", icon:"bi-exclamation-triangle-fill" },
  { name:"Map View", href:"/map", icon: "bi-geo-alt-fill" },
  { name:"Departments", href:"/departments", icon:"bi-building-fill" },
  { name:"Analytics & Reports", href:"/analytics", icon:"bi-bar-chart-fill" },
  { name:"Settings/Alerts", href:"/settings", icon:"bi-gear-fill" },
];

/*collapsable and use props*/
export function Sidebar({ isCollapsed, toggleSidebar }) {
  const location = useLocation();

  return (
    <aside className={`sidebar-menu p-3 h-100 ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="d-flex align-items-center justify-content-between mb-4">
        {!isCollapsed && 
          ( <>
            <h4 className="m-0">Municipal Dashboard</h4>
            <Button variant="light" onClick={toggleSidebar} className="d-lg-none p-1" style={{ lineHeight: 0 }}>
              <ChevronLeft size={20} />
            </Button>
          </>)}
      </div>

      {/* Links */}
      <Nav className="flex-column">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Nav.Item key={item.name}>
              <Link 
                to={item.href} 
                className={`nav-link d-flex align-items-center ${isActive ? 'active' : ''} ${isCollapsed ? 'justify-content-center' : ''}`}
                title={isCollapsed ? item.name : ''} // Shows item name on hover when it is collapsed
              >
                <i className={`${item.icon} fs-5 ${!isCollapsed ? 'me-2' : ''}`}></i>
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </aside>
  );
}

export default Sidebar;
