/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import {createContext, useContext} from 'react'

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext);
};

const CartContextProvider = ({children}) => {
const [totalQty, setTotalQty] = useState(0);

const contextValue = {
    comision: 60755,
    totalQty,
    setTotalQty,
} 

    return <Provider value={contextValue}>{children}</Provider>;
    
};



export default CartContextProvider;