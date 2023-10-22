import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blog from './pages/Blog'
import CompareProducts from './pages/CompareProducts'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import WishList from './pages/WishList'
import ResetPassword from './pages/ResetPassword'
import SinglePageBlog from './pages/SinglePageBlog.jsx'
import RefundPlicy from './pages/RefundPolicy.jsx'
import ShippingDetails from './pages/ShippingDetails.jsx'
import TermsAndCondition from './pages/TermsAndCondition.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'


import "./App.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Layout />}>
            <Route index element = {<Home />} />
            <Route path = "about" element = {<About />} />
            <Route path = "contact" element = {<Contact />} />
            <Route path = "store" element = {<OurStore />} />
            <Route path = "blog" element = {<Blog />} />
            <Route path = "blog/:id" element = {<SinglePageBlog />} />
            <Route path = "wishlist" element = {<WishList />} />
            <Route path = "compre-products" element = {<CompareProducts />} />
            <Route path = "login" element = {<Login />} />
            <Route path = "signup" element = {<SignUp />} />
            <Route path = "forgot-password" element = {<ForgotPassword />} />
            <Route path = "reset-password" element = {<ResetPassword />} />
            <Route path = "refund" element = {<RefundPlicy />} />
            <Route path = "shipping-details" element = {<ShippingDetails />} />
            <Route path = "terms-condition" element = {<TermsAndCondition />} />
            <Route path = "product/:id" element = {<SingleProduct />} />
            <Route path = "cart" element = {<Cart />} />
            <Route path = "checkout" element = {<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App