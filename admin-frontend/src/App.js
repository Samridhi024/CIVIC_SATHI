// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import DashboardPage from './pages/DashboardPage';
// import IssuesPage from './pages/IssuesPage';
// import IssueDetailsPage from './pages/IssueDetailsPage';
// import TestPage from './pages/TestPage';
// import './styles.css';

// function App() {
//   return (
//     <Router>
//       <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
//         <Sidebar />
//         <div className="main-content-wrapper flex-grow-1 d-flex flex-column">
//           <Header />
//           <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
//             <Routes>
//               <Route path="/" element={<DashboardPage />} />
//               <Route path="/issues" element={<IssuesPage />} />
//               <Route path="/issue/:id" element={<IssueDetailsPage />} />
//               <Route path="/test" element={<TestPage />} />
//               {/* Add other routes for Map View, Departments, etc. */}
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import DashboardPage from './pages/DashboardPage';
// import IssuesPage from './pages/IssuesPage';
// import IssueDetailsPage from './pages/IssueDetailsPage';
// import TestPage from './pages/TestPage';
// import './styles.css';

// function App() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

//   return (
//     <Router>
//       <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
//         {/* Sidebar Container */}
//         <div className={`sidebar-wrapper ${sidebarCollapsed ? 'collapsed' : ''}`}>
//           <Sidebar toggleSidebar={toggleSidebar} isCollapsed={sidebarCollapsed} />
//         </div>

//         {/* Main Content Wrapper */}
//         <div className="main-content-wrapper flex-grow-1 d-flex flex-column">
//           <Header toggleSidebar={toggleSidebar} />
//           <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
//             <Routes>
//               <Route path="/" element={<DashboardPage />} />
//               <Route path="/issues" element={<IssuesPage />} />
//               <Route path="/issue/:id" element={<IssueDetailsPage />} />
//               <Route path="/test" element={<TestPage />} />
//               {/* Additional routes */}
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import DashboardPage from './pages/DashboardPage';
// import IssuesPage from './pages/IssuesPage';
// import IssueDetailsPage from './pages/IssueDetailsPage';
// import TestPage from './pages/TestPage';
// import './styles.css';

// function App() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

//   return (
//     <Router>
//       <div className="d-flex vh-100 vw-100">
//         <Sidebar isCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
        
//         <div className="main-content-wrapper flex-grow-1 d-flex flex-column">
//           <Header toggleSidebar={toggleSidebar} />
//           <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
//             <Routes>
//               <Route path="/" element={<DashboardPage />} />
//               <Route path="/issues" element={<IssuesPage />} />
//               <Route path="/issue/:id" element={<IssueDetailsPage />} />
//               <Route path="/test" element={<TestPage />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import DashboardPage from './pages/DashboardPage';
// import IssuesPage from './pages/IssuesPage';
// import IssueDetailsPage from './pages/IssueDetailsPage';
// import TestPage from './pages/TestPage';
// import './styles.css';

// function App() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 992);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 992) {
//         setSidebarCollapsed(true);
//       } else {
//         setSidebarCollapsed(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

//   return (
//     <Router>
//       <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
//         <Sidebar toggleSidebar={toggleSidebar} isCollapsed={sidebarCollapsed} />
        
//         <div className={`main-content-wrapper flex-grow-1 d-flex flex-column ${sidebarCollapsed ? 'sidebar-toggled' : ''}`}>
//           <Header toggleSidebar={toggleSidebar} />
//           <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
//             <Routes>
//               <Route path="/" element={<DashboardPage />} />
//               <Route path="/issues" element={<IssuesPage />} />
//               <Route path="/issue/:id" element={<IssueDetailsPage />} />
//               <Route path="/test" element={<TestPage />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import DashboardPage from './pages/DashboardPage';
// import IssuesPage from './pages/IssuesPage';
// import IssueDetailsPage from './pages/IssueDetailsPage';
// import TestPage from './pages/TestPage';
// import './styles.css';

// function App() {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth < 992);

//   const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

//   return (
//     <Router>
//       <div className="d-flex vh-100 vw-100">
//         <Sidebar toggleSidebar={toggleSidebar} isCollapsed={sidebarCollapsed} />
        
//         {/* Main Content Wrapper */}
//         <div className="main-content-wrapper flex-grow-1 d-flex flex-column">
//           <Header toggleSidebar={toggleSidebar} />
//           <div className="flex-grow-1 dashboard-container" style={{ overflowY: 'auto' }}>
//             <Routes>
//               <Route path="/" element={<DashboardPage />} />
//               <Route path="/issues" element={<IssuesPage />} />
//               <Route path="/issue/:id" element={<IssueDetailsPage />} />
//               <Route path="/test" element={<TestPage />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.js

// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import DashboardPage from './pages/DashboardPage';
// import IssuesPage from './pages/IssuesPage';
// import IssueDetailsPage from './pages/IssueDetailsPage';
// import MapPage from './pages/MapPage'; 
// import DepartmentsPage from './pages/DepartmentPage';
// import AnalyticsPage from './pages/AnalyticsPage';
// import './styles.css';

