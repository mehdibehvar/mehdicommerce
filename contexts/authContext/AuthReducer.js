export const initialState={
    token:null,
    loading:false,
    error:false,
    user:{}
}
export const actionType={
    login_request:"LOGIN-REQUEST",
    login_success:"LOGIN-SUCCESS",
    logout_user:"LOGOUT-USER",
    login_error:"LOGIN-ERROR",
    wrong_user:"WRONG-USER"
}
 const AuthReducer=(state,action)=>{
  switch (action.type) {
    case actionType.login_request:
        return{
            ...state,
            loading:true
        }
      case actionType.login_success:
        const {token,user}=action.payload
        return {
            ...state,
             token,
             user,
             loading:false
        }
  case actionType.login_error:
    const {error}=action.payload
    return {
        ...state,
        loading:false,
        error
    }
    case actionType.logout_user:
        return {
            ...state,
            token:null,
            user:null
        }
    default:
        return state;
  }
}
export default AuthReducer;