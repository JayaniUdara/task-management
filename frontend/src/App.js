import Register from './component/Register';
import Login from './component/Login';
import AdminDashboard from './component/admin/AdminDashboard';
import AddManager from './component/admin/AddManager';
import AddProject from './component/admin/AddProject';
import AssignManager from './component/admin/AssignManager';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/addmanager" element={<AddManager />} />
      <Route path="/addproject" element={<AddProject />} />
      <Route path="/assignmanager" element={<AssignManager />} />
      </Routes>
    </Router>
      
  );
}

export default App;
