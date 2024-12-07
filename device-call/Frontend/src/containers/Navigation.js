import {
  CRow,
  CContainer,

} from '@coreui/react';
import '../views/Css/navigation.css'
import { Link,useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Home from '../assets/icons/home.png'
import K12 from '../assets/icons/k-12.png'
import HeigherEd from '../assets/icons/higher-ed.png';
import VirtualTour from '../assets/icons/virtual-tour.png';
import Enterprise from '../assets/icons/enterprise.png'
import { isTokenExpire } from '../views/gradeSubject';




const Navigation = (props) => {

  const navigate = useNavigate();
  const user_info = JSON.parse(localStorage.getItem('user_info'));


  useEffect(() => {
    if(!user_info || isTokenExpire(user_info?.accessToken)){
        localStorage.removeItem('user_info')
        navigate('/login');
      }
  }, [user_info,navigate]);





  return (
    <CContainer className='bg-white' style={{marginBottom:'1.5rem'}}>
      <CRow className='home-navigation' >
        <Link to='/'>
          <div className='icon-text-adjustment' >
            <img alt='no-icons-found' src={Home} className='Three-d-icons'/>
            <div>All</div>
          </div>

        </Link>

        <Link to='/k12'>
          <div className='icon-text-adjustment' >
            <img alt='no-icons-found' src={K12} className='Three-d-icons'/>
            <div>K-12</div>
          </div>

        </Link>


        <Link to='/higher-ed'>
          <div className='icon-text-adjustment' >
            <img alt='no-icons-found' src={HeigherEd} className='Three-d-icons'/>
            <div>Higher Education</div>
          </div>

        </Link>


        <Link to='/enterprises'>
          <div className='icon-text-adjustment' >
            <img alt='no-icons-found' src={Enterprise} className='Three-d-icons' />
            <div>Enterprises</div>
          </div>
        </Link>


        <Link to='/virtual-tour'>
          <div className='icon-text-adjustment' >
            <img alt='no-icons-found' src={VirtualTour} className='Three-d-icons'/>
            <div>Virtual Tour</div>
          </div>
        </Link>
      </CRow>
     

    </CContainer>
  )
}

export default Navigation
