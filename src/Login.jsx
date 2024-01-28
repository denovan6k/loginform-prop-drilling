import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function Login({ formData }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!loginData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!loginData.password || !passwordRegex.test(loginData.password)) {
      newErrors.password = 'Password must be at least 8 characters, including one uppercase letter, one lowercase letter, and one digit';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const authenticateUser = () => {
    // Simulate authentication by checking if the provided login credentials match the registered user
    const { email: registeredEmail, password: registeredPassword } = formData;
  
    if (loginData.email === registeredEmail && loginData.password === registeredPassword) {
      return formData; // Return the authenticated user data
    }
  
    return null; // Return null if authentication fails
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const authenticatedUser = authenticateUser();

      if (authenticatedUser) {
        console.log("Login successful:", authenticatedUser);
        setSubmitted(true);
        // Redirect to dashboard after successful login
        navigate('/Dashboard');
      } else {
        console.error("Login failed: Invalid credentials");
      }
    } else {
      setSubmitted(false);
    }
  };

  const handleClick = () => {
    navigate('/');
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen flex items-center justify-center rounded-md ">
      <form className="bg-white p-8 shadow-md rounded-md border-4" onSubmit={handleSubmit}>
        <div className="text-center mb-4 ">
          <h1 className="text-purple-800 text-4xl font-bold">Login</h1>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${errors.email && 'border-red-500'} rounded-md`}
          />
          {errors.email ? <span className="text-red-500 text-sm">{errors.email}</span> : null}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
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
            Login
          </button>
        </div>

        <div className="flex mt-4">
          <p>Do not have an account</p> <button className="ml-1 text-yellow-600 underline " onClick={handleClick}>Signup?</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
      username: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
    })
  ).isRequired,
};

export default Login;
