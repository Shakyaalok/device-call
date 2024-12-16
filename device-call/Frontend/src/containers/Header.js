import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/icons/logo-white.png';
import '../views/Css/headers.css';
import { isTokenExpire } from '../utility/tokenExpiry';
import { toast } from 'react-toastify';

const Header = () => {
  const [visible, setVisible] = useState(false);  // Toggles navbar visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Manages login state
  const navigate = useNavigate();
  const user_info = JSON.parse(localStorage.getItem('user_info'));

  // Handle token expiration and user login state
  useEffect(() => {
    if (!user_info || isTokenExpire(user_info?.accessToken)) {      
      toast.warning('You have been Logout ')
      localStorage.removeItem('user_info');
      navigate('/login');
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [user_info, navigate]);

  // Handle logout
  const logoutHandler = () => {
    localStorage.removeItem('user_info');
    localStorage.removeItem('rcontent');
    toast.success('You have been Logout')
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="bg-body-teal fixed-header" style={{ padding: '0 0.5rem 0 1rem' }}>
      <Container fluid style={{ padding: '0' }}>

        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} className="logo" alt="Logo" />
        </Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setVisible(!visible)}
          style={{color:'white'}}
        >
        </Navbar.Toggle>

        {/* Navbar Collapse Section */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto text-white" onClick={() => setVisible(false)}>
            <Nav.Link as={Link} to="/" active className='text-white'>DashBoard</Nav.Link>
            <Nav.Link as={Link} to="/devices" active className='text-white'>Device</Nav.Link>
            <Nav.Item>
              {isLoggedIn === false
                ? <Nav.Link as={Link} to="/login" active  className='text-white'>Login</Nav.Link>
                : <Nav.Link as={Link} onClick={logoutHandler} active  className='text-white'>Logout</Nav.Link>
              }
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
