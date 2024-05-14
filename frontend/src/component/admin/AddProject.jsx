import React, { useState } from 'react';
import axios from 'axios';

const AddProject = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectRequirements: '',
    projectDeadline: ''
  });

  const { projectName, projectDescription, projectRequirements, projectDeadline } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({ projectName, projectDescription, projectRequirements, projectDeadline });

      const res = await axios.post('http://localhost:8080/api/projects/add', body, config);

      console.log(res.data); 
    } catch (err) {
      console.error(err.response.data); 
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4">Add Project</h2>
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
          <textarea
            className="form-control"
            placeholder="Project Requirements"
            name="projectRequirements"
            value={projectRequirements}
            onChange={onChange}
            required
          ></textarea>
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
        <button type="submit" className="btn btn-primary btn-block">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;
