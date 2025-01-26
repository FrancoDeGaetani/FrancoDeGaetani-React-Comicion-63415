import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(0)

    const { itemId } = useParams()

    console.log("itemId:", itemId);

    useEffect(()=>{

        getProductById(Number(itemId))
        .then(response =>{
            setProduct(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )


}

export default ItemDetailContainer