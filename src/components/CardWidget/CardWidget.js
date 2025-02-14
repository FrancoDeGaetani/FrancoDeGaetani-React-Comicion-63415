import { FaBagShopping } from "react-icons/fa6";
import './CardWidget.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = ()=>{

    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to="/cart" className="cartWidget" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <FaBagShopping className="carrito"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget