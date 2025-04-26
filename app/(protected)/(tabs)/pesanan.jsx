import React from 'react'
import NoOrderComponent from '../../../component/no-order'
import DeatailOrderan from '../../../component/detail-orderan'


const anyOrder = true

const Pesanan = () => {

  return (
    <>
      {anyOrder ? (
          <DeatailOrderan />
        ) : (
          <NoOrderComponent />
        )
      }
    </>
  )
}

export default Pesanan