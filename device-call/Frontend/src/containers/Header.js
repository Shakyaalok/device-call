import React, { useState, useEffect } from 'react'
import {
  CContainer,
  CNavbarBrand,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarToggler,
  CImage,
  CFormInput,
  CRow,
  CForm
} from '@coreui/react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../assets/icons/logo-white.png'
import '../views/Css/headers.css';
import { isTokenExpire, categoryId } from '../views/gradeSubject';
import { BsList } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import useDebounce from '../services/useDebounce';
import axios from '../services/api'
import { useDispatch } from 'react-redux';



const Header = () => {
  const [visible, setVisible] = useState(false);
  const [isLoggedIn, setIsLogggedIn] = useState(false);
  const [inputText, setInputText] = useState('');
  const [lensCrossToggler, setLensCrossToggler] = useState(false);
  const navigate = useNavigate();
  const debounceSearchTerm = useDebounce(inputText);
  const user_info = JSON.parse(localStorage.getItem('user_info'));
  const location = useLocation();
  const dispatch = useDispatch();


  useEffect(() => {
    if (!user_info || isTokenExpire(user_info?.accessToken)) {
      localStorage.removeItem('user_info');
      localStorage.removeItem('rcontent');
      navigate('/login');
      setIsLogggedIn(false)
    } else {
      setIsLogggedIn(true)
    }
  }, [user_info, navigate])


  const logoutHandler = () => {
    localStorage.removeItem('user_info');
    localStorage.removeItem('rcontent');
    navigate('/login');
  }




  const submitHandler = (e)=>{
    e.preventDefault()
  }
  const inputSearchHandler = (e) => {
   
    const val = e.target.value;
    if (val !== undefined || val !== null || val !== '') {
      setInputText(val);
      setLensCrossToggler(true);
    }

    if (val === '') {
      setLensCrossToggler(false);
      dispatch({ type: 'filter', filterContent: []})
    }
  }

  const clearSearchedTextHandler = () => {
    setInputText('');
    setLensCrossToggler(false);
    dispatch({ type: 'filter', filterContent: []})
  }


  return (
    <CNavbar expand="lg" className={`bg-body-teal fixed-header`} style={{padding:'0 0.5rem 0 1rem'}}>
      <CContainer fluid style={{padding:'0'}}>

        <CNavbarBrand as={Link} to='/'>
          <CImage src={Logo} className='logo' />
        </CNavbarBrand>

        <CNavbarToggler>
          <div onClick={() => setVisible(!visible)} className="navbar-toggler-button">
            <span className="navbar-toggler-icon">  {visible ? <RxCross2 /> : <BsList />}</span>
          </div>
        </CNavbarToggler>


        <CCollapse className="navbar-collapse" color='success' visible={visible}>


          <CNavbarNav onClick={()=>setVisible(false)}>
            <CNavItem>
            </CNavItem>
            <CNavItem>
              <CNavLink as={Link} to='/' active>Device</CNavLink>
            </CNavItem>
           
            <CNavItem>
              {isLoggedIn === false ? <CNavLink as={Link} to='/login' active>Login</CNavLink> : <CNavLink as={Link} onClick={logoutHandler} active>Logout</CNavLink>}
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}

export default Header
