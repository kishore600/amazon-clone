import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactImageZoom from 'react-image-zoom'
import ReactStarts from 'react-rating-stars-component'
import Color from '../components/Color.jsx'
import {TbGitCompare} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";

const SingleProduct = () => {
    const [orderedProduct,setOrderedProduct] = useState(true)
    const props = {
        width:650,
        height:500,
        zoomWidth:500,
        // zoomHeight:500,
        img:"https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2021/06/Watches-Under-2-Lakh-3-1536x597.jpg"
    }
    const copyToClipboard = (text) => {
      console.log('text', text)
      var textField = document.createElement('textarea')
      textField.innerText = text
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
    }
  return (
    <div>
      <BreadCrumb title="Single Product" />
      <Meta title={"Single Product"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
                <div className="main-product-image">
                    <div>
                        <ReactImageZoom {...props} />
                    </div>
                </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                  <div>
                    <img src="https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2021/06/Watches-Under-2-Lakh-3-1536x597.jpg" className="img-fluid" alt="" srcset="" />
                  </div>
                  <div>
                    <img src="https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2021/06/Watches-Under-2-Lakh-3-1536x597.jpg" className="img-fluid" alt="" srcset="" />
                  </div>
                  <div>
                    <img src="https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2021/06/Watches-Under-2-Lakh-3-1536x597.jpg" className="img-fluid" alt="" srcset="" />
                  </div>
                  <div>
                    <img src="https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2021/06/Watches-Under-2-Lakh-3-1536x597.jpg" className="img-fluid" alt="" srcset="" />
                  </div>
              </div>
            </div> 
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids HeadPhone Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">
                    $100
                  </p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStarts
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a href="#review">Write a Review</a>
                </div>
                <div className="border-bottom">
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Type : </h3> <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Brand : </h3> <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Category : </h3> <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Tag : </h3> <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Avalablity : </h3> <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size : </h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border-1 bg-white text-dark border-secondary border">S</span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">M</span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">XL</span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">XXL</span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color : </h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Quantity : </h3> 
                    <div>
                      <input type="number"
                        name=""
                        min={1}
                        max={9}
                        className="form-control"
                        style={{width:"70px"}}
                        id=""
                      />
                    </div>
                    <div className="mb-2 d-flex gap-30 ms-5 align-items-center">
                      <button className="button border-0">Add to Cart</button>
                      <button className="button signup">By Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15 mt-3">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-3" /> Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-3" /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping & Returns </h3>
                    <p className="product-data">
                      Free shipping and returns avaliable on all orders ! <br /> We ship all US domestic orders within {" "}
                      <b>5-10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center mt-3">
                    <h3 className="product-heading">Product Link </h3>
                    <a href="javascript:void(0)" onClick={()=>{
                      copyToClipboard("https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2021/06/Watches-Under-2-Lakh-3-1536x597.jpg")
                    }}>cick to copy clickboard</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="bg-white p-3">
                  <h4>Description</h4>
                  <p className="bg-white p-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore debitis ipsam ullam sed? Voluptatum commodi maiores
                    neque? Ipsa eveniet laudantium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="review-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="text fs-4"> Reviews</h3>
                <div className="rivew-inner-wrapper">

                <div className="review-head d-flex justify-content-between align-items-end">
                    <div className="">
                        <h4 className="mb-2">Coustomer Reviwes</h4>
                        <div className="d-flex align-items-center gap-10 mb-3">
                        <ReactStarts
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                            />
                            <p className="mb-0">Based on 2 Review</p>
                        </div>
                    </div>
                    {
                        orderedProduct && (
                            <div>
                                <a href="">Write a Review</a>
                            </div>
                        )
                    }
                </div>
                <div id="review" className="review-form py-4">
                <form action="" className="d-flex gap-15 flex-column">
                <p className="mt-4">Write Reviwes</p>
                      
                    <div className="">
                      <textarea name="" id="" placeholder="Comments" cols="30" rows="10" className="w-100 form-control"></textarea>
                    </div>
                  </form>
                  <div className=" d-flex justify-content-end">
                    <button className="button mt-3 ">Submit Review</button>
                  </div>
                </div>
                <div className="reviews">
                    <div className="reviews d-flex align-items-center gap-10">
                        <h6 className="mb-0">Kishore</h6>
                    <ReactStarts
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    </div>
                    <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti laudantium id repudiandae, rerum aliquam. Illum tempore quisquam ex cum eos! Sed consequatur qui saepe ad sint perspiciatis molestias enim.
                    </p>
                </div>
              </div>
                </div>
            </div>
          </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">popular</div>
            </div>
          </div>
        </section>
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
