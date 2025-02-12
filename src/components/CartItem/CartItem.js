import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({item}) => {

    const {removeItem} = useContext(CartContext)

    return(
        <div>
            <h3>{item.title}</h3>
            <p>Precio por unidad: {item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: {item.quantity * item.price}</p>
            <button onClick={()=> removeItem(item.id)}>Eliminar</button>
        </div>
    )

}

export default CartItem