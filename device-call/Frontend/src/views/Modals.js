import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './Css/modal.module.css';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate,useParams } from 'react-router-dom';
import { CCol, CRow, CContainer } from '@coreui/react';
import { IoArrowBackCircle } from "react-icons/io5";
import './Css/commonStyle.css';
import { isTokenExpire } from './gradeSubject';

const Modals = (props) => {
  const location = useLocation();
  const navigate = useNavigate();  
  const { videoUrl } = useParams();
  const user_info = JSON.parse(localStorage.getItem('user_info'));

  
  const decodedVideoUrl = decodeURIComponent(videoUrl);

  useEffect(() => {
    if(!user_info || isTokenExpire(user_info?.accessToken)){
        localStorage.removeItem('user_info')
        navigate('/login');
    }
  }, [user_info,navigate])

  const backHandler = () => {
    const removeLastBreadCrum = location.pathname.split('/videoplayer');
    navigate(`${removeLastBreadCrum[0]}`);
  }

  const PortalElement = document.getElementById('overlays');
  return (
    ReactDOM.createPortal(
      <CContainer fluid className={classes.modal}>
        <CRow className={classes.fullScreenRow}>
          <CCol className={classes.fullVideoContainer}>
            <IoArrowBackCircle className={classes.icons} onClick={backHandler} />
            <ReactPlayer
              className={classes.fullVideo}
              url={`https://qvolv-module-content.s3.amazonaws.com/Videos/${decodedVideoUrl}.mp4`}
              controls={true}
              width='100%'
              height='100%'
            />
          </CCol>
        </CRow>
      </CContainer>,
      PortalElement
    )
  );
}

export default Modals;
