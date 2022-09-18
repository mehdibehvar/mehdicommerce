import { useAuthDispatchContext, useAuthStateContext} from "contexts/authContext/AuthContext";
import { useForm } from "react-hook-form";
import { actionType } from "contexts/authContext/AuthReducer";
import { post } from "lib";
import { useSnackbar } from 'notistack';
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";



export default function Register() {
    const { register,formState: { errors } ,handleSubmit} = useForm();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispatch=useAuthDispatchContext();
    const router=useRouter()
  const redirect=router.query.redirect
  const action = key => (
    <>
        <button className="btn btn-danger border-0 mx-3" onClick={() => { closeSnackbar(key) }}>
            Dismiss
        </button>
    </>
);
    const onSubmit =async (inputs) => {
      const {email,password,name,confirmPassword}=inputs;
      closeSnackbar()
      if(password!==confirmPassword){
        enqueueSnackbar("تکرار پسورد اشتباه است",{variant:"error",autoHideDuration: 2000,action})
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
      payload:userInfo,
      error:null
     })
     Cookies.set("userInfo",JSON.stringify(userInfo));
     router.push(redirect||"/");
   } catch (error) {
  enqueueSnackbar(`با این ایمیل قبلا ثبت نام شده${error.response.data.slice(1,90)}`,{variant:"error"})
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
  <label htmlFor="inputName4" className="form-label">نام</label>
  <input  {...register("name", { required: true, maxLength: 20,minLength:3})}  type="text" className="form-control" id="inputName4"/>
 {errors.name?.type === 'required'?<span  className="text-danger p-0 m-0">نام اجباری است</span>:null}
<p className="text-danger p-0 m-0">{errors.name?.type==="minLength" && "نام باید حداقل 3 حرف داشته باشد."}</p>
 
</div>
<div className="col-md-10">
  <label htmlFor="inputEmail4" className="form-label">ایمیل</label>
  <input  {...register("email", {required:true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}  type="email" className="form-control" id="inputEmail4"/>
  <span className="text-danger">{errors.email?.type==="pattern" && "ایمیل وارد شده اشتباه است"}</span>
  <span className="text-danger">{errors.email?.type==="required" && "ایمیل اجباری است"}</span>
</div>
<div className="col-md-10">
  <label htmlFor="inputPassword4" className="form-label">رمز عبور</label>
  <input  {...register("password", { required: true,minLength:5})}  type="password" className="form-control" id="inputPassword4"/>
  <span className="text-danger">{errors.password?.type==="minLength" && "پسورد حداقل باید 5 کارکتر داشته باد"}</span>
</div>
<div className="col-md-10">
  <label htmlFor="confirmPassword4" className="form-label"> تکرار رمز عبور</label>
  <input  {...register("confirmPassword", { required: true,minLength:5})}  type="password" className="form-control" id="confirmPassword4"/>
  <span className="text-danger">{errors.confirmPassword?.type==="minLength" && "پسورد حداقل باید 5 کارکتر داشته باد"}</span>
</div>

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
