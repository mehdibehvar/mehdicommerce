import { useAuthDispatchContext } from 'contexts/authContext/AuthContext';
import { actionType } from 'contexts/authContext/AuthReducer';
import { useEffect } from 'react'
import Cookies from 'js-cookie';
const useAuthUser=()=>{
    const dispatch=useAuthDispatchContext();
      const user=Cookies.get("userInfo");
 useEffect(() => {
  if(token){
    dispatch({
      type:actionType.login_success,
      payload:{
          token:token,
          ///conver string user to object user
          user:JSON.parse(user)
      }
  })
   
   }
 

 }, [dispatch,token,user])
 
      
  }
  export default useAuthUser;
  ///A common use of JSON is to exchange data to/from a web server.
///When receiving data from a web server or from cokies, the data is always a string.
///Parse the data with JSON.parse(), and the data becomes a JavaScript object.