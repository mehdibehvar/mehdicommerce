import Image from 'next/image'
import Link from 'next/link'
export default function Logo() {
  return (
    <div className="brand-wrapper col-sm-1 col-1 col-md-2">
    <Link href="/">
      <a className="logo-container">
        <Image
          src="/assets/images/logo/Branding_Brand.webp"
          alt="my-brand-logo"
          width={35}
          height={35}
          layout="fixed"
        />
      </a>
    </Link> 
  </div>
  )
}
