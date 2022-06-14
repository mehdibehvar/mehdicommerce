import Image from 'next/image'
import Link from 'next/link'
import { store } from "contexts/store";
import Cookies from "js-cookie";
import { useContext } from 'react';
export default function Logo() {
    const {dispatch:darkModeDispatch,state}=useContext(store);
    const {darkMode}=state
    const handleDarkMode=()=> {
        darkModeDispatch({
          type:"TOGGLE-DARK-MODE"
        })
        const newdarkMode=!darkMode;
        Cookies.set("darkMode",newdarkMode?'ON':'OFF')
      }
  return (
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
  )
}
