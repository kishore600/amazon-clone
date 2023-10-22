import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component"
import ProductCard from '../components/ProductCard'
import Container from '../components/Container'

const OurStore = () => {
  const [grid,setGrid] = useState(4)
  return (
    <div>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Shop By Categories
                  <div className="">
                    <ul className='ps-0'>
                      <li>Watch</li>
                      <li>Tv</li>
                      <li>Camera</li>
                      <li>Laptop</li>
                    </ul>
                  </div>
                </h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Filter By
                  
                </h3>
                <div className="">
                  <h5 className="sub-title">
                    Availablity
                  </h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className="form-check-label" for="">In Stock {1}</label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label" for="">Out of Stock {0}</label>
                      <input type="checkbox" className="form-check-input" />
                    </div>
                  </div>
                  <h className="sub-title">Price</h>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-floating mb-3'>
                      <input type="text" className="form-control" placeholder='From' />
                      <label htmlfor="floatingInput">From</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input type="text" className="form-control" placeholder='To' />
                      <label htmlfor="floatingInput">To</label>
                    </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                    <div className="d-flex flex-wrap">
                       
                  </div>
                        <h5 className='sub-title'>Size</h5>
                        <div>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id='color-1' />
                            <label className="form-check-label" id='color-2' for="">S (2)</label>
                          </div>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id='color-2' />
                            <label className="form-check-label" for="" id='color-2'>M (2)</label>
                          </div>
                        </div>
                  </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Product Tags
                </h3>
                <div className="">
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">HeadPhone</span>
                  </div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                  </div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                  </div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                          </h3>
                  <div className="">
                    <div className="randon-products mb-3 d-flex">
                      <div className="w-50">
                        <img src="images/images/watch.jpg" className='img-fluid' alt="watch" />
                      </div>
                      <div className="w-50">
                        <h5>
                          Kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor='#ffd700'
                        />
                        <b>$ 300</b>
                      </div>
                    </div>
                    <div className="randon-products d-flex">
                      <div className="w-50">
                        <img src="images/images/watch.jpg" className='img-fluid' alt="watch" />
                      </div>
                      <div className="w-50">
                        <h5>
                          Kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor='#ffd700'
                        />
                        <b>$ 300</b>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center gap-10">
                  <p className='mb-0 d-block' style={{width:"100px"}}>Sort By:</p>
                  <select className="form-control form-select" id=''>
                    <option className="val" value="manual">Featured</option>
                    <option className="val" value="best-selling" selected="selected">Best Selling</option>
                    <option className="val" value="title-ascending">Alphabetically, A-Z</option>
                    <option className="val" value="title-descending">Alphabetically, Z-A</option>
                    <option className="val" value="price-descending">pirce, Low to High</option>
                    <option className="val" value="price-ascending">pirce, High to Low</option>
                    <option className="val" value="created-ascending">Date, Old to New</option>
                    <option className="val" value="created-descending">Date, New to Old</option>
                  </select>
                  </div>
                  <div className="d-flex  align-items-center gap-10">
                    <p className="total-products mb-1">21 Products</p>
                    <div className="d-flex gap-10 align-items-center">
                      <img src="images/images/gr.svg" onClick={()=>{setGrid(3)}} className='grid d-block img-fluid' alt="grid" />                      
                      <img src="images/images/gr2.svg" onClick={()=>{setGrid(4)}} className='grid d-block img-fluid' alt="grid" />                      
                      <img src="images/images/gr3.svg" onClick={()=>{setGrid(6)}} className='grid d-block img-fluid' alt="grid" />                      
                      <img src="images/images/gr4.svg" onClick={()=>{setGrid(12)}} className='grid d-block img-fluid' alt="grid" />                      
                    </div>
                  </div>
                </div>
                </div>
                <div className="products-list pd-5">
                  <div className="d-flex gap-10 flex-wrap">
                    <ProductCard grid={grid} />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default OurStore