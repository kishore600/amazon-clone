import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
        <div className="col-3">
            <div className="blog-card">
                <div className="card-img">
                    <img src="images/images/blog-1.jpg" className='img-fluid w-100' alt="" />
                </div>
                <div className="blog-content">
                    <p className="date">1 Dec. 2022</p>
                    <h5 className="title">
                        A buitiful sunday moring residence
                    </h5>
                    <p className="desc">
                         in vel, placeat at tempora labore, unde voluptas, soluta magnam. Explicabo quisquam minus voluptates praesentium laboriosam!
                    </p>
                    <Link to="/blog/:id" className="button">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard