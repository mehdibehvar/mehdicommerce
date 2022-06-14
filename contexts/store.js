import Cookies from "js-cookie";
import { createContext, useReducer} from "react";
export const store=createContext()

const initialState={
    darkMode:Cookies.get('darkMode')==='OFF'?false:true
}
 function reducer(state,action) {
    switch (action.type) {
        case "TOGGLE-DARK-MODE":
            return {
                ...state,
                darkMode:!state.darkMode}   
        default:
            return state;
    }
}

export default function StoreProvider({children}) {
    const [state,dispatch] = useReducer(reducer,initialState)
    const value={state,dispatch};
    return <store.Provider value={value}>
        {children}
    </store.Provider>
}