import Image from "next/image";

export default function Footer() {
  return (
   <footer className="container-fluid bg-white position-absolute mt-5">
            <div className="container main-wrapper-footer">
        
                <div className="container">
                    <div className="row first-footer shadow">
                        <div className="col-12 col-sm-12 col-md-3 footer-section-1 text-secondary mt-2">
                            <h6 className="mb-3">عضویت در خبرنامه</h6>
                            <p>با عضویت از<span className="text-danger">
                                    30% تخفیف</span>
                                بهرمند شوید</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 footer-section-2 text-secondary mt-2">
                            <p>
                                <span className="text-success">به 255/000+ مشترک ما</span>
                                بپیوندید و از تخفیف های ویژه مشترکین خبرنامه برخوردار شوید.</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 footer-section-3 text-secondary d-flex align-items-center mt-2">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="ادرس ایمیل..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <a href="" className="text-decoration-none">
                                        <span className="input-group-text bg-danger text-white" id="basic-addon2">اشتراک</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row second-footer bg-white mt-5">
                        <div className=" col-sm-6 col-md-3 section-f1">
                            <h6>اطلاعات</h6>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">درباره ما</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">تماس با ما</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">نحوه ارسال</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  pr-0 text-secondary">محصولات جدید</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">محصولات منتخب</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">سابقه خرید</a>
                                </li>
                            </ul>
                        </div>
                        <div className=" col-sm-6 col-md-3 ">
                            <h6>خدمات مشتریان</h6>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">درباره ما</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">تماس با ما</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">نحوه ارسال</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  pr-0 text-secondary">محصولات جدید</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">محصولات منتخب</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">سابقه خرید</a>
                                </li>
                            </ul>
                        </div>
                        <div className=" col-sm-6 col-md-3">
                            <h6>حساب کاربری</h6>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">درباره ما</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">تماس با ما</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">نحوه ارسال</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  pr-0 text-secondary">محصولات جدید</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">محصولات منتخب</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-0 text-secondary" href="#">سابقه خرید</a>
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
                                        <a href="tel:02133330000" className="m-0 p-0 ">02133330000</a>
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
                                    <p className="text-secondary">تهران-خیابان ولیعصر</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
  )
}
