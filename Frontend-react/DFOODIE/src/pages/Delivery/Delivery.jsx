import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [message, setMessage] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email,
        firstName: user.name
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.age || formData.age < 18) newErrors.age = 'Age must be 18+';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.pincode || formData.pincode.length !== 6) newErrors.pincode = 'Valid pincode required';
    if (!formData.mobile || formData.mobile.length !== 10) newErrors.mobile = 'Valid mobile number required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await axios.post('http://localhost:9000/delivery', formData);
        console.log(res.data);
        setMessage('Delivery details saved!');
        setIsSubmitted(true);
      } catch (error) {
        setMessage(error.response?.data?.message || 'Error saving delivery details');
      }
    }
  };

  return (
    <div className="delivery">
      <h1>Deliver to :</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}  />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div>
          <label>Pincode:</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
          {errors.pincode && <span className="error">{errors.pincode}</span>}
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>
        <button type="submit" className="sub-btn">Submit</button>
      </form>

      {message && <p>{message}</p>}

      {isSubmitted && (
        <Link to='/PlaceOrder'><button className="next-btn">Next</button></Link>
      )}
    </div>
  );
};

export default Delivery;
