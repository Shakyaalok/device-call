import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Modal} from 'react-bootstrap';
import { Formik } from 'formik';
import axios from '../services/api';
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
  CFormText,
  CFormGroup,
  CSelect,
} from '@coreui/react'

import { useDispatch } from 'react-redux';
import CIcon from '@coreui/icons-react'
import { toast } from 'react-toastify';


const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentVendor, setCurrentVendor] = useState(null); // State to hold the current vendor data for editing
  const [check, setChecked] = useState(false);
  const user_info = JSON.parse(localStorage.getItem('user_info'));
  const [pop, setPop] = useState(false);
  const [headings, setHeadings] = useState([{key: 'CheckBox', label: 'Select devices' },{ key: 'device_id', label: "Device Id" }, { key: "inspector_name", label: "Inspector Name" }, { key: "school_name", label: "School Name" }, { key: 'actions', label: "Actions" }])
  const [multiCheckBox, setMultiCheckBox] = useState([]);
  const dispatch = useDispatch();




const getList = async () => {
    const res = await axios.get('/devices', {
      // headers: {
      //   authorization: user_info.accessToken,
      //   token: user_info.refreshToken,
      // },
    });
    if (!res.data.error) {
      setData(res.data.data);
      toast.success(res.data.message)
    }else{
      toast.error(res.data.message)
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const togglePop = () => {
    setPop(!pop);
  };

  const handleEditClick = async (vendor) => {
    setCurrentVendor(vendor); 
    toggleModal();
  };

  const handleDeleteClick = async (id) => {
    const res = await axios.delete('/devices', {
      // headers: {
      //   authorization: user_info.accessToken,
      //   token: user_info.refreshToken,
      // },
      params: { id: id },
    });
    if (!res.data.error) {
      getList();
      toast.success(res.data.message)
    }else{
      toast.error(res.data.message)
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log('values tesing------------>', values);
    // return;
    try {
      let res;
      if (currentVendor) {
        res = await axios.put('/devices', values, {
          headers: {
            authorization: user_info.accessToken,
            token: user_info.refreshToken,
          },
          params: {
            id: currentVendor.id,
            force_update: check ? check : false
          },
        });

      } else {


        res = await axios.post('/devices', values, {
          headers: {
            authorization: user_info.accessToken,
            token: user_info.refreshToken,
          },
        });
      }

      if (!res.data.error) {
        getList();
        toggleModal();
        resetForm();
        setCurrentVendor(null);
        toast.success(res.data.message)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error('something went wrong !')
      console.log(error);
    }
    setSubmitting(false);
  };

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




  const checkBoxHandler = (e) => {
    setChecked(e.target.checked)
  }

  const launchDeviceHandler = async (id) => {

    const res = await axios.get('/devices/launch', {
      // headers: {
      //   authorization: user_info.accessToken,
      //   token: user_info.refreshToken,
      // },
      params: {
        id: id
      }
    });
    if (!res.data.error) {
      setPop(true)
      toast.success(res.data.message)
    }else{
      toast.error(res.data.message)
    }
  }



// multiSelectHandler
  const multiSelectHandler = (e) => {
    setMultiCheckBox((prevState) => {
      if (prevState.includes(e.target.value)) {
        return prevState.filter((value) => value !== e.target.value); 
      }
      return [...prevState, e.target.value];
    });

  }

  const multiDeviceLaunchHandler = () => {
    headings.push({ key: '', label: 'Ch' })
    dispatch({ type: 'set', data: multiCheckBox })
    navigate('/stream')
    launchDeviceHandler(2)
  }



  return (
    <CRow className="justify-content-center mt-5">
      <CCol md={12}>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol>
                <CButton
                  className="px-5"
                  color="info"
                  onClick={() => {
                    setCurrentVendor(null);
                    toggleModal();
                  }}>
                  + Add New
                </CButton>

                {multiCheckBox.length > 0 && (
                  <CButton
                    className="px-5 ml-5"
                    color="success"
                    onClick={multiDeviceLaunchHandler}

                  >
                    Launch Devices {" "+ multiCheckBox.length > 0 && multiCheckBox.length + ' Devices ' + 'selected' }
                  </CButton>
                )}

              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={data}
              fields={headings}
              itemsPerPageSelect
              itemsPerPage={5}
              pagination
              tableFilter
              scopedSlots={{
                actions: (item) => (
                  <td>
                    <CRow>
                      <CButton onClick={() => handleEditClick(item)} className={'btn-pill'} size={'sm'} > <CIcon className={'cust_action_edit'} name={'cilPencil'} /></CButton>
                      <CButton onClick={() => handleDeleteClick(item.id)} className={'btn-pill'} size={'sm'} ><CIcon className={'cust_action_delete'} name={'cilTrash'} /></CButton>
                      <CButton onClick={() => launchDeviceHandler(item.id)} className={'btn-pill'} size={'sm'} ><CIcon className={'cust_action_delete'} name={'cilBadge'} /></CButton>
                    </CRow>
                  </td>
                ),
                "CheckBox":(item)=>(
                  <td className='d-flex align-items-center justify-content-stretch'>
                      <CCol xs="auto">
                      <CInput
                      type="checkbox"
                      id="inlineCheckbox1"
                      value={item.id}
                      label={item.id}
                      onChange={multiSelectHandler}
                      style={{height:'24px', width:'24px',margin:'0'}}
                    />
                      </CCol>
                      <CCol xs="auto">
                      {item.device_id}
                      </CCol>
                  </td>
                )
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>


      {/* Add and edit Modal */}
      <CModal show={showModal} onHide={toggleModal} size="lg">
        <CModalHeader closeButton>
          <Modal.Title>{currentVendor ? 'Edit Vendor' : 'Add New Vendor'}</Modal.Title>
        </CModalHeader>
        <CModalBody>
          <Formik
            initialValues={{
              inspector_name: currentVendor ? currentVendor.inspector_name : '',
              school_name: currentVendor ? currentVendor.school_name : '',
              status: currentVendor ? currentVendor.status : '',
              isChecked: currentVendor ? currentVendor.isChecked : false, 
              device_id: currentVendor ? currentVendor.device_id : '', 
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
                <CFormGroup>
                  <CLabel>Inspector Name</CLabel>
                  <CInput
                    type="text"
                    name="device_id"
                    placeholder="Enter Device id"
                    value={values.device_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                  />
                  {touched.school_name && errors.school_name && (
                    <CFormText className="text-danger">{errors.school_name}</CFormText>
                  )}
                </CFormGroup>
                <CFormGroup controlId="status">
                  <CLabel>Status</CLabel>
                  <CSelect
                    as="select"
                    name="status"
                    value={values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>Select Vendor Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </CSelect>
                </CFormGroup>

                {/* Checkbox Field */}
                {currentVendor && (
                  <CFormGroup controlId="isChecked">
                    <CInput
                      type="checkbox"
                      name="isChecked"
                      label="Force update"
                      value={check}
                      onChange={(e) => checkBoxHandler(e)}
                      onBlur={handleBlur}
                    />
                  </CFormGroup>
                )}



                <CButton type="submit" color="info" disabled={isSubmitting}>
                  {currentVendor ? 'Update' : 'Submit'}
                </CButton>{' '}

                <CButton
                  color="secondary"
                  onClick={() => {
                    toggleModal();
                    setCurrentVendor(null);
                  }}
                >
                  Cancel
                </CButton>

              </form>
            )}
          </Formik>
        </CModalBody>
      </CModal>

      {/* launch Modal */}

      <CModal show={pop} onHide={togglePop} size="lg" dialogClassName="fullscreen-modal">
        <CModalHeader closeButton>Launch Device</CModalHeader>
        <CModalBody style={{ padding: 0, height: 'calc(65vh)' }}>
          <iframe
            src="http://localhost:5000/"
            width="100%"
            height="100%" 
            title="Launch Device"
            style={{ border: 'none' }} 
          />
        </CModalBody>
        <CButton color="secondary" onClick={togglePop}>
          Close
        </CButton>
      </CModal>


    </CRow>


  );
};

export default Home;
