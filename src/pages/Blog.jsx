import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import Container from '../components/Container'
const Blog = () => {
  return (
        <>
            <Meta title={"Blogs"} />
            <BreadCrumb title = "Blogs" />
            <Container class1="blog-wrapper home-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Find By categories</h3>
                                <div className="">
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="d-flex flex-wrap w-100">
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog