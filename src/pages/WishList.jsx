import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'

const WishList = () => {
  return (
    <div>
        <Meta title={"WishList"} />
        <BreadCrumb title="WishList" />
        <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">      
                    <div className="col-3">
                        <div className="wishlist-card w-100 position-relative">
                            <img 
                                src='images/images/cross.svg'
                                alt="cross"
                                className='position-absolute cross img-fluid'
                            />
                            <div className="wishlist-card-image">
                                <img src="images/images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className="title">
                                Honor Tl 7.0 1GB RAM 8GB ROM 7 INCH With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className='price'>$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card w-100 position-relative">
                            <img 
                                src='images/images/cross.svg'
                                alt="cross"
                                className='position-absolute cross img-fluid'
                            />
                            <div className="wishlist-card-image">
                                <img src="images/images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className="title">
                                Honor Tl 7.0 1GB RAM 8GB ROM 7 INCH With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className='price'>$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card w-100 position-relative">
                            <img 
                                src='images/images/cross.svg'
                                alt="cross"
                                className='position-absolute cross img-fluid'
                            />
                            <div className="wishlist-card-image">
                                <img src="images/images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className="title">
                                Honor Tl 7.0 1GB RAM 8GB ROM 7 INCH With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className='price'>$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card w-100 position-relative">
                            <img 
                                src='images/images/cross.svg'
                                alt="cross"
                                className='position-absolute cross img-fluid'
                            />
                            <div className="wishlist-card-image">
                                <img src="images/images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className="title">
                                Honor Tl 7.0 1GB RAM 8GB ROM 7 INCH With Wi-Fi+3G Tablet
                                </h5>
                                <h6 className='price'>$100</h6>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </Container>
    </div>
  )
}

export default WishList