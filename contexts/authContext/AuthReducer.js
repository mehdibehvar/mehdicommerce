import Cookies from "js-cookie"

export const initialState={
    loading:false,
    error:false,
    userInfo:Cookies.get("userInfo")?JSON.parse(Cookies.get("userInfo")):null
}
export const actionType={
    login_request:"LOGIN-REQUEST",
    login_success:"LOGIN-SUCCESS",
    logout_user:"LOGOUT-USER",
    login_error:"LOGIN-ERROR",
    update_userInfo:"UPDATE-USERINFO"
}
 const AuthReducer=(state,action)=>{
  switch (action.type) {
    case actionType.login_request:
        return{
            ...state,
            loading:true
        }
      case actionType.login_success:
        const userInfo=action.payload;
       
        return {
            ...state,
          userInfo,
             loading:false,
             error:false
        }
  case actionType.login_error:
    const {error}=action.payload;
    return {
        ...state,
        loading:false,
        error
    }
    case actionType.logout_user:
        return {
            ...state,
            userInfo:{} 
        }
        case actionType.update_userInfo :
            const id=action.payload;
            const likedProduct=state.userInfo.favorites.some(fav=>fav==id)
            const newFavorites=likedProduct?state.userInfo.favorites.filter(fav=>fav!=id):[...state.userInfo.favorites,id];
            Cookies.set("favorites",newFavorites)
            return {...state,userInfo:{...state.userInfo,favorites:newFavorites}}
    default:
        return state;
  }
}
export default AuthReducer;