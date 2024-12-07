import { useEffect, useState, useCallback } from 'react';
import axios from '../services/api'
import {
    CCard,
    CCardBody,
    CCol,
    CRow,
    CContainer,
    CCardImage,
    CCardText,
} from '@coreui/react';
import { LuLoader2 } from "react-icons/lu";

import '../views/Css/k12.css'
import { RiGalleryView } from "react-icons/ri";
import { MdViewColumn, MdViewList,MdExpandMore, MdExpandLess } from "react-icons/md";
import { courseSelection, isTokenExpire,categoryId } from './gradeSubject';
import { useNavigate,useLocation } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import CommonSubHeaders from '../containers/CommonSubHeaders';



const HigherEd = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [changeView, setChangeView] = useState(3);
    const [isHovered, setIsHovered] = useState(false);
    const [target, setTarget] = useState(null);
    const [courseSelecteVal, setCourseSelectedVal] = useState([]);
    const [showCourse, setShowCourse] = useState(true);
    const [scrollContents, setScrollContents] = useState([]);
    const {content:filterContent,status} = useSelector(state=>state.filterContent);
    const [loading,setLoading] = useState(false);
    const [hasMore ,setHasMore] = useState(true);
    const [count,setCount] = useState(1);
    const [checkCourseFilter, setCheckCourseFilter] = useState([]);



    const user_info = JSON.parse(localStorage.getItem('user_info'));
    const location = useLocation();

    useEffect(() => {
        if(!user_info || isTokenExpire(user_info?.accessToken)){
            localStorage.removeItem('user_info')
            navigate('/login');
        }
      }, [user_info,navigate])

 
    const changeViewHandler = (numberOfCards) => {
        setChangeView(numberOfCards);
    }

    const handleMouseEnter = (i) => {
        setIsHovered(true);
        setTarget(i)
    }

    const handleMouseLeave = (i) => {
        setIsHovered(false);
        setTarget(null)
    }

    const checkCourseHandler = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setCourseSelectedVal((prevCourse) => {
            let newState;
            if (isChecked) {
                newState = [...prevCourse, value];
            } else {
                newState = prevCourse.filter((val) => val !== value);
            }
            return newState;
        })
    }


    const navigateHandler = (content) => {
        navigate(`/higher-ed/${content?.description}`);
        dispatch({ type: 'set', content: content })
    }


    
    const loadItems = useCallback(async () => {
        setLoading(true);
        let categoryNameArray = location?.pathname?.split('/')
        const category_id = categoryId(categoryNameArray)
        try {
          const response = await axios.get(`/contents?count=${count}&category_id=${category_id}`, {
            headers: {
              authorization: user_info.accessToken,
              token: user_info.refreshToken,
            },
          });
      
          await new Promise(resolve => setTimeout(resolve, 100));

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
      if (!filterContent?.length ) {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    }, [handleScroll, filterContent?.length]);


    useEffect(()=>{
        if(courseSelecteVal.length>0){
            const data = async()=>{
                try {
                    const response = await axios.get('/higher-ed',{
                        headers:{ authorization: user_info.accessToken,
                            token: user_info.refreshToken},
                        params:{
                            module_name:courseSelecteVal,
                        }
                    })
                    setCheckCourseFilter(response.data)
                } catch (error) {
                    
                }
            }
            data();
        }
    },[courseSelecteVal?.length])


    const dataInCol = () => {
        let contentsToDisplay;
        if(filterContent?.length>0) contentsToDisplay = filterContent;
        else if(courseSelecteVal?.length>0) contentsToDisplay = checkCourseFilter
        else contentsToDisplay = scrollContents;
        return contentsToDisplay.map((content) => (
            <CCol lg={changeView} md={6} key={content.id}>
                <CCard className='card-img-hover shadow card-container border-radius' onClick={() => navigateHandler(content)} onMouseEnter={() => handleMouseEnter(content.id)} onMouseLeave={() => handleMouseLeave(content.id)} >
                    <div className="image-container" onMouseEnter={() => handleMouseEnter(content.id)} onMouseLeave={handleMouseLeave}  >
                        <CCardImage orientation="top" src={`https://d2p61yp1r2u65b.cloudfront.net/Images/${content.imageUrl}`} className='separation_line' />
                        {target === content.id ? <div className={`black-overlay ${isHovered ? 'expanded' : ''}`}></div> : null}
                    </div>

                    <CCardBody>
                    <CCardText className='card-container card_space' style={{marginBottom:'2rem'}}>
                            <div className='card-text-1'>{content.description}</div>
                            <div className='card-text-2'>{content.main_description}</div>
                        </CCardText>
                    </CCardBody>
                </CCard>

            </CCol>
        ))
    }

    const dataInRow = () => {
        let contentsToDisplay;
        if(filterContent?.length>0) contentsToDisplay = filterContent;
        else if(courseSelecteVal?.length>0) contentsToDisplay = checkCourseFilter
        else contentsToDisplay = scrollContents;
        return (contentsToDisplay.map((content) => (
            <CCol lg={12} key={content.id}>
                <CCard className="mb-3 card-img-hover shadow card-container border-radius" style={{ maxWidth: '100%' }} onClick={() => navigateHandler(content)} onMouseEnter={() => handleMouseEnter(content.id)} onMouseLeave={() => handleMouseLeave(content.id)} >
                    <CRow className="g-0">
                        <CCol md={4}>
                            <div className="image-container" onMouseEnter={() => handleMouseEnter(content.id)} onMouseLeave={handleMouseLeave}  >
                                <CCardImage src={`https://d2p61yp1r2u65b.cloudfront.net/Images/${content.imageUrl}`} className='separation_line' />
                                {target === content.id ? <div className={`black-overlay ${isHovered ? 'expanded' : ''}`}></div> : null}
                            </div>
                        </CCol>

                        <CCol md={8}>
                            <CCardBody>
                            <CCardText className='card-container card_space' style={{marginBottom:'2rem'}}>
                                    <div className='card-text-1'>{content.description}</div>
                                    <div className='card-text-2'>{content.main_description}</div>
                                </CCardText>
                            </CCardBody>
                        </CCol>
                    </CRow>
                </CCard>
            </CCol>
        )))
    }

    const toggleGradeHandler = () => {
        setShowCourse(!showCourse)
    }


    return (
        <CContainer className='padding-top margin-container' style={{marginTop:'5rem'}}>
            <CommonSubHeaders/>
            <CRow className='margin-top'>

                <CCol lg={3} md={12}>
                    <CCard className='pt-4 pb-4 border-radius' >
                        <CCardText>
                            <CCol>

                                <div className='hide_show_container'>
                                <h2 className='left_card_heading'>Courses</h2>
                                    <div className='hide_show' onClick={toggleGradeHandler}>
                                        {showCourse ? <MdExpandMore className='icons toggle_icon_adjust' /> : <MdExpandLess className='icons toggle_icon_adjust' />}
                                    </div>
                                    <div className='underline' style={{ margin: 0,width:'100%' }}></div>
                                    <div className='double-underline' style={{ margin: 0 }}></div>
                                    <div>
                                        {showCourse && (<div className={`left-card-container content ${showCourse ? 'show' : ''}`}>
                                            {courseSelection.map((course) => (
                                                <div className='checkbox-container' key={course}>
                                                    <input type="checkbox" style={{ marginRight: '1rem' }} value={course}  checked={courseSelecteVal.includes(course)} onChange={(e) => checkCourseHandler(e)} /> <span className='left_card_text'>{course}</span>
                                             </div>
                                            ))}
                                        </div>)}
                                    </div>
                                </div>

                            </CCol>
                        </CCardText>
                    </CCard>
                </CCol>


                <CCol lg={9} md={12} >
                    <CRow className='down'>
                        <CCol className='gird-icon-parent'>
                        <h2 className='module_course_main_heading'>Courses</h2>
                            <div className='underline' style={{ margin: 0, width: '100%' }}></div>
                            <div className='double-underline double-underline-adjust' style={{ margin: 0 }}></div>
                            <div className='view-icons-container'>
                                <div className='view-icons'>
                                    <RiGalleryView onClick={() => changeViewHandler(3)} className={changeView === 3 ? 'clicked-added' : 'grid-view-icon'} style={{ marginRight: '5px' }} />
                                    <MdViewColumn onClick={() => changeViewHandler(4)} className={changeView === 4 ? 'clicked-added' : 'grid-view-icon'} style={{ marginRight: '5px' }} />
                                    <MdViewList onClick={() => changeViewHandler(12)} className={changeView === 12 ? 'clicked-added' : 'grid-view-icon'} style={{ marginRight: '5px' }} />
                                </div>
                            </div>
                        </CCol>
                    </CRow>


                    <CRow>
                        <CCol>
                            {!loading && filterContent?.length === 0 && <h3 className='no-match'>No Match Found!</h3>}
                        </CCol>
                    </CRow>

                    <CRow className='gap_on_grid_icon_hide loader_container'>
                   
                        {changeView !== 12 ?  status!==404 && (dataInCol()) :  status!==404 && (dataInRow())}
                        {loading && <div className='loader'><LuLoader2 /></div>}
                    </CRow>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default HigherEd
