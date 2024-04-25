import React, { useEffect, useState } from 'react';
import Navbar2 from '../Components/Navbar2';
import { useNavigate } from 'react-router-dom';

const Home = ({name}) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [navigate, token]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sci-aurabackend-4.onrender.com/home');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <Navbar2  name = {name}/>
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-semibold mb-4 text-gray-500 font-poppins ml-8">Hospital Registrations</h1>
        <div className="overflow-y-auto max-h-96 px-12">
          <table className="min-w-full border rounded-lg">
            <thead className="rounded-lg">
              <tr className="bg-table">
                <th className="px-4 py-2 rounded-tl">No</th>
                {data.length > 0 &&
                  Object.keys(data[0])
                    .filter(key => key !== 'certificate' && key !== 'password' && key !== '_id' && key !== '__v')
                    .map((key) => (
                      <th key={key} className="px-4 py-2 border rounded-tr">{key}</th>
                    ))}
              </tr>
            </thead>
            <tbody>
              {data.map((hospital, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  {Object.keys(hospital)
                    .filter(key => key !== 'certificate' && key !== 'password' && key !== '_id' && key !== '__v')
                    .map((key, index) => (
                      <td key={index} className="border px-4 py-2">{hospital[key]}</td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
