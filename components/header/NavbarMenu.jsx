import Image from 'next/image'
import Link from 'next/link'
import { MdMenuOpen } from "react-icons/md";
export default function NavbarMenu() {
  return (
    <nav className="header-menu  w-100 d-flex align-items-center justify-content-center position-relative">
    <div className="inner w-100 d-flex align-items-center justify-content-center position-relative">
      <ul className="d-flex align-items-center justify-content-center ">
        <li>
          <Link href="/">
            <a>
              <span className="text-muted fs-5"><MdMenuOpen/></span>
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
  )
}
