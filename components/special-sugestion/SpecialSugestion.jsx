import Image from "next/image";

export default function SpecialSugestion() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12">
          <nav dir="ltr">
            <div
              className="nav nav-tabs custom-nav-tabs"
              id="nav-tab"
              role="tablist"
            >
              <p className="nav-sugestion-title position-absolute">
                پیشنهادهای ویژه امروز
              </p>
              <a
                className="nav-link "
                id="nav-profile-tab"
                data-toggle="tab"
                href="#mode-clothes"
                role="tab"
                aria-controls="mode-clothes"
                aria-selected="false"
              >
                مد و پوشاک
              </a>
              <a
                className="nav-link "
                id="nav-contact-tab"
                data-toggle="tab"
                href="#nav-contact"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                بازی و سرگرمی
              </a>
              <a
                className="nav-link "
                id="nav-contact-tab"
                data-toggle="tab"
                href="#nav-sport"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                ورزشی
              </a>
              <a
                className="nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                موبایل و تبلت
              </a>
            </div>
          </nav>
          {/*tab content start */}
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="container">
                <div className="row">
                  {/*first-sugestion*/}
                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired "></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="k">
                          <Image
                            className=" first-sugetion"
                            src="/assets/images/special-sugetion/headset-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="k">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/special-sugetion/s3.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos " dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*second-sugestion  */}
                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired"></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/carousel-pics/slidepic1.jpg"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos" dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired "></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos " dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired"></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos" dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="mode-clothes"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired "></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos " dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired"></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos" dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired "></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos " dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired"></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos" dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired "></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos " dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired"></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos" dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired "></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos " dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired"></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos" dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade "
              id="nav-sport"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired "></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این1
                            <div className="d-flex demos " dir="ltr"></div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired"></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos" dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired "></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos " dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 custom-sugestion-border p-2  d-flex justify-content-center align-items-center">
                    <div className="sugetion-expired"></div>
                    <div className="d-flex justify-content-between sugetion-blur">
                      <div className="img-special-sug">
                        <a href="">
                          <Image
                            className="img-fluid first-sugetion"
                            src="/assets/images/tablet-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                        <a href="">
                          <Image
                            className="img-fluid second-sugetion"
                            src="/assets/images/mobpng-removebg-preview.png"
                            alt="dddd"
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="special-caption p-4">
                        <div className="special-brand mb-1">
                          <a className="" href="">
                            هدست شیائومی مدل b-59
                          </a>
                        </div>
                        <div className="stars mb-1">
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="fas fa-star text-warning"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="discount mb-1">
                          <p className="p-0 m-0">
                            <s className="mr-2 text-danger">250/000 تومان</s>
                            150/000 تومان
                          </p>
                        </div>
                        <div className="count-down-timer">
                          <p className="mb-1">
                            فرصت
                            <span className="text-warning">باقی مانده</span>
                            تا پایان این پیشنهاد
                          </p>
                          <div className="d-flex demos" dir="ltr"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* second-sugestion*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
