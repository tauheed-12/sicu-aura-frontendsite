import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ setColor }) => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(id) {
    if (id === 1) {
      navigate('/login');
      setColor(1);
    } else {
      navigate('/register');
      setColor(2);
    }
  }

  return (
    <div className="flex py-12 px-6 justify-between self-center w-full">
      <div className="flex justify-center self-center flex-1">
        <div className="flex justify-center self-center w-24 h-24">
          <img
            src="https://s3-alpha-sig.figma.com/img/95ba/3481/3ad994db5b5e421121cc1ef38e21523e?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aU6wM~GpqkHeciKzNgTsGJJ0lfW3d4c3ZRUOrXsr2Ftqh7YyXoD4A0CYY7n5taTUS1UGj1q5c~~szQ1yCZa0frdkHztn8Box9wqDEqzuWZ3IWVKtiKduPYvRCk-su7Gd8zAcCawJY6mNsAqHUbhCo3tkRZ9zYKOUOi2yGrAT9Ev1ijQ~bhqwbZYje1SARPDwUT9Eomawz5AMAur8kx3hLXPgykYE8B9lvfbMDeAV51PkcsfG6WBcWDY-HW1UCfUb3fnFvNXSKXQv0LQCwvhuAzyPGR9r-R8WYeO6o~RWBo-JJ7NPjhNVM5-r4W~AH~oWTglDMSqpB8U07VR3M-xbJw__"
            alt='logoimage'
            className="flex-1"
          />
        </div>
      </div>
      <div className="flex-2 flex self-center font-poppins text-3xl">
        {location.pathname === '/login' ?
          <>
            <span className="text-gray-400" onClick={() => handleClick(2)}>Sign Up</span>
            <span className="text-gray-400">/</span>
            <span onClick={() => handleClick(1)}>Login</span>
          </>
          :
          <>
            <span onClick={() => handleClick(2)}>Sign Up</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400" onClick={() => handleClick(1)}>Login</span>
          </>
        }
      </div>
    </div>
  );
}

export default Navbar;
