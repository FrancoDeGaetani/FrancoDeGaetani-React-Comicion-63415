import logo from './assets/logo.png'
import CartWidget from '../CardWidget/CardWidget'

const NavBar = ()=>{
    return(
        <nav>
            <img src={logo} alt= 'logo del sitio'/>
            <div>
                <button>NUEVO</button>
                <button>Mujeres</button>
                <button>Accesorios</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar