import { createContext,useReducer,useContext } from "react";
import data from "../data";
import { cartReducer } from "./Reducers";

const Cart = createContext()


function ContextProvider({children}) {
  let user = JSON.parse(localStorage.getItem('user'));
  const initialState = {
    products:data,
    cart:[],
    user:user?user:null,
}
   const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <Cart.Provider value={{state,dispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default ContextProvider

export const CartState = ()=>{
    return  useContext(Cart)
}