import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from '../images/images/prodcompare.svg'
import wish from '../images/images/wish.svg'
import wishlist from '../images/images/wishlist.svg'
import watch from '../images/images/watch.jpg'
import watch2 from '../images/images/tab1.jpg'
import addcart from '../images/images/add-cart.svg'
import view from '../images/images/view.svg'

const ProductCard = (props) => {
  const location = useLocation();
  const { grid } = props;
  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
          <Link to="/product/:id">
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent" to="product/:id">
              <img src='../../images/images/wish.jpg' alt="" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="" />
            <img src={watch2} className="img-fluid" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className={`product-title  ${grid===3 ? 'fs-6' : 'fs-5'} text-dark`}>
              Kids headPhone bulk 10 pack multi colored for students
            </h5>
            <p className="price">$100.00</p>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              To run the test, you'll be connected to Measurement Lab (M-Lab)
              and your IP address will be shared with them and processed by them
              in accordance with their privacy policy. M-Lab conducts the test
              and publicly publishes all test results to promote Internet
              research.
            </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link>
                <img src={prodcompare} alt="view" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="view" />
              </Link>
            </div>
          </div>
        </div>
          </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to='/product/:id'>
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch}className="img-fluid" alt="" />
            <img src={watch2} className="img-fluid" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className={`product-title  ${grid===3 ? 'fs-6' : 'fs-5'} text-dark`}>
              Kids headPhone bulk 10 pack multi colored for students
            </h5>
            <p className="price">$100.00</p>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              To run the test, you'll be connected to Measurement Lab (M-Lab)
              and your IP address will be shared with them and processed by them
              in accordance with their privacy policy. M-Lab conducts the test
              and publicly publishes all test results to promote Internet
              research.
            </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
               <button className="border-0 bg-tansparent">
                <img src={prodcompare} alt="view" />
              </button>
               <button className="border-0 bg-tansparent">
                <img src={view} alt="view" />
              </button>
               <button className="border-0 bg-tansparent">
                <img src={addcart} alt="view" />
              </button>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
