import React from 'react'
import {Link} from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src='/images/images/newsletter.png' alt="newsletter" />
                <h2 className="mb-0 text-white">Sign up for NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                  <input
                    type="text"
                    className="form-control py-1"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                    aria-aria-describedby="Your Email Address"
                  />
                  <span className="input-group-text p-2" id="basic-addon2">
                    Subscribe
                  </span>
                </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white'>Contact-us</h4>
              <div>
                <address className='text-white fs-6'>
                  7/b 2nd cross street <br /> jayalakshmi nagar <br /> Alapakkam , Chennai <br />
                  PinCode : 600116
                </address>
                <a href='tel:+91 9566019398' className='mt-4 d-block mb-3 text-white'>
                  +91 9566019398
                </a>
                <a href='mailto:kishore.knaresh07@gmail.com' className='mt-4 d-block mb-3 text-white'>
                  kishore.knaresh07@gmail.com
                </a>
                <div className="social_icons d-flex algin-items-center gap-30">
                  <a href="" className="">
                    <BsLinkedin className='text-white fs-4' />
                  </a>
                  <a href="" className="">
                    <BsGithub className='text-white fs-4' />
                  </a>
                  <a href="" className="">
                    <BsInstagram className='text-white fs-4' />
                  </a>
                  <a href="" className="">
                    <BsYoutube className='text-white fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="terms-condition" className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to="shipping-details" className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to="refund" className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to="blog" className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="about" className='text-white py-2 mb-1'>About</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link to="contact" className='text-white py-2 mb-1'>Contact</Link>
                <Link to="store" className='text-white py-2 mb-1'>Our Store</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>HeadPhones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>

          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy: {new Date().getFullYear()}; Powered by yo
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer