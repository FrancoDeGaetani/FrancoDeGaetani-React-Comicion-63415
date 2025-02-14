import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ({item}) => {

    const {removeItem} = useContext(CartContext)

    return(
        <div className='item-container'>
            <h3>{item.title}</h3>
            <div className='item-cantidad'>
                <p>Precio por unidad: {item.price}</p>
                <p>Cantidad: {item.quantity}</p>
            </div>
            <div className='item-total-container'>
                <p>Subtotal: {item.quantity * item.price}</p>
                <button onClick={()=> removeItem(item.id)} className='item-button'>Eliminar</button>
            </div>
        </div>    
    )

}

export default CartItem