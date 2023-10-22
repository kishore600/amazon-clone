import React from "react";
import Meta from "../components/Meta";
import { Breadcrumb } from "react-bootstrap";
import {AiOutlineHome,BiInfoCircle} from 'react-icons/ai'
import Container from "../components/Container";

const Contact = () => {
  return (
    <div>
      <Meta title={"Contact Us"} />
      <Breadcrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.804755302562!2d80.15470637740826!3d13.048096454461973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526116b5a5034b%3A0x21d440bf2577be2d!2sRajiv%20School%20Of%20Excellence!5e0!3m2!1sen!2sin!4v1697009748518!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-15">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex gap-15 flex-column">
                    <div className="">
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        id=""
                        placeholder="Name"
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        id=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        placeholder="Mobile Number"
                        id=""
                      />
                    </div>
                    <div className="">
                      <textarea name="" id="" placeholder="Comments" cols="30" rows="10" className="w-100 form-control"></textarea>
                    </div>
                  </form>
                <div className="mt-3">
                  <button className="button border-0">Submit</button>
                </div>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          No:7/B 2nd cros street jayalskshmi nagar Alapakkem , Chennai - 600116
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <a href="tel:+9566019398" className="text-black">+91 9566019398</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                        <a href="mailto:kishore.knaresh07@gmail.com" className="text-black">kishore.knaresh07@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome />
                        <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
