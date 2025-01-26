import './ItemDetail.css'

import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id,title,image,category,description,price,stock}) =>{

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
                        Category : {category}
                    </p>
                    <p className="infoItemDetail">
                        Descripcion : {description}
                    </p>
                    <p className="infoItemDetail">
                        Precio : ${price}
                    </p>
                    <ItemCount initial={1} stock={stock} onadd={(quantity => console.log('Cantidad agregada', ))} />
                </section>
            </main>
        </article>
    )


}

export default ItemDetail