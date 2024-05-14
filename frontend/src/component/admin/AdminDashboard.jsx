import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/addmanager">
                  Add Managers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/view-managers">
                  View Managers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/assignmanager">
                  Assign Managers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/view-employees">
                  View Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addproject">
                  Add Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/view-projects">
                  View Project
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <h2>Admin Dashboard</h2>
          {/* Add your dashboard content here */}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
