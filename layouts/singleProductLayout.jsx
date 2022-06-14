import Header from 'components/header/Header'
import Breadcrumb from 'components/singleProduct/breadcrumb'
import NavTabSection from 'components/singleProduct/NavTabSection'
import ProductFeatures from 'components/singleProduct/productFeatures'
import React from 'react'

export default function SingleProductLayout({product}) {
   
  return (
   <>
    <Header/>
    <main>
    <div className="container mt-5 mb-5">
        <Breadcrumb/>
        <ProductFeatures product={product}/>
        <NavTabSection />

            </div>
    </main>
   </>
  )
}
