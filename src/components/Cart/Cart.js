import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, total} = useContext(CartContext)

    if (cart.length === 0){
        return(
            <div>
                <h1>El carrito esta vacio</h1>
                <Link to='/'>Volver al inicio</Link>
            </div>
        )
    }
    console.log(total)
    return(
        <div>
            {cart.map(p => <CartItem key={p.id} item={p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={()=> clearCart()} className='button'>Limpiar carrito</button>
            <Link to='/checkout' className='option'> Checkout </Link>
        </div>
    )
}


export default Cart