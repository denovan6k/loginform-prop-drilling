import React, { useState } from "react";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";


function Form({formData,setFormData}) {
  Form.propTypes = {
    formData: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
      username: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
  };
  
      

 

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };
   
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters, including one uppercase letter, one lowercase letter, and one digit';
      isValid = false;
    }

    // Validate username
    if (!formData.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }
    if (!formData.username) {
      newErrors.firstname = 'Firstname is required';
      isValid = false;
    } 
    if (!formData.username) {
      newErrors.lastname = 'Lastname is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", formData);
      setSubmitted(true);
       // Navigate to another component after form submission
       navigate('/Login');
      
    } else {
      setSubmitted(false);
    }

  }
  


  

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen flex items-center justify-center rounded-md ">
      <form className="bg-white p-8 shadow-md rounded-md border-4" onSubmit={handleSubmit}>
        <div className="text-center mb-4 "> <h1 className="text-purple-800 text-4xl font-bold">Signup </h1></div>
      <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Firstname:
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${errors.username && 'border-red-500'} rounded-md`}
          />
          {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Lastname:
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${errors.username && 'border-red-500'} rounded-md`}
          />
          {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname}</span>}
        </div>
         <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${errors.email && 'border-red-500'} rounded-md`}
          />
          {errors.email ? <span className="text-red-500 text-sm">{errors.email}</span> : null}
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${errors.username && 'border-red-500'} rounded-md`}
          />
          {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${errors.password && 'border-red-500'} rounded-md`}
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
        </div>
        <div className="flex justify-center rounded-lg ">
        <button
          type="submit"
          className="bg-blue-500 mr-4 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
        
        </div>
       
      </form>
    </div>
  );
}


export default Form;

