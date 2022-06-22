import { useAuthDispatchContext, useAuthStateContext} from "contexts/authContext/AuthContext";
import { useForm } from "react-hook-form";
import { actionType } from "contexts/authContext/AuthReducer";
import { post, put } from "lib";
import { useSnackbar } from 'notistack';
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "layouts/Layout";
import { useEffect } from "react";
import Cookies from "js-cookie";



export default function Register() {
    const { register,formState: { errors } ,handleSubmit,setValue} = useForm();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const router=useRouter()
    const dispatch=useAuthDispatchContext();
    const {userInfo}=useAuthStateContext();
    useEffect(() => {
        if (!userInfo) {
          return router.push('/login');
        }
        setValue('name', userInfo.name);
        setValue('email', userInfo.email);
      }, []);
    const onSubmit =async (inputs) => {
      const {email,password,name,confirmPassword}=inputs;
      closeSnackbar()
      if(password!==confirmPassword){
        enqueueSnackbar("تکرار پسورد اشتباه است",{variant:"error",autoHideDuration: 2000})
        return
      }
   try {
    const response=await put("api/users/profile",{email,password,name,id:userInfo._id});
    dispatch({
      type:actionType.login_success,
      payload:response,
      error:null

     })
     Cookies.set("userInfo",JSON.stringify(response));
     enqueueSnackbar("پروفایل بروزرسانی شد",{variant:"success",autoHideDuration:2000})
   } catch (error) {
  enqueueSnackbar(`با این ایمیل قبلا ثبت نام شده${error}`)
   }
  };
  return (
<Layout>
<div className="container w-50">
    <h5 className="text-success mt-3">پروفایل</h5>
<form className="row mt-2 mx-5 g-3"  onSubmit={handleSubmit(onSubmit)}>
<div className="col-md-10">
  <label htmlFor="inputName4" className="form-label">نام</label>
  <input  {...register("name", { required: true, maxLength: 20,minLength:3})}  type="text" className="form-control" id="inputName4"/>
 {errors.name?.type === 'required'?<span  className="text-danger p-0 m-0">نام اجباری است</span>:null }
<p className="text-danger p-0 m-0">{errors.name?.type==="minLength" && "name must have at least 3"}</p>
 
</div>
<div className="col-md-10">
  <label htmlFor="inputEmail4" className="form-label">ایمیل</label>
  <input  {...register("email", {required:true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}  type="email" className="form-control" id="inputEmail4"/>
  <span className="text-danger">{errors.email?.type==="pattern" && "ایمیل وارد شده اشتباه است"}</span>
  <span className="text-danger">{errors.email?.type==="required" && "ایمیل اجباری است"}</span>
</div>
<div className="col-md-10">
  <label htmlFor="inputPassword4" className="form-label"> رمز عبور جدید</label>
  <input  {...register("password", { minLength:5})}  type="password" className="form-control" id="inputPassword4"/>
  <span className="text-danger">{errors.password?.type==="minLength" && "پسورد حداقل باید 5 کارکتر داشته باد"}</span>
</div>
<div className="col-md-10">
  <label htmlFor="confirmPassword4" className="form-label">  تکرار رمز عبور جدید</label>
  <input  {...register("confirmPassword", {minLength:5})}  type="password" className="form-control" id="confirmPassword4"/>
  <span className="text-danger">{errors.confirmPassword?.type==="minLength" && "پسورد حداقل باید 5 کارکتر داشته باد"}</span>
</div>

<div className="col-10">
  <button type="submit" className="btn btn-primary w-100 mt-3">update</button>
</div>

</form>
  </div>
</Layout>
  )
}
