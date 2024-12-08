import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Row, Modal, Form, FormControl, Table } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from '../services/api';
import './Css/home.css';

const Home = () => {
  const history = useNavigate();
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [mess, setMess] = useState('');
  const [currentVendor, setCurrentVendor] = useState(null); // State to hold the current vendor data for editing
  const [check,setChecked] = useState(false);

  const user_info = JSON.parse(localStorage.getItem('user_info'));

  const getList = async () => {
    const res = await axios.get('/devices', {
      // headers: {
      //   authorization: user_info.accessToken,
      //   token: user_info.refreshToken,
      // },
    });
    if (!res.data.error) {
      setData(res.data.data);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEditClick = async (vendor) => {
    setCurrentVendor(vendor); // Set the current vendor to the selected one for editing
    setMess('');
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
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log('values tesing------------>',values);
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
            force_update:check? check: false
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
      } else {
        setMess(res.data.message);
      }
    } catch (error) {
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


  

  const checkBoxHandler = (e) =>{
    setChecked(e.target.checked)
  }

  const launchDeviceHandler = async(id)=>{
    const res = await axios.get('/devices/launch', {
      // headers: {
      //   authorization: user_info.accessToken,
      //   token: user_info.refreshToken,
      // },
      params:{
        id:id
      }
    });
    if (!res.data.error) {
      alert(res.data.message)
    }
    alert(res.data.message)
  }

  return (
    <Row className="justify-content-center">
      <Col md="12">
        <Card>
          <Card.Header>
            <Row>
              <Col>
                <Button
                  variant="info"
                  className="mt-5"
                  onClick={() => {
                    setCurrentVendor(null);
                    toggleModal();
                  }}
                >
                  + Add New
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Device Id</th>
                  <th>Inspector Name</th>
                  <th>School Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.device_id}</td>
                    <td>{item.inspector_name}</td>
                    <td>{item.school_name}</td>
                    <td>{item.status}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </Button>{' '}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(item.id)}
                      >
                        Delete
                      </Button>{' '}
                      <Button variant="success" size="sm" onClick={()=>launchDeviceHandler(item.id)}>
                        Launch
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={showModal} onHide={toggleModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{currentVendor ? 'Edit Vendor' : 'Add New Vendor'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              inspector_name: currentVendor ? currentVendor.inspector_name : '',
              school_name: currentVendor ? currentVendor.school_name : '',
              status: currentVendor ? currentVendor.status : '',
              isChecked: currentVendor ? currentVendor.isChecked : false, // Default to false
              device_id: currentVendor ? currentVendor.device_id : '', // Default to false
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
              <Form onSubmit={handleSubmit}>
                 <Form.Group controlId="device_id">
                  <Form.Label>Inspector Name</Form.Label>
                  <FormControl
                    type="text"
                    name="device_id"
                    placeholder="Enter Device id"
                    value={values.device_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.device_id && errors.device_id && (
                    <Form.Text className="text-danger">{errors.device_id}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group controlId="inspector_name">
                  <Form.Label>Inspector Name</Form.Label>
                  <FormControl
                    type="text"
                    name="inspector_name"
                    placeholder="Enter Inspector Name"
                    value={values.inspector_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.inspector_name && errors.inspector_name && (
                    <Form.Text className="text-danger">{errors.inspector_name}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group controlId="school_name">
                  <Form.Label>School Name</Form.Label>
                  <FormControl
                    type="text"
                    name="school_name"
                    placeholder="Enter School Name"
                    value={values.school_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.school_name && errors.school_name && (
                    <Form.Text className="text-danger">{errors.school_name}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group controlId="status">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    name="status"
                    value={values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>Select Vendor Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </Form.Control>
                  {/* {touched.status && errors.status && (
                    <Form.Text className="text-danger">{errors.status}</Form.Text>
                  )} */}
                </Form.Group>
                
                {/* Checkbox Field */}
                {currentVendor && (
                   <Form.Group controlId="isChecked">
                   <Form.Check
                     type="checkbox"
                     name="isChecked"
                     label="Force update"
                     value={check}
                    //  checked={values.isChecked}
                     onChange={(e)=>checkBoxHandler(e)}
                     onBlur={handleBlur}
                   />
                 </Form.Group>
                 

                )}
          
          
            <Row>
            <Col>
            <Button type="submit" variant="info" disabled={isSubmitting}>
                  {currentVendor ? 'Update' : 'Submit'}
                </Button>{' '}
            </Col>

            <Col>
            <Button
                  variant="secondary"
                  onClick={() => {
                    toggleModal();
                    setMess('');
                    setCurrentVendor(null);
                  }}
                >
                  Cancel
                </Button>
            </Col>

            </Row>
                
              
               
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </Row>
  );
};

export default Home;
