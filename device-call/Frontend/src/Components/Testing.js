import {
  CCard,
  CCardBody,
  CCardText,
  CButton,
  CRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCol,
  CInput,
  CLabel,
  CFormText,
  CFormGroup,
  CSelect,

} from '@coreui/react'

import { useState } from 'react'
import { Formik } from 'formik';
import axios from '../services/api';
import { toast } from 'react-toastify';

const Testing = ({ RemoteUser, user,id }) => {
  const [fullscreen, setFullScreen] = useState(null)
  const [modalVisible, setModalVisible] = useState(true); // State to control modal visibility
  const [additionalNotes, setAdditionalNotes] = useState(null)
  const [additionalNotesModal, setAdditionalNotesModal] = useState(false)
  const [inspection, setInspection] = useState(null);
  const [schoolAndInspectorName, setSchoolAndInspectorName] = useState(null)
  const [data, setData] = useState([])


  const fullScreenVideoHandler = (id) => {
    setFullScreen(id)
    setModalVisible(true)
  }

  const addNotesHandler = async (id) => {
    const res = await axios.get('/school-name', {
      params: {
        id: id
      }
    })
    if (!res.data.error) {
      setSchoolAndInspectorName(res.data.data)
    }
    setAdditionalNotes(id);
    setAdditionalNotesModal(true)
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleAdditionalNotesModal = () => {
    setAdditionalNotesModal(!additionalNotesModal);
  };

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

  const validate = (values) => {
    const errors = {};
    if (!values.inspector_name) {
      errors.inspector_name = 'Required';
    }
    // if (!values.status) {
    //   errors.status = 'Required';
    // }
    if (!values.school_name) {
      errors.school_name = 'Required';
    }
    if (!values.device_id) {
      errors.device_id = 'Required';
    }
    return errors;
  };

  const handleSubmit = async (values) => {
    const res = await axios.post('/inspection', values);
    if (!res.data.error) {
      setData(res.data.data)
      toast.success(res.data.message)
      toggleAdditionalNotesModal(false)
    } else {
      toast.error(res.data.message)
    }
  }


  return (
    <>
      <CCard className="mb-3 card-container">
         <RemoteUser key={user.uid} user={user} style={{height:'100vh',width:'100vw', background:'none'}}  />
        {/* <iframe
          src={src}
          width="100%"
          height="300px" // Adjust height as per your design
          title="Embedded Content"
          style={{ border: 'none', borderRadius: '5px' }} // Optional: Styling
        ></iframe> */}
        <CCardBody>
          {/* <CCardTitle>Card title</CCardTitle>
    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText> */}
          <CCardText><small className="text-body-secondary">Last updated 3 mins ago</small></CCardText>
        </CCardBody>
        <div className="button-container">
          <CButton color="primary" className="btn-fullscreen" onClick={() => fullScreenVideoHandler(id)}>Separte view</CButton>
          <CButton color="secondary" className="btn-notes" onClick={() => addNotesHandler(id)}>Add Notes</CButton>
        </div>
      </CCard>


      {fullscreen && (
        <CModal
          show={modalVisible}
          onClose={toggleModal}
          size="lg"
          centered
          style={{
            maxWidth: '100%',
            height: '100vh',
            top: 0,
            margin: 0,
          }}
        >
          <CModalHeader closeButton>
            <CModalTitle>Fullscreen Modal</CModalTitle>
          </CModalHeader>
          <CModalBody>
            {/* Content inside the modal */}
            <p>This is a full-screen modal. You can add more content here.</p>
            <CRow>
              <CCol>
                <h5>Additional Content</h5>
                <p>This is a larger space for any content you want to show in full screen.</p>
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={toggleModal}>
              Close
            </CButton>
          </CModalFooter>
        </CModal>)}


      {additionalNotes && (
        <CModal
          show={additionalNotesModal}
          onClose={toggleAdditionalNotesModal}
          size="lg"
          centered
          style={{
            maxWidth: '100%',
            height: '90vh',
            top: 0,
            margin: 0,
          }}
        >
          <CModalHeader closeButton>
            <CModalTitle> Add Inspection Details</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Formik
              initialValues={{
                inspector_name: schoolAndInspectorName.inspector_name,
                school_name: schoolAndInspectorName.school_name,
                device_id: schoolAndInspectorName.device_id, // Default to false
                department_name: inspection ? inspection.department_name : '', // Default to false
                complain: inspection ? inspection.complain : '', // Default to false
              }}
              validate={validate}
              onSubmit={handleSubmit}
              enableReinitialize={true}
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
                <form onSubmit={handleSubmit}>
                  <CFormGroup controlId="device_id">
                    <CLabel>Device</CLabel>
                    <CInput
                      name="device_id"
                      value={values.device_id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={schoolAndInspectorName.device_id !== ''}
                    />
                    {touched.device_id && errors.device_id && (
                      <CFormText className="text-danger">{errors.device_id}</CFormText>
                    )}
                  </CFormGroup>
                  <CFormGroup controlId="inspector_name">
                    <CLabel>Inspector Name</CLabel>
                    <CInput
                      type="text"
                      name="inspector_name"
                      placeholder="Enter Inspector Name"
                      value={values.inspector_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={schoolAndInspectorName.inspector_name !== ''}
                    />
                    {touched.inspector_name && errors.inspector_name && (
                      <CFormText className="text-danger">{errors.inspector_name}</CFormText>
                    )}
                  </CFormGroup>
                  <CFormGroup controlId="school_name">
                    <CLabel>School Name</CLabel>
                    <CInput
                      type="text"
                      name="school_name"
                      placeholder="Enter School Name"
                      value={values.school_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={schoolAndInspectorName.school_name !== ''}
                    />
                    {touched.school_name && errors.school_name && (
                      <CFormText className="text-danger">{errors.school_name}</CFormText>
                    )}
                  </CFormGroup>

                  <CFormGroup controlId="department">
                    <CLabel>Department</CLabel>
                    <CSelect
                      name="department_name"
                      value={values.department_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled>Select Department</option>
                      {departments.map((department) => (
                        <option value={department}>{department}</option>
                      ))}
                    </CSelect>
                    {/* {touched.status && errors.status && (
                    <Form.Text className="text-danger">{errors.status}</Form.Text>
                  )} */}
                  </CFormGroup>
                  <CFormGroup controlId="department">
                    <CLabel>Detail in Brief</CLabel>
                    <CInput
                      name="complain"
                      value={values.complain}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </CFormGroup>

                  <CButton color="success" type="submit">
                    Submit
                  </CButton>
                </form>
              )}

            </Formik>
          </CModalBody>
          {/* <CModalFooter> */}
          {/* </CModalFooter> */}
        </CModal>
      )}

    </>
  )
}

export default Testing;