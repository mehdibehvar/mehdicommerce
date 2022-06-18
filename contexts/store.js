import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
export const store = createContext();

const initialState = {
  darkMode: Cookies.get("darkMode") === "OFF" ? false : true,
  basket: {
    basketItems: Cookies.get("basket") ? JSON.parse(Cookies.get("basket")) : [],
  },
};
export const basketActionTypes = {
  add_to_basket: "ADD-TO-BASKET",
  change_quantity: "CHANGE-QUANTITY",
  remove_from_basket: "REMOVE-FROM-BASKET",
  update_basket: "UPDATE-BASKET",
  clear_basket:"CLEAR-BASKET"
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE-DARK-MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
      ///upadate the basket////
    case basketActionTypes.update_basket: {
      const newItem = action.payload;
      const { _id, quantity }=newItem;
      const prevBasketItems = state.basket.basketItems;
      const existedItem = prevBasketItems.find(
        (item) => item._id === _id
      );
      const newChangedBasketItems =existedItem? prevBasketItems.map((item) => {
        ///if the item exist previusly just change its quantity and return modified basketitems
        if (_id === item._id) {
          return { ...item, quantity };
        }
        return item;
        ////if the item there isn't in the basket just add it to basket 
      }):[...prevBasketItems, newItem];
      Cookies.set("basket", JSON.stringify(newChangedBasketItems));
      return { ...state, basket: { basketItems: newChangedBasketItems } };
    }

    case basketActionTypes.remove_from_basket: {
      const id = action.payload;
      const prevBasketItems = state.basket.basketItems;
      const newBasketItems = prevBasketItems.filter((item) => item._id != id);
      return { ...state, basket: { basketItems: newBasketItems } };
    }
    case basketActionTypes.clear_basket:
      return{...state,basket:{basketItems:[]}}
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

/// if use the following code in the case add to basket you can change the quantity of a product 
///without deleteing changed product and as aresult the sort in the basket will not change
////      const cartItems = existItem
// ? state.cart.cartItems.map((item) =>
// item.name === existItem.name ? newItem : item
// )
// : [...state.cart.cartItems, newItem];
