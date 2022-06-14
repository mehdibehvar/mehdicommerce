import React from 'react'
import Image from 'next/image'
import LeaveComment from './LeaveComment'
export default function Opinions() {
  return (
    <div
    className="tab-pane tab-pane-3 show active fade mt-3 p-3"
    id="contact"
    role="tabpanel"
    aria-labelledby="contact-tab"
  >
    <div className="container">
    <div className="row">
        <div className="col-sm-12 col-md-5">
          <div className="bg-light  p-3">
            <h6 className="mb-2 mt-2">ارزش خرید نسبت به قیمت</h6>
            <div className="progress">
              <div
                className="progress-bar1"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h6 className="mb-2 mt-3">کیفیت ساخت</h6>
            <div className="progress" >
              <div
                className="progress-bar2"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h6 className="mb-2 mt-3">کیفیت عمومی پخش صدا</h6>
            <div className="progress">
              <div
                className="progress-bar3"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h6 className="mb-2 mt-3">امکانات و قابلیت ها</h6>
            <div className="progress" >
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h6 className="mb-2 mt-3">ارگونومی</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>


        <div className="col-sm-12 col-md-7 login-section p-3">
          <p>شما هم میتوانید در مورد این کالا نظر دهید.</p>
          <p>
            برای ثبت نظر لازم است ابتدا وارد حساب کاربری خود شوید.اکر
            این محصول را قبلا از دی جی کالا خریداری کرده باشین نظر شما
            به عنوان مشتری ثبت خواهد شد.
          </p>
          <button type="button" className="btn btn-success btn-sm mt-5">
            <i className="fas fa-sign-in-alt mr-2"></i>
            <span>ورود-ثبت نام</span>
          </button>
        </div>
      </div>
      <div className="row mt-3 border-bottom">
        <div className="col-sm-12 col-md-4 ">
        <Image
             src="/assets/images/my pic.jpg"
            width={60}
            height={60}
            className="mr-3 rounded-circle"
            alt="user-pic"
        />
          <p className="mt-2 text-secondary">مهدی بهور(خریدار)</p>
          <div className="sugetion-sp bg-primary px-1 ">
          <span className="material-icons text-primary mr-2">
thumb_up
</span>


            <span className="text-white">
              خرید این محصول را پیشنهاد میکنم
            </span>
          </div>
          <div className="d-flex flex-column">
            <span className="text-secondary my-2">رنگ:مشکی</span>
            <span className="text-secondary">
              فروشنده:فروشگاه کوروش
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 mt-3">
          <div className="media-body">
            <h5 className="mt-0 text-secondary">
              محصول بسیار با کیفیتی میباشد و از یک برند معتبر میباشد.
            </h5>
            <p className="text-success m-0">نقاط قوت</p>
            <ul className="nav flex-column">
              <li className="nav-item ">
                <i
                  className="fa fa-plus-square text-success mr-2 "
                  aria-hidden="true"
                ></i>
                <span className="text-secondary">قیمت مناسب</span>
              </li>
              <li className="nav-item ">
                <i
                  className="fa fa-plus-square text-success mr-2 "
                  aria-hidden="true"
                ></i>
                <span className="text-secondary">کیفیت مطلوب</span>
              </li>
              <li className="nav-item ">
                <i
                  className="fa fa-plus-square text-success mr-2 "
                  aria-hidden="true"
                ></i>
                <span className="text-secondary">صدای واضح و شفاف</span>
              </li>
            </ul>
            <p className="text-danger m-0">نقاط ضعف</p>
            <ul className="nav flex-column">
              <li className="nav-item ">
                <i
                  className="fa fa-minus-circle text-danger mr-2 "
                  aria-hidden="true"
                ></i>
                <span className="text-secondary">قیمت مناسب</span>
              </li>
              <li className="nav-item ">
                <i
                  className="fa fa-minus-circle text-danger mr-2 "
                  aria-hidden="true"
                ></i>
                <span className="text-secondary">کیفیت مطلوب</span>
              </li>
              <li className="nav-item ">
                <i
                  className="fa fa-minus-circle text-danger mr-2 "
                  aria-hidden="true"
                ></i>
                <span className="text-secondary">صدای واضح و شفاف</span>
              </li>
            </ul>
          </div>

          <div className="vote-wrapper d-flex align-items-center justify-content-end text-secondary">
            <span className="bg-light">
              ایا این نظر برای شما مفید بود؟
            </span>
            <span className="mx-4 bg-light p-0">بله 10</span>
            <span className="bg-light p-0">خیر 0</span>
          </div>
        </div>
      </div>
    </div>

   <LeaveComment/>
  </div>
  )
}
