import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import useAuthUser from 'coustomHooks/authuser';
import { useAuthDispatchContext, useAuthStateContext } from "contexts/authContext/AuthContext";
import { store } from "contexts/store";
import Cookies from "js-cookie";
import { actionType } from "contexts/authContext/AuthReducer";
export default function Header() {
  const{user,token}=useAuthStateContext();
  const dispatch=useAuthDispatchContext();
  const {dispatch:darkModeDispatch,state}=useContext(store);
  const {darkMode}=state

  useAuthUser()
  function handleLogout(){
    document.cookie = `token=${token}; expires=Thu, 18 Dec 2000 12:00:00 UTC;`;
dispatch({
  type:actionType.LOGOUT
})
  }
const handleDarkMode=()=> {
    darkModeDispatch({
      type:"TOGGLE-DARK-MODE"
    })
    const newdarkMode=!darkMode;
    Cookies.set("darkMode",newdarkMode?'ON':'OFF')
  }
  return (
    <header className="w-100 m-3">
      <div className="top-header-container m-2">
        <div className="brand-container">
          <div className="top-header container ">
            <div className="row  d-flex">
              <div className="brand-wrapper col-sm-2 col-2 col-md-2">
                <Link href="/">
                  <a className="logo-container">
                    <Image
                      src="/assets/images/logo/Branding_Brand.webp"
                      alt="my-brand-logo"
                      width={70}
                      height={45}
                      layout="fixed"
                    />
                  </a>
                </Link> 
                <div className="form-check form-switch">
  <input onChange={handleDarkMode} checked={darkMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">dark mode</label>
</div>
              </div>
              <div
                className="search bg-light d-flex  align-items-center flex-row-reverse justify-content-end col-5 col-sm-5 col-md-5"
                dir="rtl"
              >
                <div className="no-result"></div>
                <div id="autosugestion" className="">
                  <div className="search-box">
                    <input
                      type="text"
                      autoComplete="off"
                      aria-autocomplete="list"
                      aria-activedescendant=""
                      aria-controls="autosuggest-autosuggest__results"
                      id="autosuggest__input"
                      placeholder="جستجو در میان هزاران محصول..."
                      defaultValue=""
                      className="search-input"
                    ></input>
                  </div>
                  <div
                    id="autosuggest-autosuggest__results"
                    className="autosuggest__results-container"
                  ></div>
                </div>
                <button className="btn btn-light">
                  {" "}
                  <span className="material-icons">search</span>
                </button>
              </div>
              {/*top-header-buttons*/}
              <div className="cta-buttons d-flex align-items-center justify-content-end col-5 col-sm-5 col-md-5">
                <a className="cta chat">
                  <span className="material-icons text-muted m-2">
                    whatsapp
                  </span>
                </a>
                <a className="cta hearth">
                  <span className="material-icons text-muted m-2">
                    favorite_border
                  </span>
                </a>
                <Link href="/basket">
                <a className="cta handbag">
                  <span className="material-icons text-muted m-2">
                    shopping_bag
                  </span>
                </a>
                </Link>
                {token ? (
                  <div className="profile-wrapper d-flex align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="dropdown-toggle bg-white border-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="material-icons text-success m-2">
                          person
                        </span>
                      </button>
                      <ul className="dropdown-menu login-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                        پروفایل
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                         کیف پول
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                           پیامها
                          </a>
                        </li>

                        <li>
                        <Link href="/">
                        <a className="dropdown-item" onClick={handleLogout}>
                          خروج
                          </a>
                    </Link>
                         
                        </li>
                      </ul>
                    </div>

                    <span className="text-secondary user-login-text m-2 fw-light">
                      {user.name}
                    </span>
                  </div>
                ) : (
                  <div className="profile-wrapper d-flex align-items-center">
                    <Link href="/login">
                      <a>
                        <span className="material-icons text-muted m-2">
                          person
                        </span>
                      </a>
                    </Link>
                    <span className="text-secondary user-login-text m-2 fw-light">
                      ورود به حساب کاربری
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="header-menu  w-100 d-flex align-items-center justify-content-center position-relative">
        <div className="inner w-100 d-flex align-items-center justify-content-center position-relative">
          <ul className="d-flex align-items-center justify-content-center">
            <li>
              <Link href="/">
                <a>
                  <span className="material-icons  text-muted">menu_open</span>
                  <span className="header-menu-text text-dark">
                    دسته بندی ها
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Image
                    src="/assets/images/logo/brand-club.2443059.png"
                    width={18}
                    height={18}
                    alt="brand-club"
                  />
                  <span className="header-menu-text text-dark">برند کلاب</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Image
                    src="/assets/images/logo/discount.653b6df.png"
                    width={18}
                    height={18}
                    alt="special-discount"
                  />
                  <span className="header-menu-text text-dark">تخفیف ویژه</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Image
                    src="/assets/images/logo/mag.2e461b4.png"
                    width={18}
                    height={18}
                    alt="magazine"
                  />
                  <span className="header-menu-text text-dark">مجله برند</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Image
                    src="/assets/images/logo/seller.2ecde0d.png"
                    width={18}
                    height={18}
                    alt="be-seller"
                  />
                  <span className="header-menu-text text-dark">فروشنده شو</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
