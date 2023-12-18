import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Navbar = () => {
  const {currentUser , logout} = useContext(AuthContext);
  const navigate = useNavigate()

  const handelLogout = async() =>{
    await logout()
    navigate('/login')
  }
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to={'/'}>
            TrueBlog
          </Link>
        </div>
        <div className="links">
          <Link className='link' to={'/?cat=art'}><h6>ART</h6></Link>
          <Link className='link' to={'/?cat=science'}><h6>SCIENCE</h6></Link>
          <Link className='link' to={'/?cat=technology'}><h6>TECHNOLOGY</h6></Link>
          <Link className='link' to={'/?cat=music'}><h6>MUSIC</h6></Link>
          <Link className='link' to={'/?cat=cinema'}><h6>CINEMA</h6></Link>
          <span className='username'>{currentUser?.username}</span>
          {currentUser ? <span onClick={handelLogout}>Logout</span> : <Link className='login'to='/login'>Login</Link>}
          {currentUser && <span className='write'>
            <Link to={'/write'}>Write</Link>
          </span>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
