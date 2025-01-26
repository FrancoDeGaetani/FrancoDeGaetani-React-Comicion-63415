import { FaBagShopping } from "react-icons/fa6";
import './CardWidget.css'

const CartWidget = ()=>{
    return(
        <div>
            <FaBagShopping className="carrito"/>
            0
        </div>
    )
}

export default CartWidget