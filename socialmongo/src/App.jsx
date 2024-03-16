import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import TheHeader from './components/TheHeader/TheHeader'
import Register from './components/Register/Register'
import PrivateZone from './guards/PrivateZone'
import Profile from './components/Profile/Profile'
import Posts from './components/Posts/Posts'
// import PostDetail from './components/Posts/PostDetail/PostDetail'
import Search from './components/Search/Search'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <PrivateZone>
                <Profile />
              </PrivateZone>
            }
          />
          <Route path='/posts' element= {<Posts />}/>
           {/* <Route path="/post/:id" element={<PostDetail />} /> */}
          <Route path="/search/:postName" element={<Search />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App