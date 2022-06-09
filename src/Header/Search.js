import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';

function Search() {
    const[search, setSearch] = useState();
    const { search_res } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        async function getSearchResult(){
            const search_result = await axios.post('http://localhost:5000/search', {search: search_res});
            console.log(search_result);
            setSearch(search_result.data);
        }
        getSearchResult();
    }, [])

    async function goToProfile(id){
        navigate(`/profile/${id}`);
    }

  return (
    <div>
        <Header />
        <h2>SEARCH RESULTS</h2>
        {
                search ? search.map((friend) => (
                    <div className='flex justify-between items-center my-8 w-6/12 mx-auto p-1 rounded-md' style={{border: "1px solid #edf0ec"}} onClick={() => goToProfile(friend.user_id)}>
                        <div className='flex items-center gap-4 text-lg font-thin'>
                            <img className='w-16 h-16' style={{borderRadius: "50%"}} src={friend.profile_pic} alt="" />
                            <h2>{friend.name}</h2>
                        </div>
                    </div>
                ))
                :
                console.log("sdkjfgwefgk", search)
            }
    </div>
  )
}

export default Search