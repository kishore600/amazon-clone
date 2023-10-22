import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'

const RefundPolicy = () => {
  return (
    <>
        <BreadCrumb title="Refund Policy" />
        <Meta title={"Refund Policy"} />
        <Container class1 = "refund-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default RefundPolicy