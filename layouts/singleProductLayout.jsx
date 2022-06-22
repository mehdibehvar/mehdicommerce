import Header from "components/header/Header";
import Breadcrumb from "components/singleProduct/breadcrumb";
import ProductFeatures from "components/singleProduct/productFeatures";
import React from "react";

export default function SingleProductLayout({ product }) {
  return (
    <>
      <Header />
      <main>
        <div className="container mt-5 mb-5">
          <Breadcrumb product={product} />
          <ProductFeatures product={product} />
        </div>
      </main>
    </>
  );
}
