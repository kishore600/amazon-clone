import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomerInput from '../components/CustomerInput'

const ForgotPassword = () => {
  return (
    <div>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <Container class1='auth-card'>
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center my-2">
                We Will send your an email to reset your password
              </p>
              <form action="" className='d-flex flex-column gap-15'>
                <div className="">
              <CustomerInput type="email" name='email' placeholder='email' classname="form-control" />
                </div>
                <div className="mt-1">
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className='button'>
                      Submit
                    </button>
                  </div>
                  <div className='d-flex mt-3 justify-content-center'>
                    <Link to="/login" className='text-dark'>Cancel</Link>
                  </div>
                </div>
              </form>
            </Container>
    </div>
  )
}

export default ForgotPassword