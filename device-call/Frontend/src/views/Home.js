import { useEffect, useState, useCallback } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../containers/Header'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CContainer,
  CCardImage,
  CCardText,
} from '@coreui/react';
import Navigation from '../containers/Navigation';

import './Css/home.css';
import { LuLoader2 } from "react-icons/lu";
import { isTokenExpire,categoryId } from './gradeSubject';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrollContents, setScrollContents] = useState([]);
  const {content:filterContent,status} = useSelector(state => state.filterContent);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const location = useLocation();

  const user_info = JSON.parse(localStorage.getItem('user_info'));


  const navigateHandler = (content) => {
    navigate(`/home/${content?.description}`);
    dispatch({ type: 'set', content: content })
}


  useEffect(() => {
    if (!user_info || isTokenExpire(user_info?.accessToken)) {
      localStorage.removeItem('user_info');
      navigate('/login');
    }
  }, [user_info, navigate]);



  const loadItems = useCallback(async () => {
      setLoading(true);
      let categoryNameArray = location?.pathname?.split('/')
      const category_id = categoryId(categoryNameArray)

      await new Promise(resolve => setTimeout(resolve, 100));

      try {
        const response = await axios.get(`/contents?count=${count}&category_id=${category_id}`, {
          headers: {
            authorization: user_info.accessToken,
            token: user_info.refreshToken,
          },
        });
        
        setScrollContents(prevContents => {
          const combinedContents = [...prevContents, ...response.data];
          const uniqueContents = Array.from(new Set(combinedContents.map(item => item.main_description))).map(main_description => combinedContents.find(item => item.main_description === main_description));
          return uniqueContents;
        });
      

        setHasMore(response.data.length > 0);
      } catch (error) {
      } finally {
        setLoading(false);
      }
  }, [count]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);



  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !loading && hasMore) {
      setCount(prevCount => prevCount + 1);
    }
  }, [loading, hasMore]);


  useEffect(() => {
    if (!filterContent?.length) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, filterContent?.length]);



  const data = () => {
    const contentsToDisplay = filterContent?.length>0 ? filterContent : scrollContents;
    return contentsToDisplay.map((content, index) => (
      <CCol lg={3} md={4} sm={6} key={`${content.id}-${content.module_name}-${index}`}>
        <CCard className='shadow border-radius' onClick={() => navigateHandler(content)}>
           
          <div className="image-container">
              <CCardImage orientation="top" className='separation_line' src={`https://d2p61yp1r2u65b.cloudfront.net/Images/${content.imageUrl}`}  />
          </div>

         <CCardBody>
            <CCardText className='card-container card_space'>
              {content.grade ?
                <>
                  <div className='card-text-1'>{content.module_name}</div>
                  <div className='card-text-2'>{content.main_description}</div>
                </>
                :
                <>
                  <div className='card-text-1'>{content.description}</div>
                  <div className='card-text-2'>{content.main_description}</div>
                </>
              }
            </CCardText>
          </CCardBody>
        </CCard>
      </CCol>
    ));
  };


  return (
    <>   
    {/* <Header/> */}
     <CContainer className='bg__white' style={{marginTop:'5rem'}} >
      <Navigation />
      
      <CRow>
        <CCol>       
           { !loading && filterContent?.length===0 && <h3 className='no-match'>No Match Found!</h3>}
        </CCol>
      </CRow>

      <CRow className='loader_container'>        
        {status!==404 && data()}
        { loading && <div className='loader'><LuLoader2 /></div>}
      </CRow>
     
    </CContainer>
    </>

  );
};

export default Home;
