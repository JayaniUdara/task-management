import React, { useState } from 'react';
import axios from 'axios';

const AddManagers = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    contactNo: '',
    address: ''
  });

  const { firstName, lastName, email, password, gender, contactNo, address } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
  
      const body = JSON.stringify({ firstName, lastName, email, password, gender, contactNo, address });
  
      const res = await axios.post('http://localhost:8080/api/admin/add-manager', body, config);
  
      if (res && res.data) {
        console.log(res.data);
      } else {
        console.error('Error: Data not received from the server');
      }
    } catch (err) {
      console.error(err.response.data); 
    }
  };
  

  return (
    <div className="container">
      <h2 className="text-center mt-4">Add Manager</h2>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={onChange}
              required
            />
          </div>
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
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            name="gender"
            value={gender}
            onChange={onChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            placeholder="Contact Number"
            name="contactNo"
            value={contactNo}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Address"
            name="address"
            value={address}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Add Manager</button>
      </form>
    </div>
  );
};

export default AddManagers;
