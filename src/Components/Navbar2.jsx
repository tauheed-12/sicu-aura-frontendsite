import React from 'react'
import img1 from '../Assests/sci-aura.png'
import img2 from '../Assests/sci-aura - Copy.png'
import img3 from '../Assests/sci-profile.png'
import { useNavigate } from 'react-router-dom'
const Navbar2 = ({name}) => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          const response = await fetch('https://sci-aurabackend-4.onrender.com/api/logout', {
            method: 'POST',
            credentials: 'include'
          });
      
          if (response.ok) {
            localStorage.removeItem('token'); 
            navigate('/login');
          } else {
            console.error('Failed to log out');
          }
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };
  return (
    <div className="flex justify-between p-4 px-16 bg-navbar">
      <div className="flex gap-4 justify-center items-center">
        <img src={img1} alt='profile' className="h-14 w-14"></img>
        <img src={img2} alt='part2' className="h-12 w-38"></img>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <img src={img3} alt='profile' className="h-12 w-12 rounded-full"></img>
        <span className="text-white text-lg font-poppins">{name}</span>
        <button className="w-24 h-8 rounded-2xl bg-button text-white font-poppins self-center" onClick={handleLogout}>Log out</button>
      </div>
    </div>
  )
}

export default Navbar2
