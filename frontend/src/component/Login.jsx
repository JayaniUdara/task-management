import React, { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    role: '',
    email: '',
    password: ''
  });

  const { role, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({ role, email, password });

      const res = await axios.post('http://localhost:8080/api/login', body, config);

      console.log(res.data); 
    } catch (err) {
      console.error(err.response.data); 
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mb-4">User Login</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <select
                className="form-control"
                name="role"
                value={role}
                onChange={onChange}
                required
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
