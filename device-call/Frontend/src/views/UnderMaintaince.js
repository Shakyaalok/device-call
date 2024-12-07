import React, { useEffect } from 'react'
import { CCol, CContainer, CRow, CCardBody, CCardText } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import { isTokenExpire } from './gradeSubject';
import './Css/underMaintainance.css'



const UnderMaintaince = () => {

  const navigate = useNavigate();
  const user_info = JSON.parse(localStorage.getItem('user_info'));



  useEffect(() => {
    if (!user_info || isTokenExpire(user_info?.accessToken)) {
      localStorage.removeItem('user_info')
      navigate('/login');
    }
  }, [user_info, navigate])

  const goToHomePage = () => {
    navigate('/');
  };


  return (
    <CContainer>
      <CRow className="under-maintenance-container">
        <CCol>
          <CCardBody className="under-maintenance-card">
            <CCardText className="maintext">
              <div className="under-maintenance-text">
                <h2><b>Exciting Updates in Progress!</b></h2>
              </div>
              <div className="under-maintenance-message">
                <p>We're currently putting the finishing touches on something amazing! Our team is hard at work to bring you a brand new
                  experience. Please bear with us as we make everything perfect. Check back soon – we can't wait to show you what's coming!</p>
              </div>
            </CCardText>
            <button className="backbutton" onClick={goToHomePage}>
              Back to Home
            </button>
          </CCardBody>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default UnderMaintaince
