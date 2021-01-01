import React from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { Button, Container, Toast, Row, Col, Breadcrumb } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast, Slide } from "react-toastify";
import { addAddress } from "../../redux/actions/address-actions/addAddressAction";

// form validation useing Yup
const validate = () =>
  Yup.object({
    firstName: Yup.string()
      .min(2, "Must be more then one character")
      .required("This field is required"),
    lastName: Yup.string()
      .min(2, "Must be more than 10 characters")
      .required("This field is required"),
    address1: Yup.string()
      .min(2, "Must be more than 10 characters")
      .required("This field is required"),
    address2: Yup.string().min(2, "Must be more than 10 characters"),
    area: Yup.string()
      .min(2, "Must be more than 10 characters")
      .required("This field is required"),
    phoneNumber: Yup.number()
      .positive("Must be more than 0")
      .integer("Must be more than 0")
      .required("This field is required")
  });

function AddAddressForm() {
  const dispatch = useDispatch();

  // handle submit our form
  const handleSubmitt = address => {
    dispatch(addAddress(address))
      .then(res => {
        toast.success(res, {
          position: toast.POSITION.BOTTOM_LEFT,
          transition: Slide
        });
      })
      .catch(err => {
        toast.error(err, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: false
        });
      });
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    area: "",
    phoneNumber: ""
  };

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href='/my_addresses'>My Addresses</Breadcrumb.Item>
        <Breadcrumb.Item active>Add address</Breadcrumb.Item>
      </Breadcrumb>

      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting }) => {
          const newAddress = {
            firstName: values.firstName,
            lastName: values.lastName,
            address1: values.address1,
            address2: values.address2,
            area: values.area,
            phoneNumber: values.phoneNumber
          };

          handleSubmitt(newAddress);

          setSubmitting(false);
        }}>
        <Form
          action='/api/product/create'
          method='post'
          encType='multipart/form-data'
          className='add-category-form mb-5'>
          <Row>
            <Col>
              <div className='form-group'>
                <label>First Name *</label>
                <Field
                  type='text'
                  name='firstName'
                  className='form-control'
                  placeholder='Enter first name'
                />
                <ErrorMessage component={Toast} name='firstName' />
              </div>
            </Col>
            <Col>
              <div className='form-group'>
                <label>Last Name *</label>
                <Field
                  type='text'
                  name='lastName'
                  className='form-control'
                  placeholder='Enter last name'
                />
                <ErrorMessage component={Toast} name='lastName' />
              </div>
            </Col>
          </Row>
          <div className='form-group'>
            <label>Address 1 *</label>
            <Field
              type='text'
              name='address1'
              className='form-control'
              placeholder='Enter address'
            />
            <ErrorMessage component={Toast} name='address1' />
          </div>
          <div className='form-group'>
            <label>Address 2</label>
            <Field
              type='text'
              name='address2'
              className='form-control'
              placeholder='Enter address'
            />
            <ErrorMessage component={Toast} name='address2' />
          </div>
          <Row>
           
            <Col>
              <div className='form-group'>
                <label>Area *</label>
                <Field as='select' name='area' className='form-control'>
                  <option value='' disabled selected>
                    Choose Area
                  </option>
                  <option value='Matale Town'>Matale Town</option>
                  <option value='Mandandawela'>Mandandawela</option>
                  <option value='Kaludewala'>Kaludewala</option>
                  <option value='Wiharagama'>Wiharagama</option>
                  <option value='kaikawela'>kaikawela</option>
                  <option value='Rattota'>Rattota</option>
                  <option value='Aluvihara'>Aluvihara</option>
                  <option value='Thotagamuwa'>Thotagamuwa</option>
                </Field>
                <ErrorMessage component={Toast} name='area' />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className='form-group'>
                <label>Phone Number *</label>
                <Field
                  type='text'
                  name='phoneNumber'
                  className='form-control'
                  placeholder='Enter Phone Number'
                />
                <ErrorMessage component={Toast} name='phoneNumber' />
              </div>
            </Col>
            
          </Row>
          <Button variant='primary' type='submit'>
            ADD{" "}
          </Button>{" "}
        </Form>
      </Formik>
    </Container>
  );
}

export default AddAddressForm;
