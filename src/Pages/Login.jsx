import React, { useState } from 'react';
import Leftbar from '../Components/Leftbar';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
const Login = ({color, setColor, setName}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospitalName: '',
    email: '',
    password: '',
    accessCode: ''
  });

  const inputCSS = "border-b-2 border-gray-400 text-xl font-poppins outline-none";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      console.log(formData);
      setName(formData.hospitalName);
      const response = await fetch('https://sci-aurabackend-4.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.token);
        localStorage.setItem('token', data.token);
        navigate('/caputreface')
      } else {
        alert('Invalid ceredentials');
        console.error('Failed to Login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <Leftbar />
      </div>
      <div className="flex-2">
        <Navbar color={color} setColor={setColor} />
        <div className="w-full flex justify-center self-center flex-col pb-8">
          <div className="flex flex-col justify-center self-center p-12 shadow-lg rounded-2xl">
            <h1 className="text-xl font-poppins text-bluish text-center font-semibold">Welcome to Sicu-aura</h1>
            <p className='text-sm text-ptext font-poppins mb-16 text-center'>Your one stop safety solutions using innovative technology</p>
            <div className="flex flex-col gap-16 justify-start self-center w-full px-8 flex-1">
              <input 
                name="hospitalName"
                value={formData.hospitalName}
                placeholder='Hospital Name' 
                className={inputCSS}
                onChange={handleChange}
              />
              <input 
                name="email"
                value={formData.email}
                placeholder='Email ID' 
                className={inputCSS}
                onChange={handleChange}
              />
              <input 
                name="password"
                type="password"
                value={formData.password}
                placeholder='Password' 
                className={inputCSS}
                onChange={handleChange}
              />
              <input 
                name="accessCode"
                type="password"
                value={formData.accessCode}
                placeholder='Special Access Code' 
                className={inputCSS}
                onChange={handleChange}
              />
            </div>
            <button 
              className="w-40 h-12 rounded-2xl bg-button text-white font-poppins self-center mt-10"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Login;
