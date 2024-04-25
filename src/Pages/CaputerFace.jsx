import React, { useRef, useState, useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Leftbar from '../Components/Leftbar';
import img from "../Assests/icons8-camera-50.png"
import { useNavigate } from 'react-router-dom';

const CaptureFace = ({ color, setColor }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [navigate, token]);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [start, setStart] = useState(false);

  const startCamera = () => {
    setStart(true);
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStart(true);
        }
      })
      .catch(error => {
        console.error('Error accessing the camera: ', error);
      });
  };

  const captureImage = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const image = canvas.toDataURL('image/png');
      console.log(image);
      try {
        const response = await fetch('https://sci-aurabackend-4.onrender.com/client/uploadImg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Image uploaded successfully');
          console.log('Image URL:', data.imageUrl);
          navigate('/')
        } else {
          console.error('Failed to upload image');
          console.log('hello')
          alert('Due to cors policy not allowed');
          navigate('/');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        navigate('/');
      }
    }
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <Leftbar />
      </div>
      <div className="flex-2">
        <Navbar color={color} setColor={setColor} />
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-center text-xl font-semibold font-poppins">Please capture your face to continue</h3>
          <div className="w-80 h-80 bg-capture flex justify-center items-center" onClick={startCamera}>
            {start ?
              <video ref={videoRef} className="h-full w-full" autoPlay></video> :
              <img src={img} alt='img' className="h-12 w-12"></img>
            }
          </div>
          <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
          <button className="w-40 h-12 rounded-2xl bg-button text-white font-poppins self-center mt-12 mb-3.5" onClick={captureImage}>Capture</button>
        </div>
      </div>
    </div>
  )
}

export default CaptureFace;
