export const cartReducer =(state,action)=>{
   switch (action.type) {
    case 'ADD_TO_CART':
        return {
            ...state,
            cart:[...state.cart,{...action.payload,qty:1}]
        };
    case 'REMOVE_FROM_CART':
        return{
            ...state,
            cart:state.cart.filter(c=>c.id !== action.payload.id)
        };
    case 'INCREMENT_CART_QTY':
        return{
            ...state,
            cart:state.cart.filter(c=>c.id ===action.payload.id?(c.qty=c.qty+action.payload.val):(c.qty))
        }
    case 'DECREMENT_CART_QTY':
            return{
                ...state,
                cart:state.cart.filter(c=>c.id === action.payload.id?(c.qty-action.payload):(c.qty))
            };
    case 'SEARCH_PRODUCT':
        return{
            ...state,
            products:state.products.filter(c=>c.title.toLowerCase().includes(action.payload))
        };
   
    default:
        return state;
   }
}