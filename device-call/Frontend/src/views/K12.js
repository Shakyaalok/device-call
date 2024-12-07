import { useEffect, useState, useCallback } from 'react';
import axios from '../services/api'
import {
    CCard,
    CCardBody,
    CCol,
    CRow,
    CContainer,
    CCardImage,
    CCardText
} from '@coreui/react'

import '../views/Css/k12.css'
import { RiGalleryView } from "react-icons/ri";
import { MdViewColumn, MdViewList, MdExpandMore, MdExpandLess } from "react-icons/md";
import { grades, gradeSubjects, subjectMatchedGrades, gradesMatchSubject, subjects, isTokenExpire, categoryId } from './gradeSubject'
import { LuLoader2 } from "react-icons/lu";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommonSubHeaders from '../containers/CommonSubHeaders';



// this is for the k-12 
const K12 = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [changeView, setChangeView] = useState(3);
    const [isHovered, setIsHovered] = useState(false);
    const [target, setTarget] = useState(null);
    const [gradeSelectedVal, setGradeSelectedVal] = useState([]);
    const [subjectSelectedVal, setSubjectSelectedVal] = useState([])
    const [initailSubjectOrFilterSubject, setInitailSubjectOrFilterSubject] = useState(subjects);
    const [initialGradesOrFilterGrades, setInitialGradesOrFilterGrades] = useState(grades);
    const [showGrades, setShowGrades] = useState(true);
    const [showSubjects, setShowSubjects] = useState(true);
    const user_info = JSON.parse(localStorage.getItem('user_info'));
    const [scrollContents, setScrollContents] = useState([]);
    const { content: filterContent, status } = useSelector(state => state.filterContent);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [count, setCount] = useState(1);
    const location = useLocation();
    const [checkGradeSubjectFilter, setCheckGradeSubjectFilter] = useState([]);



    useEffect(() => {
        if (!user_info || isTokenExpire(user_info?.accessToken)) {
            localStorage.removeItem('user_info')
            navigate('/login');
        }
    }, [user_info, navigate])


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

    const checkGradeHandler = (e) => {
        const value = Number(e.target.value);
        const isChecked = e.target.checked;

        setGradeSelectedVal((prevState) => {
            let newState;
            if (isChecked) {
                newState = [...prevState, value];
            } else {
                newState = prevState.filter((val) => val !== value);
            }
            return newState;
        });
    };

    const checkSUbjectHandler = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setSubjectSelectedVal((prevSubject) => {
            let newState;
            if (isChecked) {
                newState = [...prevSubject, value];
            } else {
                newState = prevSubject.filter((val) => val !== value);
            }
            return newState;
        })
    }


    useEffect(() => {
        let subject = gradeSelectedVal.length > 0 ? subjectMatchedGrades(gradeSelectedVal, gradeSubjects) : subjects
        setInitailSubjectOrFilterSubject(subject);
    }, [gradeSelectedVal]);


    useEffect(() => {
        let grade = subjectSelectedVal.length > 0 ? gradesMatchSubject(gradeSubjects, subjectSelectedVal) : grades;
        setInitialGradesOrFilterGrades(grade);
    }, [subjectSelectedVal]);



    const navigateHandler = (content) => {
        navigate(`/k12/${content?.videoUrl?.split('.mp4')[0]}`);
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
        if (!filterContent?.length || !gradeSelectedVal?.length || !subjectSelectedVal?.length) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll, filterContent?.length, gradeSelectedVal?.length, subjectSelectedVal?.length]);


    useEffect(() => {
        if (gradeSelectedVal?.length > 0 || subjectSelectedVal?.length > 0) {
            const data = async () => {
                try {
                    const response = await axios.get('/k12', {
                        headers: {
                            authorization: user_info.accessToken,
                            token: user_info.refreshToken
                        },
                        params: {
                            grades: gradeSelectedVal,
                            subjects: subjectSelectedVal
                        }
                    })
                    setCheckGradeSubjectFilter(response.data)
                } catch (error) {

                }
            }
            data();
        }
    }, [gradeSelectedVal, subjectSelectedVal])


    const dataInCol = () => {
        let contentsToDisplay;
        if (filterContent?.length > 0) contentsToDisplay = filterContent;
        else if (gradeSelectedVal?.length > 0 || subjectSelectedVal?.length > 0) contentsToDisplay = checkGradeSubjectFilter
        else contentsToDisplay = scrollContents;
        return contentsToDisplay.map((content) => (
            <CCol lg={changeView} md={6} key={content.id} >
                <CCard className='card-img-hover shadow border-radius' onMouseEnter={() => handleMouseEnter(content.id)} onMouseLeave={() => handleMouseLeave(content.id)} onClick={() => navigateHandler(content)} >
                    <div className="image-container" onMouseEnter={() => handleMouseEnter(content.id)} onMouseLeave={handleMouseLeave}  >
                        <CCardImage orientation="top" src={`https://d2p61yp1r2u65b.cloudfront.net/Images/${content.imageUrl}`} className='separation_line' />
                        {target === content.id ? <div className={`black-overlay ${isHovered ? 'expanded' : ''}`}></div> : null}
                    </div>
                    <CCardBody>
                        <CCardText className='card-container card_space' style={{ marginBottom: '2rem' }}>
                            <div className='card-text-1'>{content.module_name}</div>
                            <div className='card-text-2'>{content.main_description}</div>
                        </CCardText>
                    </CCardBody>
                </CCard>

            </CCol>
        ))
    }


    const dataInRow = () => {
        let contentsToDisplay;
        if (filterContent?.length > 0) contentsToDisplay = filterContent;
        else if (checkGradeSubjectFilter?.length > 0) contentsToDisplay = checkGradeSubjectFilter
        else contentsToDisplay = scrollContents;
        return (
            contentsToDisplay.map((content) => (
                <CCol lg={12} key={content.id}>
                    <CCard className="mb-3 card-img-hover shadow card-container border-radius" onClick={() => navigateHandler(content)} style={{ maxWidth: '100%' }} onMouseEnter={() => handleMouseEnter(content.id)} onMouseLeave={() => handleMouseLeave(content.id)} >
                        <CRow className="g-0">

                            <CCol md={4}>
                                <div className="image-container" onMouseEnter={() => handleMouseEnter(content.id)} onMouseLeave={handleMouseLeave}  >
                                    <CCardImage src={`https://d2p61yp1r2u65b.cloudfront.net/Images/${content.imageUrl}`} className='separation_line' />
                                    {target === content.id ? <div className={`black-overlay ${isHovered ? 'expanded' : ''}`}></div> : null}
                                </div>
                            </CCol>


                            <CCol md={8}>
                                <CCardBody>
                                    <CCardText className='card-container card_space' style={{ marginBottom: '2rem' }}>
                                        <div className='card-text-1'>{content.module_name}</div>
                                        <div className='card-text-2'>{content.main_description}</div>
                                    </CCardText>
                                </CCardBody>
                            </CCol>
                        </CRow>
                    </CCard>
                </CCol>
            ))
        )
    }


    const toggleGradesHandler = () => {
        setShowGrades(!showGrades);
    };

    const toggleSubjectsHandler = () => {
        setShowSubjects(!showSubjects);
    };

    return (
        <CContainer className='padding-top margin-container' style={{marginTop:'5rem'}} >
            <CommonSubHeaders />

            <CRow className='margin-top'>

                <CCol lg={3} md={12}>
                    <CCard className='pt-4 pb-4 border-radius'>
                        <CCardText>
                            <CCol >
                                <div className='hide_show_container'>
                                    <h2 className='left_card_heading'>Grades</h2>
                                    <div className='hide_show' onClick={toggleGradesHandler}>
                                        {showGrades ? <MdExpandMore className='icons toggle_icon_adjust' /> : <MdExpandLess className='icons toggle_icon_adjust' />}
                                    </div>

                                    <div className='underline' style={{ margin: 0, width: '100%' }}></div>
                                    <div className='double-underline' style={{ margin: 0 }}></div>
                                    <div>
                                        {showGrades && (<div className={`left-card-container content ${showGrades ? 'show' : ''}`}>
                                            {initialGradesOrFilterGrades.map((grade) => (
                                                <div className='checkbox-container' key={grade}>
                                                    <input type="checkbox" style={{ marginRight: '1rem' }} checked={gradeSelectedVal.includes(grade)} value={grade} onChange={(e) => checkGradeHandler(e)} /><span className='left_card_text'>Grade {grade}</span>
                                                </div>
                                            ))}
                                        </div>)}
                                    </div>
                                </div>

                                <div className='hide_show_container'>
                                    <h2 className='gap left_card_heading'>Subjects</h2>
                                    <div className='hide_show' onClick={toggleSubjectsHandler}>
                                        {showSubjects ? <MdExpandMore className='icons toggle_icon_adjust' /> : <MdExpandLess className='icons toggle_icon_adjust' />}
                                    </div>

                                    <div className='underline' style={{ margin: 0, width: '100%' }}></div>
                                    <div className='double-underline' style={{ margin: 0 }}></div>
                                    <div >
                                        {showSubjects && (<div className={`content left-card-container ${showSubjects ? 'show' : ''}`}>
                                            {initailSubjectOrFilterSubject.map((subjects) => (
                                                <div className='checkbox-container' key={subjects}>
                                                    <input type="checkbox" style={{ marginRight: '1rem' }} value={subjects} checked={subjectSelectedVal.includes(subjects)} onChange={(e) => checkSUbjectHandler(e)} /><span className='left_card_text'>{subjects}</span>
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
                            <h2 className='module_course_main_heading'>Modules</h2>
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
                        {changeView !== 12 ? status !== 404 && (dataInCol()) : status !== 404 && (dataInRow())}
                        {loading && <div className='loader'><LuLoader2 /></div>}
                    </CRow>

                    
                    
                </CCol>
            </CRow>

        </CContainer>
    )
}

export default K12
