import Cookies from "js-cookie";
import {
    useAuthDispatchContext,
    useAuthStateContext,
  } from "contexts/authContext/AuthContext";
import { actionType } from "contexts/authContext/AuthReducer";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BsFillPersonFill,BsFillPersonCheckFill } from "react-icons/bs";
 function LoginIcon() {
    const { userInfo}  = useAuthStateContext();
    const {dispatch} = useAuthDispatchContext();
  
    function handleLogout() {
      Cookies.remove('userInfo');
      Cookies.remove('basket');
      dispatch({
        type: actionType.logout_user,
      });    
    }
  return (
   <>     {userInfo ? (
    <div className="profile-wrapper d-flex align-items-center">
      <div className="btn-group"> 
        <span
          type="button"  
          className="dropdown-toggle border-0 " 
          data-bs-toggle="dropdown"       
          aria-expanded="false"
        >
          <span className="text-success ms-2 my-2">
            <BsFillPersonCheckFill/>
          </span>
        </span>
        <ul className="dropdown-menu login-menu">
          <li>
        <Link href="/profile">
        <a className="dropdown-item" >
              پروفایل
            </a>
        </Link>
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
              <a
                className="dropdown-item"
                onClick={handleLogout}
              >
                خروج
              </a>
            </Link> 
          </li>
        </ul>
      </div>

      <span className="text-primary user-login-text ms-2 mt-2 fw-light">
        {userInfo.name}
      </span>
    </div>
  ) : (
    <div className="profile-wrapper d-flex align-items-center">
      <Link href="/login">
        <a>
          <span className="text-danger ms-2 my-2">
            <BsFillPersonFill/> 
          </span>
        </a>
      </Link>
      <span className="text-secondary user-login-text m-2 fw-light">
        ورود به حساب کاربری
      </span>
    </div>
  )}</>
  )
}
export default dynamic(()=>Promise.resolve(LoginIcon),{ssr:false});
////we can get userInfo from cookies:const userInfo=JSON.parse(Cookies.get("userInfo"))
///bus because we don't have cookies in the server side we get error,
///so we have two solution first dynamic export second put cookies.get in the useEffect;
///the initialState in the authReducer get it's value from cookies