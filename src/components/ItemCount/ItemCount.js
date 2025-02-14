import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({stock, initial,onAdd})=>{

    const [quantity, setQuantity] = useState(initial)

    const increment = ()=>{
        if(quantity < stock ){
            setQuantity(quantity +1)
        }
    }

    const decrement = ()=>{
        if(quantity > 1){
            setQuantity(quantity -1)
        }
    }


    return(
        <div className='counter'>
            <div className='controls'>
                <button className='buttonItemCount' onClick={decrement}>-</button>
                <h4 className='numbreItemCount'>{quantity}</h4>
                <button className='buttonItemCount' onClick={increment}>+</button>
            </div>
            <div className='buttonCounterContainer'>
                <button className='buttonAgregar' onClick={()=> onAdd(quantity)} disabled={!stock || quantity === 0}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )


}


export default ItemCount