import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container-fluid bg-success bg-opacity-10 position-absolute mt-5">
      <div className="container main-wrapper-footer">
        <div className="container">
          <div className="row second-footer  mt-5">
            <div className=" col-sm-6 col-md-3 section-f1">
              <h6>اطلاعات</h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    درباره ما
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    تماس با ما
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    نحوه ارسال
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  pr-0 text-secondary">محصولات جدید</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    محصولات منتخب
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    سابقه خرید
                  </a>
                </li>
              </ul>
            </div>
            <div className=" col-sm-6 col-md-3 ">
              <h6>خدمات مشتریان</h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    درباره ما
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    تماس با ما
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    نحوه ارسال
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  pr-0 text-secondary">محصولات جدید</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    محصولات منتخب
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    سابقه خرید
                  </a>
                </li>
              </ul>
            </div>
            <div className=" col-sm-6 col-md-3">
              <h6>حساب کاربری</h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    درباره ما
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    تماس با ما
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    نحوه ارسال
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  pr-0 text-secondary">محصولات جدید</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    محصولات منتخب
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0 text-secondary" href="#">
                    سابقه خرید
                  </a>
                </li>
              </ul>
            </div>
            <div className=" col-sm-6 col-md-3 section-f4">
              <h6>اطلاعات تماس</h6>
              <ul className="nav flex-column">
                <li className="nav-item d-flex support mt-2">
                  <a className="nav-link pl-0 pr-4" href="#">
                    <i className="fas fa-user-headset  p-0"></i>
                  </a>
                  <div>
                    <p className="m-0 p-0 mt-1">پشتیبانی 24 ساعته</p>
                    <a href="tel:02133330000" className="m-0 p-0 ">
                      09909459497
                    </a>
                  </div>
                </li>
                <li className="nav-item social-icon mt-4">
                  <a href="">
                    <i className="fas fa-rss"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item address mt-4">
                  <p className="text-secondary">یاسوج-پاتاوه</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
