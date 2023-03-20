import { createContext,useReducer,useContext } from "react";
import data from "../data";
import { cartReducer } from "./Reducers";

const Cart = createContext()


function ContextProvider({children}) {
  const initialState = {
    products:data,
    cart:[],
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