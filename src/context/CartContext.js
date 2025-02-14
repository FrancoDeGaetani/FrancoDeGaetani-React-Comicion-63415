import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    console.log(cart)

    const addItem = (item, quantity) =>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        }else{
            console.log('El producto ya esta en el carrito')
        }
    }

    const removeItem = (itemId) =>{
        const CartUpdate = cart.filter(e => e.id !== itemId)
        setCart(CartUpdate)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some(e => e.id === itemId)
    }

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}