import {
    CCard,
    CCardHeader,
    CCardBody,
    CButton,
    CRow,
    CCol,
    CDataTable,
    CModal,
    CModalBody,
    CModalHeader,
    CInput,
    CLabel,
    CFormGroup,
    CSelect,
    // CDatePicker, 
} from '@coreui/react'
import axios from '../services/api'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Formik } from 'formik';
import { toast } from 'react-toastify';

const DashBoard = () => {
    const [filteredData, setFilteredData] = useState([]);
    const fields = ['device_id', 'inspector_name', 'school_name', 'department_name', 'complain', 'created_by_name', 'createdAt']
    const [visible, setVisible] = useState(false);
    const [multiCheckBox, setMultiCheckBox] = useState([]);
    const [filterApplied, setFilterApplied] = useState(false)

    const getInspectionDetails = async () => {
        const res = await axios.get('/inspection');
        if (!res.data.error) {
            setFilteredData(res.data.data);
            toast.success(res.data.message)
        }else{
            toast.error(res.data.message)
        }
    }

    useEffect(() => {
        getInspectionDetails()
    }, [])

    const dateConversion = (date) => {
        return dayjs(date).format('DD MMMM YYYY HH:mm:ss');
    }

    const toggleHandler = () => {
        setVisible(!visible);
    }

    const handleSubmit = async (values) => {
        let data = { ...values, department: multiCheckBox }
        const res = await axios.post('/filter', data);
        if (!res.data.error && res.data.data.length > 0) {
            setVisible(false);
            setFilterApplied(true);
            setFilteredData(res.data.data)
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
            setFilterApplied(false)
        }
    }


    let departments = [
        "Electrical",
        "Mechanical",
        "Civil Engineering",
        "Software Engineering",
        "Environmental Engineering",
        "Aerospace Engineering",
        "Chemical Engineering",
        "Biomedical Engineering",
        "Structural Engineering",
        "Automotive Engineering",
        "Telecommunications",
        "Information Technology (IT)",
        "Robotics",
        "Systems Engineering",
        "Renewable Energy",
        "Nuclear Engineering",
        "Industrial Engineering",
        "Construction Management",
        "Agricultural Engineering",
        "Marine Engineering",
        "Architectural Design",
        "Artificial Intelligence (AI)",
        "Data Science",
        "Nanotechnology",
        "IoT (Internet of Things)",
        "Biotechnology",
        "Geotechnical Engineering",
        "Mechatronics",
        "Materials Science",
        "Photonics",
        "Energy Systems",
        "Embedded Systems",
        "Supply Chain Management",
        "Automation",
        "Logistics",
        "Cybersecurity",
        "FinTech",
        "Virtual Reality (VR) / Augmented Reality (AR)",
        "Cloud Computing",
        "Blockchain Technology"
    ]

    const multiSelectHandler = (e) => {
        const value = e.target.value
        setMultiCheckBox((prevState) => {
            if (prevState.includes(e.target.value)) {
                return prevState.filter((value) => value !== e.target.value); // Remove the value if it's already present
            }

            return [...prevState, value];
        })

    }

    const filterAppliedHandler = () => {
        setFilterApplied(false);
        getInspectionDetails()
    }

    return (
        <CRow className="justify-content-center mt-5">
            <CCol md={12}>
                <CCard>
                    <CCardHeader>
                        <CButton
                            className="px-5"
                            color="success"
                            onClick={toggleHandler}
                        >
                            Filter
                        </CButton>

                        {filterApplied && (
                            <CButton
                                className="px-5 ml-2 text-white"
                                color="warning"
                                onClick={filterAppliedHandler}
                            >
                                Cancel Filter
                            </CButton>
                        )}
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={filteredData}
                            fields={fields}
                            itemsPerPageSelect
                            itemsPerPage={5}
                            pagination
                            tableFilter
                            scopedSlots={{
                                'createdAt': (item) => (
                                    <td>
                                        {dateConversion(item.createdAt)}
                                    </td>
                                )
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>

            {/* Modal for Filters */}
            <CModal show={visible} onHide={toggleHandler} size="lg" dialogClassName="fullscreen-modal">
                <CModalHeader closeButton>Filters</CModalHeader>
                <CModalBody >
                    <Formik
                        initialValues={{
                            inspector_name: filteredData ? filteredData.inspector_name : '',
                            school_name: filteredData ? filteredData.school_name : '',
                            startDate: filteredData ? filteredData.startDate : '',
                            endDate: filteredData ? filteredData.endDate : '', // Default to false
                        }}
                        //   validate={validate}
                        onSubmit={handleSubmit}
                    //   enableReinitialize={true}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form>
                                <div style={{ padding: "1rem" }}>

                                    <CRow className="mb-3">
                                        <CCol md={6} xs={12}>
                                            <CFormGroup>

                                                <CLabel htmlFor="checkboxes" className='text-center'>Select Departments</CLabel>
                                                <div style={{
                                                    // marginLeft: '10%', 
                                                    maxHeight: '300px',
                                                    overflowY: 'auto',
                                                    overflowX: 'hidden'
                                                }}>
                                                    {departments.map((department) => (
                                                        <CRow className='px-5 mb-2'>
                                                            <div xs={3}>
                                                                <CInput
                                                                    type="checkbox"
                                                                    name="department"
                                                                    value={department}
                                                                    label={department}
                                                                    onChange={multiSelectHandler}
                                                                    onBlur={handleBlur}
                                                                    // checked={multiCheckBox.includes(item.id)}
                                                                    style={{ height: '24px', width: '24px', margin: '0' }}
                                                                />
                                                            </div>
                                                            <div xs={3} className='ml-2'>
                                                                {department}
                                                            </div>
                                                        </CRow>
                                                    ))}
                                                </div>
                                            </CFormGroup>
                                        </CCol>

                                        {/* Form inputs on the right */}
                                        <CCol md={6} xs={12}>
                                            <CRow>
                                                <CCol xs={12}>
                                                    <CFormGroup>
                                                        <CLabel htmlFor="inspector">Inspector Name</CLabel>
                                                        <CSelect
                                                            name="inspector_name"
                                                            value={values.inspector_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Search by inspector name"
                                                        >
                                                            {filteredData.map((data) => (
                                                                <option value={data.inspector_name}>{data.inspector_name}</option>
                                                            ))}
                                                        </CSelect>
                                                    </CFormGroup>
                                                </CCol>

                                                <CCol xs={12}>
                                                    <CFormGroup>
                                                        <CLabel htmlFor="school">School</CLabel>
                                                        <CSelect
                                                            name="school_name"
                                                            value={values.school_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Search by school"
                                                        >
                                                            {filteredData.map((data) => (
                                                                <option value={data.school_name}>{data.school_name}</option>
                                                            ))}
                                                        </CSelect>
                                                    </CFormGroup>
                                                </CCol>
                                                {/* </CRow> */}

                                                {/* <CRow> */}
                                                <CCol xs={12}>
                                                    <CFormGroup>
                                                        <CLabel htmlFor="startDate">Start Date</CLabel>
                                                        <CInput
                                                            name="startDate"
                                                            type="date"
                                                            value={values.startDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Select start date"
                                                        />
                                                    </CFormGroup>
                                                </CCol>

                                                <CCol xs={12}>
                                                    <CFormGroup>
                                                        <CLabel htmlFor="endDate">End Date</CLabel>
                                                        <CInput
                                                            name="endDate"
                                                            type="date"
                                                            value={values.endDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Select end date"
                                                        />
                                                    </CFormGroup>
                                                </CCol>
                                            </CRow>
                                        </CCol>
                                    </CRow>

                                </div>

                                <CButton color="secondary" onClick={toggleHandler}>
                                    Close
                                </CButton>
                                <CButton color="primary" onClick={handleSubmit} className='ml-2'>
                                    Apply Filters
                                </CButton>
                            </form>
                        )}

                    </Formik>
                </CModalBody>
            </CModal>
        </CRow>
    )
}

export default DashBoard;
