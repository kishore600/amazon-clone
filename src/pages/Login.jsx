import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomerInput from '../components/CustomerInput'

const Login = () => {
  return (
    <div>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className='auth-card'>
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <div className="">
                  <CustomerInput type="email" name='email' placeholder='email' classname="form-control" />
                </div>
                <div className="mt-1">
                  <CustomerInput type="password" placeholder='Password' name='passoword' classname="form-control" />
                </div>
                <div className="mt-1">
                  <Link to="/forgot-password" className='text-dark mb-3'>Forgot Password ?</Link>
                    <div className='d-flex gap-15'>
                      <p>don't have an account </p>
                      <Link to="/signup" >Signup</Link>
                    </div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className='button'>
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Login