// function App() {
//   // State to track if the view is mobile
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
//   // State to track if the sidebar is open ON MOBILE
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // Effect to handle window resizing
//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 992;
//       setIsMobile(mobile);
//       // If we resize to a desktop view, always open the sidebar
//       if (!mobile) {
//         setSidebarOpen(true);
//       } else {
//         // If we resize to mobile view, collapse it
//         setSidebarOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     // Cleanup the event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // The toggle function now only works on mobile
//   const toggleSidebar = () => {
//     if (isMobile) {
//       setSidebarOpen(!sidebarOpen);
//     }
//   };

//   // Determine if the sidebar should be in a collapsed state
//   // On desktop, it's never collapsed. On mobile, its state is controlled by `sidebarOpen`.
//   const isCollapsed = isMobile ? !sidebarOpen : false;

//   return (
//     <Router>
//       <div className="d-flex vh-100 vw-100">
//         {/* 👇 PASS THE toggleSidebar FUNCTION HERE 👇 */}
//         <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        
//         <div className="main-content-wrapper flex-grow-1 d-flex flex-column">
//           <Header toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
//           <main className="flex-grow-1 dashboard-container">
//             <Routes>
//               <Route path="/" element={<DashboardPage />} />
//               <Route path="/issues" element={<IssuesPage />} />
//               <Route path="/issue/:id" element={<IssueDetailsPage />} />
//               <Route path="/map" element={<MapPage />} />
//               <Route path="/departments" element={<DepartmentsPage />} />
//               <Route path="/analytics" element={<AnalyticsPage />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { collection, query, where, onSnapshot } from "firebase/firestore";
// import { db } from "./lib/firebaseconfig";

// // Component Imports
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';

// // Page Imports
// import DashboardPage from './pages/DashboardPage';
// import IssuesPage from './pages/IssuesPage';
// import IssueDetailsPage from './pages/IssueDetailsPage';
// import MapPage from './pages/MapPage';
// import DepartmentsPage from './pages/DepartmentPage';
// import AnalyticsPage from './pages/AnalyticsPage';

// // Styles
// import './styles.css';

// function App() {
//   // State for responsive sidebar
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
  
//   // State for live notification count
//   const [newIssueCount, setNewIssueCount] = useState(0);

//   // Effect to handle window resizing for sidebar
//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 992;
//       setIsMobile(mobile);
//       if (!mobile) {
//         setSidebarOpen(true);
//       } else {
//         setSidebarOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Effect to listen for new issues in real-time
//   useEffect(() => {
//     // Query to get only documents with status "pending"
//     const q = query(collection(db, "reports"), where("status", "==", "pending"));

//     // Set up the real-time listener
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       // The number of documents in the snapshot is our count
//       setNewIssueCount(querySnapshot.size);
//     });

//     // Clean up the listener when the component unmounts
//     return () => unsubscribe();
//   }, []);

//   // Function to toggle sidebar on mobile
//   const toggleSidebar = () => {
//     if (isMobile) {
//       setSidebarOpen(!sidebarOpen);
//     }
//   };

//   // Determine if the sidebar should be in a collapsed state
//   const isCollapsed = isMobile ? !sidebarOpen : false;

//   return (
//     <Router>
//       <div className="d-flex vh-100 vw-100">
//         <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        
//         <div className="main-content-wrapper flex-grow-1 d-flex flex-column">
//           <Header 
//             toggleSidebar={toggleSidebar} 
//             isSidebarOpen={sidebarOpen} 
//             newIssueCount={newIssueCount} 
//           />
//           <main className="flex-grow-1 dashboard-container">
//             <Routes>
//               <Route path="/" element={<DashboardPage />} />
//               <Route path="/issues" element={<IssuesPage />} />
//               <Route path="/issue/:id" element={<IssueDetailsPage />} />
//               <Route path="/map" element={<MapPage />} />
//               <Route path="/departments" element={<DepartmentsPage />} />
//               <Route path="/analytics" element={<AnalyticsPage />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import { collection, query, where, onSnapshot, Timestamp } from "firebase/firestore";
// import { db } from "./lib/firebaseconfig";

// // Component Imports
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';

// // Page Imports
// import DashboardPage from './pages/DashboardPage';
// import IssuesPage from './pages/IssuesPage';
// import IssueDetailsPage from './pages/IssueDetailsPage';
// import MapPage from './pages/MapPage';
// import DepartmentsPage from './pages/DepartmentPage';
// import AnalyticsPage from './pages/AnalyticsPage';
// import ProfilePage from './pages/ProfilePage';

// // Styles
// import './styles.css';

// function App() {

//   // We use an inner component to access the useNavigate hook
//   const AppContent = () => {
//     const navigate = useNavigate();

//     // State for responsive sidebar
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
//     const [sidebarOpen, setSidebarOpen] = useState(false);
    
