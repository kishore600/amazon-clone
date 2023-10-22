import React from 'react'
import { Link } from 'react-router-dom'
import Marque from "react-fast-marquee"
import BlogCard from "../components/BlogCard.jsx"
import ProductCard from '../components/ProductCard.jsx'
import SpecialProduct from '../components/SpecialProduct.jsx'
import Container from '../components/Container.jsx'
import services from '../utils/data.js'

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img src="images/images/main-banner-1.jpg" alt="main-banner" className='img-fluid rounded-3' />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>From $999.00 or $41.62/month.</p>
                  <Link className='button'>BY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap jusify-content-between aligin-items-center gap-10">
                <div className="small-banner position-relative">
                  <img src="images/images/catbanner-01.jpg" alt="main-banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/images/catbanner-02.jpg" alt="main-banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad</h5>
                    <p>From $999.00 <br /> or $41.62/.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/images/catbanner-03.jpg" alt="main-banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/images/catbanner-04.jpg" alt="main-banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      
      </Container>
      <Container class1="home-wrapper-2 p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                {
                  services?.map((i,j)=>{
                    return(
                      <div className='d-flex align-items-center gap-15' key={j}>
                        <img src={i.image} alt="" />
                        <div>
                          <h6>{i.title}</h6>
                          <p className='mb-0'>{i.tagline}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex gap-30 align-items-center">
                  <div className="">
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/images/camera.jpg' alt='camera' />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="">
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/images/camera.jpg' alt='camera' />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="">
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/images/tv.jpg' alt='camera' />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="">
                    <h6>HeadSet</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/images/headphone.jpg' alt='camera' />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="">
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/images/camera.jpg' alt='camera' />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="">
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/images/camera.jpg' alt='camera' />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="">
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/images/tv.jpg' alt='camera' />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div className="">
                    <h6>HeadSet</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/images/headphone.jpg' alt='camera' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marque className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/images/brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/images/brand-08.png' alt='brand' />
                  </div>
                </Marque>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>
                Our Popular Product
              </h3>
            </div>
            <div className="row col-12">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 d-flex gap-15">
              <div className="famous-card position-relative">
                <img  src="images/images/catbanner-01.jpg"  alt="" />
                <div className="famous-content position-absolute" >
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 $16.62/mo. for 24 mo.</p>
                </div>
              </div>
              <div className="famous-card position-relative">
                <img src="images/images/catbanner-01.jpg"  alt="" />
                <div className="famous-content position-absolute" >
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 $16.62/mo. for 24 mo.</p>
                </div>
              </div>
              <div className="famous-card position-relative">
                <img src="images/images/catbanner-01.jpg"  alt="" />
                <div className="famous-content position-absolute" >
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 $16.62/mo. for 24 mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="ro">
            <div className="col-12">
              <h3 className="section-heading">Special Product</h3>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>
                Featured Collection
              </h3>
            </div>
            {/* <div className="gap-10"> */}
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            {/* </div> */}
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
              <div className="col-12">
                <h3 className='section-heading'>
                  Our Latest Blogs
                </h3>
              </div>
            </div>
            <div className="d-flex flex-wrap">
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
      </Container>
    </>
  )
}

export default Home