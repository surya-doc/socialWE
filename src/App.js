import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin_up from './Signup/Signin_up';
import Signin_in from './Signup/Signin_in';
import Profile from './Profile/Profile';
import EditProfile from './Profile/EditProfile';
import FriendList from './Friends/FriendList';
import CreatePost from './Posts/CreatePost';
import RequestList from './Friends/RequestList';
import Post from './Posts/Post';
import Home from './Home/Home';
import UploadAndDisplayImage from './UploadAndDisplayImage';
import Search from './Header/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UploadAndDisplayImage />} />
          <Route path='/signup' element={<Signin_up />} />
          <Route path='/signin' element={<Signin_in />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/profile/:id/updateprofile' element={<EditProfile />} />
          <Route path='/profile/:id/friends' element={<FriendList />} />
          <Route path='/profile/:id/requests' element={<RequestList />} />
          <Route path='/profile/createpost' element={<CreatePost />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search/:search_res' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
