import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const[imag, setImah] = useState("https://img.freepik.com/free-vector/vector-photographer-character-camera-professional-operator-correspondent-man-illustration_1284-42379.jpg?size=338&ext=jpg");
    const[search, setSearch] = useState();
    const[user, setCurnt_user] = useState();
    const navigate = useNavigate();
    useEffect(() => {
      const get_user_details = async () => {
          const user_data = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';
          setCurnt_user(user_data.id);
          const data = await axios.post('http://localhost:5000/showprofile', {userId: user_data.id});
          setCurnt_user(data.data[0]);
          console.log("*********************************", data.data[0].profile_pic);
      }
      get_user_details();
  }, [])

  async function getSearch(event){
    event.preventDefault();
    navigate(`/search/${search}`);
  }

  return (
      <div className="header bg-white py-2 shadow-sm flex justify-between px-4">
          <div className='left flex justify-end'>
            <h2 className='site_name text-4xl relative md:text-2xl'>Socialwe</h2>
          </div>
          <div className='flex justify-center items-center gap-4 right-0 relative'>
              {/* home */}
              <div className="search">
                <form className='flex items-center' style={{border: "none"}} onSubmit={getSearch}>
                  <input className='px-4 py-2' type="text" placeholder='search' onChange={(ele) => setSearch(ele.target.value)} />
                  <button type='submit' className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg></button>
                </form>
              </div>
              <a href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </a>
              {/* notification */}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {/* profile   */}
              <div onClick={() => navigate(`/profile/${user}`)}>
                <div className='rounded-full shadow-lg' style={{display: imag===null ? "none" : "block"}}>
                  <img className="w-10 h-10 rounded-full p-1" src={user ? user.profile_pic : imag} alt="" />
                </div>
              </div>
          </div>
      </div>
  )
}

export default Header