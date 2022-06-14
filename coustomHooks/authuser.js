import { useAuthDispatchContext } from 'contexts/authContext/AuthContext';
import { actionType } from 'contexts/authContext/AuthReducer';
import { useEffect } from 'react'
import { get } from 'lib';
import Cookies from 'js-cookie';
const useAuthUser=()=>{
    const dispatch=useAuthDispatchContext();
    useEffect(() => {
      const tokencookie=Cookies.get("token")
      console.log(tokencookie);
        if(tokencookie){
          get(`http://localhost:5000/users/me`,{
            headers:{authorization:tokencookie}
          }).then(response=>{
                if(response){
                  dispatch({
                    type:actionType.login_success,
                    payload:{
                        token:tokencookie,
                        user:response.data
                    }
                })
                }
              }).catch((error) => {
              dispatch({
                type: actionType.login_error,
                payload: {
                  error,
                },
              });
            });
         
         }
      
    }, [dispatch]);
  }
  export default useAuthUser;