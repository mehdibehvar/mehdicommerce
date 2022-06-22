
import NavbarMenu from "./NavbarMenu";
import Logo from "./Logo";
import Search from "./Search";
import Basket from "./BasketIcon";

import LoginIcon from "./LoginIcon";
export default function Header() {


  return (
    <header className="header-wrapper bg-light w-100  position-sticky top-0 start-0 ">
      <div className="bg-success bg-opacity-10 p-2">
        <div className="top-header-container m-2">
          <div className="brand-container ">
            <div className="top-header ">
              <div className="row  d-flex">
                <Logo/>
                <Search />
                {/*top-header-buttons*/}
                <div className="col-4 col-sm-4 col-md-5 cta-buttons d-flex align-items-center justify-content-end ">
                  <a className="cta chat hideIcon">
                    <span className="material-icons text-muted m-2">
                      whatsapp
                    </span>
                  </a>
                  <a className="cta hearth hideIcon">
                    <span className="material-icons text-muted m-2">
                      favorite_border
                    </span>
                  </a>
                  <Basket />   
                  <LoginIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavbarMenu />
      </div>
    </header>
  );
}
