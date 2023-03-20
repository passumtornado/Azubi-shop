export const cartReducer =(state,action)=>{
   switch (action.type) {
    case 'ADD_To_CART':
        return {
            ...state,
            cart:[...state.cart,{...action.payload,qty:1}]
        };
    case 'REMOVE_FROM_CART':
        return{
            ...state,
            cart:state.cart.filter(i=>i.id !== action.payload.id)
        };
   
    default:
        return state;
   }
}