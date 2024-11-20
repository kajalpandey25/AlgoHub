import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <h1>AlgoHub</h1>
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/visualization">Visualizations</Link></li>
          <li><Link to="/code-editor">Code Editor</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
        </ul>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/visualization" onClick={toggleSidebar}>Visualizations</Link></li>
          <li><Link to="/code-editor" onClick={toggleSidebar}>Code Editor</Link></li>
          <li><Link to="/leaderboard" onClick={toggleSidebar}>Leaderboard</Link></li>
        </ul>
      </div>

      <style jsx>{`
        /* Navbar Styles */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #282c34;
          padding: 1rem 2rem;
          color: white;
          position: relative;
        }
        .navbar h1 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 1rem;
          margin: 0;
          padding: 0;
        }
        .nav-links li a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .nav-links li a:hover {
          color: #61dafb;
        }
        .menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }

        /* Sidebar Styles */
        .sidebar {
          position: fixed;
          top: 0;
          left: -100%;
          width: 250px;
          height: 100%;
          background-color: #282c34;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
          transition: left 0.3s ease;
          padding: 1rem;
          z-index: 1000;
        }
        .sidebar.open {
          left: 0;
        }
        .sidebar .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          margin-bottom: 1rem;
        }
        .sidebar ul {
          list-style: none;
          padding: 0;
        }
        .sidebar ul li {
          margin: 1rem 0;
        }
        .sidebar ul li a {
          text-decoration: none;
          color: white;
          font-size: 1.2rem;
          display: block;
        }
        .sidebar ul li a:hover {
          color: #61dafb;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .menu-btn {
            display: block;
          }
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
