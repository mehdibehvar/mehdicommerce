import { useAuthDispatchContext, useAuthStateContext} from "contexts/authContext/AuthContext";
import { useForm } from "react-hook-form";
import { actionType } from "contexts/authContext/AuthReducer";
import { post } from "lib";

import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";
import Loading from "components/loading/Loading";


export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const dispatch=useAuthDispatchContext();
  const {error,loading}=useAuthStateContext();
  const router=useRouter()
const redirect=router.query.redirect

  const onSubmit =async (inputs) => {
    const {email,password}=inputs;
    dispatch({
      type:actionType.login_request,
  })
 try {
  const response=await post("api/users/login",{email,password});
  const userInfo=response;
   dispatch({
    type:actionType.login_success,
    payload:userInfo
   })
   router.push(redirect||"/");
 } catch (error) {
dispatch({
  type:actionType.login_error,
  payload:{
    error:error.response.data.message
  }
})
 }
};

  return (<>
    {loading?<Loading/>:<>
    <div className="container w-50">
<form className="row mt-5 mx-5 g-3"  onSubmit={handleSubmit(onSubmit)}>
<div className="col-md-10">
  <label htmlFor="inputEmail4" className="form-label">ایمیل</label>
  <input  {...register("email", { required: true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}  type="email" className="form-control" id="inputEmail4"/>
</div>
<div className="col-md-10">
  <label htmlFor="inputPassword4" className="form-label">رمز عبور</label>
  <input  {...register("password", { required: true})}  type="password" className="form-control" id="inputPassword4"/>
</div>
{error?<span className="text-danger">{error}</span>:null}
<div className="col-10">
  <button type="submit" className="btn btn-primary w-100 mt-3">Sign in</button>
</div>
<div className="col-10">
  <span>حساب کاربری ندارید؟</span><span><Link href="/register"> 
  <a> ایجاد حساب جدید</a>
  </Link></span>
</div>

</form>
  </div>
    </>}
  </>
    
  );
}
