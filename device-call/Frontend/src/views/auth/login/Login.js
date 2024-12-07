// import React, { useEffect, useState } from 'react'
// import {  useNavigate,useLocation } from 'react-router-dom'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
//   CImage,
// } from '@coreui/react'
// import logo from '../../../assets/icons/logo-white.png'
// import '../../Css/chartsStyle.css'
// import axios from '../../../services/api'
// import { useFormik } from 'formik';
// import { FaUser,FaLock } from "react-icons/fa";
// // import { useNavigate } from 'react-router-dom'

// const Login = () => {

//   const [message, setMessage] = useState("")
//   const navigate = useNavigate()
//   const location = useLocation();
//   const user_info = JSON.parse(localStorage?.getItem('user_info'));
  

//   const validate = values => {
//     const errors = {};
//     if (!values.password) {
//       errors.password = 'Required';
//     }

//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
//     return errors;
//   };


//   useEffect(()=>{
//     if(user_info && location.pathname === '/login'){
//       navigate('/');
//     }
//   },[navigate])

 
   

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: ''
//     },
//     validate,
//     onSubmit: values => {
//       user_login(values)
//     }
//   })


//   async function user_login(values) {
//     try {
//       const response = await axios.post('/login', { email: values.email, password: values.password });
//       if (response.data.user) {
//         localStorage.setItem('user_info', JSON.stringify(response.data))
//         navigate('/')
//       } else {
//         setMessage(response.data.message)
//       }
//     } catch (e) {
//     }
//   }


//   return (
//     <div className="c-app c-default-layout flex-row align-items-center background_img">
//       <CContainer>
//         <CRow className='row_shift_for_responsive'>
//           {/* for left part */}
//           <CCol md={5} className='animated-logo_container'>
//             <div>
//               <CImage src={logo} width={'100%'} className='multi_color_animation p-4 shadow mb-5 bg-body rounded' />
//             </div>
//           </CCol>


//           <CCol md={7}>
//             <CCardGroup style={{ opacity: '0.7'}}>
//               <CCard className="p-4 shadow mb-5 bg-body rounded position-relative animated">
//                 <CCardBody >
//                   <CForm onSubmit={formik.handleSubmit}>
//                     <h3 style={{ color: 'rgb(255,87,34)' }}>Login</h3>
//                     <p className="text-muted">Sign In to your account</p>
//                     <p className="text-danger">{message}</p>
//                     <p className="text-warning field_validate_label" >{formik.errors.email ? formik.errors.email : null}</p>


//                     <CInputGroup className="mb-3 remove_focus">
                      
//                         <CInputGroupText style={{ background: 'rgb(0, 76, 76)', color: 'white' }}>
//                           <FaUser name="cli cil-user" />
//                         </CInputGroupText>
                      
//                       <CFormInput id="email" name="email" type="email" placeholder="Email" autoComplete="username" value={formik.values.email} onChange={formik.handleChange} />
//                     </CInputGroup>

//                     <p className="text-warning field_validate_label" >{formik.errors.password ? formik.errors.password : null}</p>
//                     <CInputGroup className="mb-4 remove_focus">
                      

//                         <CInputGroupText style={{ background: 'rgb(0, 76, 76)', color: 'white' }}>
//                           <FaLock name="cli cil-lock-locked" />
//                         </CInputGroupText>
                      
//                       <CFormInput id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" value={formik.values.password} onChange={formik.handleChange} />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs="6">
//                         <CButton type="submit" style={{ background: 'rgb(0, 76, 76)', color: 'white' }} className="px-4">Login</CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>

//   )
// }

// export default Login

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CImage,
} from '@coreui/react';
import logo from '../../../assets/icons/logo-white.png';
import '../../Css/chartsStyle.css';
import axios from '../../../services/api';
import { useFormik } from 'formik';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const user_info = JSON.parse(localStorage.getItem('user_info'));
  const [isLoading, setIsLoading] = useState(true);

  const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  useEffect(() => {
    if (user_info && location.pathname === '/login') {
      navigate('/');
    }
  }, [user_info, location.pathname, navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      user_login(values);
    }
  });



  async function user_login(values) {
    try {
      const response = await axios.post('/login', { email: values.email, password: values.password });
      if (response.data.user) {
        localStorage.setItem('user_info', JSON.stringify(response.data));
        navigate('/');
      } else {
        setMessage(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error', error);
      setMessage('An error occurred. Please try again.');
    }
  }


  useEffect(() => {
    if (user_info && location.pathname === '/login') {
      setIsLoading(true);
      const timer = setTimeout(() => {
        navigate('/');
      }, 100);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [user_info, location.pathname, navigate]);

  if (isLoading) {
    return <div></div>;
  }


  return (
    <div className="c-app c-default-layout flex-row align-items-center background_img">
      <CContainer>
        <CRow className='row_shift_for_responsive'>
          {/* for left part */}
          <CCol md={5} className='animated-logo_container'>
            <div>
              <CImage src={logo} width={'100%'} className='multi_color_animation p-4 shadow mb-5 bg-body rounded' />
            </div>
          </CCol>

          <CCol md={7}>
            <CCardGroup style={{ opacity: '0.7' }}>
              <CCard className="p-4 shadow mb-5 bg-body rounded position-relative animated">
                <CCardBody>
                  <CForm onSubmit={formik.handleSubmit}>
                    <h3 style={{ color: 'rgb(255,87,34)' }}>Login</h3>
                    <p className="text-muted">Sign In to your account</p>
                    {message && <p className="text-danger">{message}</p>}
                    
                    <CInputGroup className="mb-3 remove_focus">
                      <CInputGroupText style={{ background: 'rgb(0, 76, 76)', color: 'white' }}>
                        <FaUser name="cli cil-user" />
                      </CInputGroupText>
                      <CFormInput
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        autoComplete="username"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </CInputGroup>
                    {formik.errors.email && <p className="text-warning field_validate_label">{formik.errors.email}</p>}
                    
                    <CInputGroup className="mb-4 remove_focus">
                      <CInputGroupText style={{ background: 'rgb(0, 76, 76)', color: 'white' }}>
                        <FaLock name="cli cil-lock-locked" />
                      </CInputGroupText>
                      <CFormInput
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                    </CInputGroup>
                    {formik.errors.password && <p className="text-warning field_validate_label">{formik.errors.password}</p>}
                    
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" style={{ background: 'rgb(0, 76, 76)', color: 'white' }} className="px-4">
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
