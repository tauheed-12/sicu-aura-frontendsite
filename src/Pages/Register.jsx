import React, { useState, useEffect } from 'react';
import Leftbar from '../Components/Leftbar';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const Register = ({ color, setColor }) => {
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospitalName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    registrationDate: '',
    ambulanceCount: '',
    email: '',
    phoneNumber: '',
    registrationNumber: '',
    wardNumber: '',
    password: '',
    confirmPassword: '',
    certificate: null
  });

  const inputCSS = "border-b-2 border-gray-400 text-xl font-poppins outline-none";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      certificate: file
    });
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('hospitalName', formData.hospitalName);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('state', formData.state);
      formDataToSend.append('pincode', formData.pincode);
      formDataToSend.append('registrationDate', formData.registrationDate);
      formDataToSend.append('ambulanceCount', formData.ambulanceCount);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('registrationNumber', formData.registrationNumber);
      formDataToSend.append('wardNumber', formData.wardNumber);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('confirmPassword', formData.confirmPassword);
      formDataToSend.append('certificate', formData.certificate);

      const response = await fetch('https://sci-aurabackend-4.onrender.com/registers', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setRegister(true);
      } else {
        alert('Failed to Register');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Internal Server Error');
    }
  };

  const handleClicked = () => {
    navigate('/login'); 
  };

  useEffect(() => {
    return () => {
      // Cleanup
    };
  }, []); // Add your dependencies if you have any
  
  return (
    <div className="flex">
      {register && (
        <div className="absolute h-48 w-1/3 bg-white rounded-2xl left-1/3 top-2/4 ">
          <h1 className="text-3xl font-poppins">Your Registration Is Successful Click on Login</h1>
        </div>
      )}

      <div className={`flex-1 ${register ? 'opacity-25' : ''}`}>
        <Leftbar />
      </div>
      <div className={`flex-2 ${register ? 'opacity-25' : ''}`}>
        <Navbar color={color} setColor={setColor} />
        <div className="flex flex-col justify-center self-center p-8">
          <div className="flex px-12 gap-8">
            <div className="flex flex-col gap-16 justify-start self-center w-full px-8 flex-1">
              <input
                name="hospitalName"
                value={formData.hospitalName}
                placeholder='Hospital Name'
                className={inputCSS}
                onChange={handleChange}
              />
              <input
                name="address"
                value={formData.address}
                placeholder='Address'
                className={inputCSS}
                onChange={handleChange}
              />
              <input
                name="city"
                value={formData.city}
                placeholder='City'
                className={inputCSS}
                onChange={handleChange}
              />
              <input
                name="state"
                value={formData.state}
                placeholder='State'
                className={inputCSS}
                onChange={handleChange}
              />
              <input
                name="pincode"
                value={formData.pincode}
                placeholder='Pincode'
                className={inputCSS}
                onChange={handleChange}
              />
              <input
                name="registrationDate"
                value={formData.registrationDate}
                placeholder='Hospital Registration Date'
                className={inputCSS}
                onChange={handleChange}
              />
              <input
                name="ambulanceCount"
                value={formData.ambulanceCount}
                placeholder='Number Of Ambulance available'
                className={inputCSS}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col flex-1 gap-16">
              <input
                name="email"
                value={formData.email}
                placeholder='Email ID'
                className={inputCSS}
                onChange={handleChange}
              />
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder='Phone Number'
                className={inputCSS}
                onChange={handleChange}
              />
              <input
                name="registrationNumber"
                value={formData.registrationNumber}
                placeholder='Hospital Registration Number'
                className={inputCSS}
                onChange={handleChange}
              />
              <input
                name="wardNumber"
                value={formData.wardNumber}
                placeholder='Emergency-Ward Number'
                className={inputCSS}
                onChange={handleChange}
              />
              <input
                type='file'
                name="certificate"
                onChange={handleFileChange}
                className={inputCSS}
              />
              <input
                name="password"
                type="password"
                value={formData.password}
                placeholder='Create Password'
                className={inputCSS}
                onChange={handleChange}
              />
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                placeholder='Confirm Password'
                className={inputCSS}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            className="w-40 h-12 rounded-2xl bg-button text-white font-poppins self-center mt-10"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
