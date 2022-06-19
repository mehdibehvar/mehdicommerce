import { useAuthDispatchContext, useAuthStateContext} from "contexts/authContext/AuthContext";
import { useForm } from "react-hook-form";
import { actionType } from "contexts/authContext/AuthReducer";
import { post } from "lib";

import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Register() {
    const { register,formState: { errors } ,handleSubmit} = useForm();
    const dispatch=useAuthDispatchContext();
    const {error,loading}=useAuthStateContext();
    const router=useRouter()
  const redirect=router.query.redirect
  
    const onSubmit =async (inputs) => {
      const {email,password,name,confirmPassword}=inputs;
      if(password!==confirmPassword){
        alert("تکرار پسورد اشتباه است")
        return
      }
      dispatch({
        type:actionType.login_request,
    })
   try {
    const response=await post("api/users/register",{email,password,name});

    const userInfo=response;
    dispatch({
      type:actionType.login_success,
      payload:userInfo

     })
     router.push(redirect||"/");
   } catch (error) {
    console.log(error.response.data);
    dispatch({
      type:actionType.login_error,
      payload:{
        error:error.response.data
      }
    })
   }
  };
  return (
    <div className="container w-50">
<form className="row mt-5 mx-5 g-3"  onSubmit={handleSubmit(onSubmit)}>
<div className="col-md-10">
  <label htmlFor="inputName4" className="form-label">name</label>
  <input  {...register("name", { required: true, maxLength: 20,minLength:3})}  type="text" className="form-control" id="inputName4"/>
 {errors.name?.type === 'required' && "First name is required"}
<span className="text-danger">{errors.name && "name must have at least"}</span>
 
</div>
<div className="col-md-10">
  <label htmlFor="inputEmail4" className="form-label">ایمیل</label>
  <input  {...register("email", { pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}  type="email" className="form-control" id="inputEmail4"/>
  <span className="text-danger">{errors.email && "name must have at least"}</span>
</div>
<div className="col-md-10">
  <label htmlFor="inputPassword4" className="form-label">رمز عبور</label>
  <input  {...register("password", { required: true,minLength:5})}  type="password" className="form-control" id="inputPassword4"/>
  <span className="text-danger">{errors.password && "name must have at least 5"}</span>
</div>
<div className="col-md-10">
  <label htmlFor="confirmPassword4" className="form-label"> تکرار رمز عبور</label>
  <input  {...register("confirmPassword", { required: true,minLength:5})}  type="password" className="form-control" id="confirmPassword4"/>
  <span className="text-danger">{errors.confirmPassword && "name must have at least"}</span>
</div>
{error?<span className="text-danger">با این ایمیل قبلا ثبت نام شده{error.slice(82)}</span>:null}
<div className="col-10">
  <button type="submit" className="btn btn-primary w-100 mt-3">Sign up</button>
</div>

<div className="col-10">
  <span>ایا قبلا حساب داشتی؟</span><span><Link href={`/login?redirect=${redirect||"/"}`}> 
  <a> ورود</a>
  </Link></span>
</div>
</form>
  </div>
  )
}
