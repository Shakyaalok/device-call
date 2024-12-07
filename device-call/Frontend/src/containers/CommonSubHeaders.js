import React,{useState,useEffect} from 'react'
import {
    CCard,
    CCardBody,
    CCol,
    CRow,
    CCardText
} from '@coreui/react'
import '../views/Css/k12.css'
import {Link,useLocation} from 'react-router-dom'

const CommonSubHeaders = () => {

    const location = useLocation();
    const [active,setActive] = useState(1);

    useEffect(()=>{
        if(location.pathname==='/k12'){
            setActive(1)
        }
        if(location.pathname==='/higher-ed'){
            setActive(2)
        }
    },[])


  return (
    <CRow className='center'>
    <CCol lg={4}  >
        <Link to='/k12' className='remove_text_decoration'>
        <CCard className={`top_card_bg__grey border-radius card_${active===1 ? 'active':'hover'}`}>
            <CCardBody className='text-center line shadow-bottom top-card-padding'>
                <CCardText>
                    <span className='top-card-heading'>K-12</span>
                    <div className='underline'></div>
                    <h4 style={{ marginTop: '10px' }} className='top-card-text'>Learning Today, Leading Tomorrow.</h4>
                </CCardText>
            </CCardBody>
        </CCard>
        </Link>
    </CCol>
    <CCol lg={4}  >
    <Link to='/higher-ed' className='remove_text_decoration'>
        <CCard className={`top_card_bg__grey border-radius card_${active===2 ? 'active':'hover'}`}>
            <CCardBody className='text-center line shadow-bottom top-card-padding'>
                <CCardText>
                    <span className='top-card-heading'>Higher Ed</span>
                    <div className='underline'></div>
                    <h4 style={{ marginTop: '10px' }} className='top-card-text'>Innovate, Elevate, Educate.</h4>                              
                </CCardText>
            </CCardBody>
        </CCard>
        </Link>
    </CCol>

</CRow>

  )
}

export default React.memo(CommonSubHeaders);
