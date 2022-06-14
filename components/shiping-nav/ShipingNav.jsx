import React from "react";

export default function ShipingNav() {
  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center">
        <div
          className=" col-sm-6 col-md-4 col-lg-2 shipping-wrapper d-flex">
          <a href="#">
            <i className="fas fa-shipping-fast mr-2 mt-2"></i>
          </a>
          <p>
            <span className="d-block text-warning">ارسال رایگان</span>
            به سراسر کشور
          </p>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2 shipping-wrapper d-flex">
          <i className="fas fa-credit-card mr-2 mt-2"></i>
          <p>
            <span className="d-block text-warning">پرداخت اسان</span>با انواع
            کارت اعتباری
          </p>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2 shipping-wrapper d-flex">
          <i className="fas fa-shipping-timed mr-2 mt-2"></i>
          <p>
            <span className="d-block text-warning">کمترین زمان</span>
            در تحویل کالا
          </p>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2 shipping-wrapper d-flex">
          <i className="fas fa-comment mr-2 mt-2"></i>
          <p>
            <span className="d-block text-warning">نظرات</span>مشتریان گرامی
          </p>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2 shipping-wrapper d-flex">
          <i className="fas fa-coins mr-2 mt-2"></i>
          <p>
            <span className="d-block text-warning">تخفیفات ویژه</span>برای
            مشتریان وفادار
          </p>
        </div>
      </div>
    </div>
  );
}
