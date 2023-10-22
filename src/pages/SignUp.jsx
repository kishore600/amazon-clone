import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomerInput from '../components/CustomerInput'
const SignUp = () => {
  return (
    <div>
       <Meta title={"Signup"} />
        <BreadCrumb title="Signup" />
        <Container class1="Signup-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className='auth-card'>
              <h3 className="text-center mb-3">Signup</h3>
              <form action="" className='d-flex flex-column gap-15'>
                  <div className="">
                    <CustomerInput type="text" name='frst-name' placeholder='First Name' classname="form-control"  />
                  </div>
                  <div className="">
                    <CustomerInput type="text" name='lst-name' placeholder='Last Name' classname="form-control"  />
                  </div> 
                <div className="">
                  <CustomerInput type="email" name='email' placeholder='email' classname="form-control" />
                </div>
                <div className="">
                  <CustomerInput type="number" name='Mobile Number' placeholder='Mobile Number' classname="form-control" />
                </div>
                <div className="mt-1">
                  <CustomerInput type="password" placeholder='Password' name='passoword' classname="form-control" />
                </div>
                <div className="mt-1">
                    <div className='d-flex gap-15'>
                      <p>if you have an account </p>
                      <Link to="/login" >Login</Link>
                    </div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className='button'>
                      Signup
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

export default SignUp