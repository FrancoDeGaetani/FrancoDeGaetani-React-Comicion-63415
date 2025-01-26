import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id,title,image,price,stock}) =>{

    return (
        <article className="cardItem">
            <header className="headerItem">
                <h2 className="itemHeader">
                    {title}
                </h2>
            </header>
            <div className="itemImgContainer">
                <img src={image} alt={title} className="itemImg"></img>
            </div>
            <section className="sectionItem">
                <p className="infoItem">
                    Precio : $ {price}
                </p>
                <p className="infoItem">
                    Stock Disponible : {stock}
                </p>
            </section>
            <footer className="itemFooter"> 
                <Link to={`/item/${id}`} className="option"><strong>Ver Detalles</strong></Link>
            </footer>
        </article>
    )


}

export default Item