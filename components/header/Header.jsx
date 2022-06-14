import Link from "next/link";
import useAuthUser from "coustomHooks/authuser";
import {
  useAuthDispatchContext,
  useAuthStateContext,
} from "contexts/authContext/AuthContext";

import { actionType } from "contexts/authContext/AuthReducer";
import NavbarMenu from "./NavbarMenu";
import Logo from "./Logo";
import Search from "./Search";
export default function Header() {
  const { user, token } = useAuthStateContext();
  const dispatch = useAuthDispatchContext();

  useAuthUser();
  function handleLogout() {
    document.cookie = `token=${token}; expires=Thu, 18 Dec 2000 12:00:00 UTC;`;
    dispatch({
      type: actionType.logout_user,
    });
  }

  return (
    <header className="w-100 m-3">
      <div className="top-header-container m-2">
        <div className="brand-container">
          <div className="top-header container ">
            <div className="row  d-flex">
              <Logo />
              <Search />
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
      <NavbarMenu />
    </header>
  );
}
