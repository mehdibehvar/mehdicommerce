import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
export const store = createContext();

const initialState = {
  darkMode: Cookies.get("darkMode") === "OFF" ? false : true,
  basket:{ basketItems:Cookies.get("basket")?JSON.parse(Cookies.get("basket")):[]},
};
export const basketActionTypes = {
  add_to_basket: "ADD-TO-BASKET",
  remove_from_basket: "REMOVE-FROM-BASKET",
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE-DARK-MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case basketActionTypes.add_to_basket:
      const newItem = action.payload;
      const prevBasketItems = state.basket.basketItems;
      const existedItem = prevBasketItems.find(
        (item) => item._id === newItem._id
      );
      const newBasketItems = existedItem
        ? prevBasketItems
        : [...prevBasketItems, newItem];
        Cookies.set("basket",JSON.stringify(newBasketItems))
      return { ...state, basket: { basketItems: newBasketItems } };
    default:
      return state;
  }
}

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <store.Provider value={value}>{children}</store.Provider>;
}
///in the add-to-basket case we set the newbasketitems in the cookie
/// in the initialstate we get the initial value of basketItems from cookies because after refreshing the page 
////the store will get the initialstate values so we get the initial values of state from cookies
///find method in javascript return the first item that pass a test function


////      const cartItems = existItem
// ? state.cart.cartItems.map((item) =>
// item.name === existItem.name ? newItem : item
// )
// : [...state.cart.cartItems, newItem];