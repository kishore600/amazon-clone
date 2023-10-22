import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'
import Container from "../components/Container";

const CompareProducts = () => {
  return (
    <div>
        <Meta title={'Compare products'} />
        <BreadCrumb title='Compare Products' />
        <Container class1="compare-product-wrpapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src="images/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                            <div className="product-card-image">
                                <img src="images/images/watch.jpg" alt="" />
                            </div>
                            <div className="compare-products-details">
                                <h5 className="title">Honor Tl 7.0 1GB RAM 8GB ROM 7 INCH With Wi-Fi+3G Tablet</h5>
                                <h6 className="price">$100</h6>
                                <div className="">
                                    <div className="product-details">
                                        <h5>Brand : </h5>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Type : </h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Avalablity : </h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Color : </h5>
                                        <Color />
                                    </div>
                                    <div className="product-details">
                                        <h5>Size : </h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>H</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src="images/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                            <div className="product-card-image">
                                <img src="images/images/watch.jpg" alt="" />
                            </div>
                            <div className="compare-products-details">
                                <h5 className="title">Honor Tl 7.0 1GB RAM 8GB ROM 7 INCH With Wi-Fi+3G Tablet</h5>
                                <h6 className="price">$100</h6>
                                <div className="">
                                    <div className="product-details">
                                        <h5>Brand : </h5>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Type : </h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Avalablity : </h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-details">
                                        <h5>Color : </h5>
                                        <Color />
                                    </div>
                                    <div className="product-details">
                                        <h5>Size : </h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>H</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CompareProducts