//     // State for live notification count
//     const [newIssueCount, setNewIssueCount] = useState(0);

//     // State for search functionality
//     const [searchTerm, setSearchTerm] = useState('');

//     // Effect to handle window resizing for sidebar
//     useEffect(() => {
//       const handleResize = () => {
//         const mobile = window.innerWidth < 992;
//         setIsMobile(mobile);
//         if (!mobile) {
//           setSidebarOpen(true);
//         } else {
//           setSidebarOpen(false);
//         }
//       };

//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     // Effect to listen for new issues in real-time for notifications
//     useEffect(() => {
//       const lastViewed = localStorage.getItem('lastViewedNotifications');
//       const lastViewedTimestamp = lastViewed ? Timestamp.fromMillis(parseInt(lastViewed)) : Timestamp.fromMillis(0);

//       const q = query(
//         collection(db, "reports"), 
//         where("status", "==", "pending"),
//         where("createdAt", ">", lastViewedTimestamp)
//       );

//       const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         setNewIssueCount(querySnapshot.size);
//       });

//       return () => unsubscribe();
//     }, []);

//     // Function to toggle sidebar on mobile
//     const toggleSidebar = () => {
//       if (isMobile) {
//         setSidebarOpen(!sidebarOpen);
//       }
//     };
    
//     // Function to handle clicking the notification icon
//     const handleNotificationClick = () => {
//       localStorage.setItem('lastViewedNotifications', Date.now().toString());
//       setNewIssueCount(0);
//       navigate('/issues');
//     };

//     // Determine if the sidebar should be in a collapsed state
//     const isCollapsed = isMobile ? !sidebarOpen : false;

//     return (
//       <div className="d-flex vh-100 vw-100">
//         <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        
//         <div className="main-content-wrapper flex-grow-1 d-flex flex-column">
//           <Header 
//             toggleSidebar={toggleSidebar} 
//             isSidebarOpen={sidebarOpen} 
//             newIssueCount={newIssueCount}
//             onNotificationClick={handleNotificationClick}
//             searchTerm={searchTerm}
//             setSearchTerm={setSearchTerm}
//           />
//           <main className="flex-grow-1 dashboard-container">
//             <Routes>
//               <Route path="/" element={<DashboardPage />} />
//               <Route path="/issues" element={<IssuesPage searchTerm={searchTerm} />} />
//               <Route path="/issue/:id" element={<IssueDetailsPage />} />
//               <Route path="/map" element={<MapPage />} />
//               <Route path="/departments" element={<DepartmentsPage />} />
//               <Route path="/analytics" element={<AnalyticsPage />} />
//               <Route path="/profile" element={<ProfilePage />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     );
//   };
  
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "./lib/firebaseconfig";

// Component Imports
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Page Imports
import DashboardPage from './pages/DashboardPage';
import IssuesPage from './pages/IssuesPage';
import IssueDetailsPage from './pages/IssueDetailsPage';
import MapPage from './pages/MapPage';
import DepartmentsPage from './pages/DepartmentPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ProfilePage from './pages/ProfilePage';
import ProfilePage from './pages/SettingsPage';

// Styles
import './styles.css';

function App() {
  const AppContent = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [newIssueCount, setNewIssueCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      const handleResize = () => {
        const mobile = window.innerWidth < 992;
        setIsMobile(mobile);
        if (!mobile) {
          setSidebarOpen(true);
        } else {
          setSidebarOpen(false);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      const q = query(collection(db, "reports"), where("status", "==", "pending"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const lastViewed = localStorage.getItem('lastViewedNotifications');
        const lastViewedTimestamp = lastViewed ? new Date(parseInt(lastViewed)) : new Date(0);
        const newIssues = querySnapshot.docs.filter(doc => {
          const createdAtDate = doc.data().createdAt?.toDate();
          return createdAtDate && createdAtDate > lastViewedTimestamp;
        });
        setNewIssueCount(newIssues.length);
      });
      return () => unsubscribe();
    }, []);

    const toggleSidebar = () => {
      if (isMobile) {
        setSidebarOpen(!sidebarOpen);
      }
    };
    
    const handleNotificationClick = () => {
      localStorage.setItem('lastViewedNotifications', Date.now().toString());
      setNewIssueCount(0);
      navigate('/issues');
    };

    const isCollapsed = isMobile ? !sidebarOpen : false;

    return (
      <div className="d-flex vh-100 vw-100">
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        
        <div className="main-content-wrapper flex-grow-1 d-flex flex-column">
          <Header 
            toggleSidebar={toggleSidebar} 
            isSidebarOpen={sidebarOpen} 
            newIssueCount={newIssueCount}
            onNotificationClick={handleNotificationClick}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <main className="flex-grow-1 dashboard-container">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/issues" element={<IssuesPage searchTerm={searchTerm} />} />
              <Route path="/issue/:id" element={<IssueDetailsPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/departments" element={<DepartmentsPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
      </div>
    );
  };
 
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
