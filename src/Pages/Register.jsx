import { ErrorMessage, Field, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ErrorText from '../Components/ErrorText'

const Register = () => {
    const initialValues={
        name:'',
        email:'',
        phone:'',
        role: 'User',
        password:'',
        password_confirmation:''
    }
    const phoneRegex= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/
    const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const validationSchema= Yup.object({
        name: Yup.string().required().min(5).max(50).label('Full Name'),
        email: Yup.string().required().email().label('email'),
        phone: Yup.string().required().matches(phoneRegex, 'Pls enter a valid phone number').label('Phone Number'),
        password: Yup.string().required('Required').matches(passwordRegex, 'Pls enter a strong password'),
        password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
    })

    const onSubmit=(values)=>{

    }
  return (
    <div className='d-flex justify-content-center align-items-center'>
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
    <Form>
      <div className="d-flex gap-3 flex-column">
        <div className='d-flex gap-1 flex-column'>
            <label htmlFor="name">Full Name:</label>
            <Field name='name' onChange={handleChange} />
            <ErrorMessage name='name' component={<ErrorText/>}/>
        </div>
        <div lassName='d-flex gap-1 flex-column'>
            <label htmlFor="email">Email:</label>
            <Field name='email' onChange={handleChange} />
            <ErrorMessage name='email' component={<ErrorText/>}/>

        </div>
        <div lassName='d-flex gap-1 flex-column'>
            <label htmlFor="phone">Phone Number:</label>
            <Field name='phone' onChange={handleChange} />
            <ErrorMessage name='phone' component={<ErrorText/>}/>
        </div>
        <div lassName='d-flex gap-1 flex-column'>
            <label htmlFor="password">Password:</label>
            <Field name='password' onChange={handleChange} />
            <ErrorMessage name='password' component={<ErrorText/>}/>
        </div>
        <div lassName='d-flex gap-1 flex-column'>
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <Field name='password_confirmation' onChange={handleChange} />
            <ErrorMessage name='password_confirmation' component={<ErrorText/>}/>
        </div>
      </div>
      </Form>
      </Formik>
    </div>
  )
}

export default Register
