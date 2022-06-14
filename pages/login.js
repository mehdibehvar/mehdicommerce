import { useAuthDispatchContext, useAuthStateContext} from "contexts/authContext/AuthContext";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { actionType } from "contexts/authContext/AuthReducer";
import { post } from "lib";

import { useRouter } from "next/router";


export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const dispatch=useAuthDispatchContext();
  const {error,loading}=useAuthStateContext();
  const router=useRouter()

  const onSubmit = inputs => {
    const {email,password}=inputs;
    dispatch({
        type:actionType.login_request,
    })
    post("http://localhost:5000/login",{username:email,password}).then(({data,success})=>{
     if(!success){
        dispatch({
            type: actionType.login_error,
            payload: {
              error:"wrong password and email"
            },
          });
     }else{
        document.cookie = `token=${data}; expires=Thu, 18 Dec 2023 12:00:00 UTC;`;
        router.push("/")
     }
    })
};

  return (<>
    {loading?<p className="text-danger fs-1">loading.....</p>:<>
    <div className="container w-50">
  <form className="row g-3"  onSubmit={handleSubmit(onSubmit)}>
<div className="col-md-6">
  <label htmlFor="inputEmail4" className="form-label">ایمیل</label>
  <input  {...register("email", { required: true})}  type="email" className="form-control" id="inputEmail4"/>
</div>
<div className="col-md-6">
  <label htmlFor="inputPassword4" className="form-label">رمز عبور</label>
  <input  {...register("password", { required: true})}  type="password" className="form-control" id="inputPassword4"/>
</div>
<div className="col-12">
  <label htmlFor="inputAddress" className="form-label">شماره موبایل</label>
  <input {...register("mobile", { pattern:"/^09[0|1|2|3][0-9]{8}$/i"})} type="mobile-number" className="form-control" id="inputAddress" placeholder="0990945...."/>
</div>


<div className="col-12">
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id="gridCheck"/>
    <label className="form-check-label" htmlFor="gridCheck">
      Check me out
    </label>
  </div>
</div>
<div className="col-12">
  <button type="submit" className="btn btn-primary">Sign in</button>
</div>
{error?<span className="text-danger">{error}</span>:null}
</form>
  </div>
<style jsx>{`{span{
  color:red;
font-size:14px
}}`}</style>
    </>}
  </>
    
  );
}