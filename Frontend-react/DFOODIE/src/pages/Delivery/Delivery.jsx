//form to get user details for delivery 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Delivery.css';

const Delivery = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    age: '',
    gender: '',
    pincode: '',
    mobile: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.age || formData.age < 18) newErrors.age = 'Age is required and must be 18 or older';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.pincode || formData.pincode.length !== 6) newErrors.pincode = 'Valid pincode is required';
    if (!formData.mobile || formData.mobile.length !== 10) newErrors.mobile = 'Valid mobile number is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form Data:', formData);
      setIsSubmitted(true); 
    }
  };

  return (
    <div className="delivery">
      <h1>Deliver to :</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className='form-gender' >
            <div className='form-gender-m' >
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={formData.gender === 'male'}
                />
              </label>
              <label>Male</label>
            </div>
            <div className='form-gender-m' >
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={formData.gender === 'female'}
                />
              </label>
              <label>Female</label>
            </div>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Enter your pincode"
          />
          {errors.pincode && <span className="error">{errors.pincode}</span>}
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <button type="submit" className='sub-btn' >Submit</button>
      </form>
      {isSubmitted && (
        <Link to='/PlaceOrder'><button className='next-btn' >Next</button></Link>
      )}
    </div>
  );
};

export default Delivery;
