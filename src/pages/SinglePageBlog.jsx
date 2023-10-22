import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import {HiOutlineArrowLeft} from 'react-icons/hi'
import Container from "../components/Container";

const SinglePageBlog = () => {
  return (
    <div>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                    <HiOutlineArrowLeft className="fs-4" />Go back to Blogs
                </Link>
                <h3 className="title">A Butiful Sunday Morning Renaissance</h3>
                <img src="/images/images/blog-1.jpg" alt="blog" className="img-fluid w-100 my-4" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                  quae dolore iusto facere, aut odit suscipit quo aspernatur et
                  maiores? Necessitatibus officia possimus accusantium repellat
                  deleniti voluptatum porro vero quis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SinglePageBlog;
