import { useAuthDispatchContext } from 'contexts/authContext/AuthContext';
import { actionType } from 'contexts/authContext/AuthReducer';
import { useEffect } from 'react'
import { get } from 'lib';
const useAuthUser=()=>{
    const dispatch=useAuthDispatchContext();
    useEffect(() => {
      const tokencookie=document.cookie;
        if(tokencookie){
          get(`http://localhost:5001/users/?${tokencookie}`).then(response=>{
                if(response[0]){
                  dispatch({
                    type:actionType.login_success,
                    payload:{
                        token:tokencookie,
                        user:response[0]
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