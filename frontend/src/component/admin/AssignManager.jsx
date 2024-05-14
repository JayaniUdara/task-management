import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignProject = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectCreatedDate: '',
    projectDeadline: '',
    managerId: ''
  });

  const { projectName, projectDescription, projectCreatedDate, projectDeadline, managerId } = formData;
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    
    const fetchManagers = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/managers');
        if (res && res.data) { 
          setManagers(res.data);
        } else {
          console.error("Error: Data not received from the server.");
        }
      } catch (err) {
        console.error(err.message); 
      }
    };

    fetchManagers();
  }, []);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({ projectName, projectDescription, projectCreatedDate, projectDeadline, managerId });

      const res = await axios.post('http://localhost:8080/api/admin/assignmanagers', body, config);

      console.log(res.data); 
    } catch (err) {
      console.error(err.response.data); 
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4">Assign Project to Manager</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Project Name"
            name="projectName"
            value={projectName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Project Description"
            name="projectDescription"
            value={projectDescription}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="Project Created Date"
            name="projectCreatedDate"
            value={projectCreatedDate}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="Project Deadline"
            name="projectDeadline"
            value={projectDeadline}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            name="managerId"
            value={managerId}
            onChange={onChange}
            required
          >
            <option value="">Select Manager</option>
            {managers.map(manager => (
              <option key={manager.id} value={manager.id}>
                {manager.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Assign Project</button>
      </form>
    </div>
  );
};

export default AssignProject;
