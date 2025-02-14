import './ItemDetail.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


const ItemDetail = ({id,title,image,category,description,price,stock}) =>{

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {id ,title ,price}

        addItem(item, quantity)
    }

    return (
        <article className="cardItemDetail">
            <header className="headerItemDetail">
                <h2 className="tituloItemDetail">
                    {title}
                </h2>
            </header>
            <main className='mainBodyItem'>
                <div className='imgContainerItemDetail'>
                    <img src={image} alt={title} className="imgItemDetail"></img>
                </div>
                <section className="sectionItemDetail">
                    <p className="infoItemDetail">
                        Descripcion : {description}
                    </p>
                    <p className="infoItemDetail">
                        Precio : ${price}
                    </p>
                    <footer>
                        {
                        quantityAdded > 0 ? (
                            <Link to="/cart" className='Option'>Termina compra</Link>
                            ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            )
                        }
                    </footer>
                </section>
            </main>
        </article>
    )


}

export default ItemDetail