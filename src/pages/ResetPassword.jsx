import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import CustomerInput from '../components/CustomerInput'

const ResetPassword = () => {
  return (
    <div>
        <Meta title={"Reset Password"} />
        <BreadCrumb title="Reset Password" />
        <div className="Reset Password-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className='auth-card'>
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className='d-flex flex-column gap-15'>
                 
                <div className="mt-1">
                  <CustomerInput type="password" placeholder='Password' name='passoword' classname="form-control" />
                </div>

                <div className="mt-1">
                  <CustomerInput type="password" placeholder='Confirm Password' name='passoword' classname="form-control" />
                </div>
                <div className="mt-1">
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className='button' type='submit'>
                      Ok
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword