import Cookies from "js-cookie";
import Layout from "layouts/Layout";
import { useRouter } from "next/router";
import { useContext, useEffect, useLayoutEffect } from "react";
import { useAuthStateContext} from "contexts/authContext/AuthContext";
import { useForm } from "react-hook-form";
import { basketActionTypes, store } from "contexts/store";
import StepWizard from "components/StepWizard";
export default function Shipping() {
  const { register,formState: { errors },setValue ,handleSubmit} = useForm();
  const router=useRouter();
const {userInfo}=useAuthStateContext();
const {state,dispatch}=useContext(store);
const {shippingAddress}=state.basket;


useEffect(()=>{
  if(!userInfo){
    router.push("/login?redirect=/shipping")
  }else{
    setValue("fullName",shippingAddress.fullName);
    setValue("address",shippingAddress.address);
    setValue("city",shippingAddress.city);
    setValue("postalCode",shippingAddress.postalCode);
  }
},[])
  const onSubmit =(inputs) => {
    const {fullName,address,city,postalCode}=inputs;
  dispatch({
    type:basketActionTypes.save_shipping_address,
    payload:{fullName,address,city,postalCode}
   })
   Cookies.set("shippingAddress",JSON.stringify({fullName,address,city,postalCode}))
   router.push("/payment");
 } 


     
    
  return (
<Layout title="shipping">
  <StepWizard active={1}/>
<div className="container w-100">
<h4 className="mt-5 text-primary">ثبت ادرس:</h4>
<form className=" row d-flex flex-column align-items-center mt-5 mx-5 g-3"  onSubmit={handleSubmit(onSubmit)}>
<div className="col-12 col-md-6 ">
  <label htmlFor="inputfullName4" className="form-label">نام کامل</label>
  <input  {...register("fullName", { required: true,minLength:3})}  type="text" placeholder="نام کامل" className="form-control" id="inputfullName4"/>
 {errors.fullName?.type === 'required'?<span  className="text-danger p-0 m-0">نام کامل اجباری است</span>:null }
<p className="text-danger p-0 m-0">{errors.fullName?.type==="minLength" && "نام باید حداقل 3 حرف داشته باشد"}</p>
</div>
<div className="col-12 col-md-6">
  <label htmlFor="inputAddress4" className="form-label">ادرس</label>
  <input  {...register("address", {required:true})}  type="text" className="form-control" id="inputAddress4"/>
  <span className="text-danger">{errors.address?.type==="required" && "ادرس اجباری است"}</span>

</div>
<div className="col-12 col-md-6">
  <label htmlFor="inputCity4" className="form-label"> شهر</label>
  <input  {...register("city", { required: true})}  type="text" className="form-control" id="inputCity4"/>
  <span className="text-danger">{errors.city?.type==="required" && "نام شهر اجباری است"}</span>
</div>
<div className="col-12 col-md-6">
  <label htmlFor="postalCode4" className="form-label">کد پستی</label>
  <input  {...register("postalCode",{ required: true,minLength:10})}  type="text" className="form-control" id="postalCode4"/>
  <span className="text-danger">{errors.postalCode?.type==="minLength" && "کد پستی حداقل باید 10 رقم باشد"}</span>
</div>

<div className="col-12 col-md-6">
  <button type="submit" className="btn btn-primary w-100 mt-3"> ادمه فرایند خرید</button>
</div>
</form>
  </div>
</Layout>
  )
}
 
///Error: No router instance found.
/// you should only use "next/router" inside the client side of your app.
///for above error we put router.push in the useEffect
///by setValue if refresh the page the fields will not empety and get data from cookies