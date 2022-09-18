import { createContext ,useReducer,useContext} from "react";
import AuthReducer, {initialState} from "./AuthReducer";


export const authStateContext=createContext();
 const authDispatchContext=createContext();
export const useAuthStateContext=()=>{
    const context = useContext(authStateContext);
    if(!context){
        throw Error("you should use authstatecontext provider")
    }
   return context
}
export const useAuthDispatchContext=()=>{
    const context = useContext(authDispatchContext)
   
    if(!context){
        throw Error("you should use authDispatchContext provider")
    }
   return context
}
export default function AuthProvider({children}) {
    const [state, dispatch] = useReducer(AuthReducer,initialState);
    return <>
        <authDispatchContext.Provider value={dispatch}>
        <authStateContext.Provider value={state}>
           {children}
          </authStateContext.Provider>
        </authDispatchContext.Provider>
    </>
}