import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Payment() {
    const userInfo=Cookies.get("userInfo");
    const router=useRouter();
useEffect(()=>{
  if(!userInfo){
    router.push("/login?redirect=/payment")
  }
},[])
     
    
  return (
    <div>payment
      <button><Link href="/register?redirect=/payment">
      <a>ثبت نام</a>
      </Link></button>
    </div>
  )
}
///Error: No router instance found.
/// you should only use "next/router" inside the client side of your app.
///for above error we put router.push in the useEffect
