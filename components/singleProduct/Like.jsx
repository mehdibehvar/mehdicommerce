import { FaRegHeart } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import {FaHeart} from "react-icons/fa"
import { useSnackbar } from "notistack";
import Cookies from "js-cookie";
import { put } from "lib";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useAuthDispatchContext, useAuthStateContext } from "contexts/authContext/AuthContext";
import { actionType } from "contexts/authContext/AuthReducer";
import { useRouter } from "next/router";
 function Like({like,id,slug}) {
    const dispatch=useAuthDispatchContext();
    const {userInfo}=useAuthStateContext();
    const {email,favorites}=userInfo?userInfo:{};
    const likedProduct=favorites?favorites.some(fav=>fav==id):false;
    const {enqueueSnackbar,closeSnackbar}=useSnackbar();
    const [heart,setHeart]=useState(likedProduct); 
    const [likes,setLikes]=useState(like);
    const router=useRouter()
    const changeLikes=async ()=>{
      closeSnackbar();
      if(!userInfo){
        router.push(`/login/?redirect=product/${slug}`);
        return
      }
        dispatch({
          type:actionType.update_userInfo,
          payload:id
        })
        try{
          const response=await put(`api/products/${id}`,{like:heart});
          const userInfo=await put(`api/users/login`,{like:heart,id,email});
          Cookies.set("userInfo",JSON.stringify(userInfo));
          setLikes(response.like);
          setHeart(!heart);
          Cookies.set("heart",!heart);
         } catch (error) {
          enqueueSnackbar(error)
         }
      }
      
  return (
  <>
           <div className="like-icon d-flex flex-column justify-content-between">
            <span type="button" onClick={changeLikes}>{!heart?<i className="text-danger me-5 fs-5"><FaRegHeart/></i>:<i className="text-danger me-5 fs-5"><FaHeart/></i>} </span>
            <span className="text-danger"><BiLike/> {likes}</span>
          </div>
  </>
  )
}
export default dynamic(()=>Promise.resolve(Like),{ssr:false})