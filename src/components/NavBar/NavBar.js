import './NavBar.css'
import logo from './assets/logo.png'
import '../CardWidget/CardWidget'
import CartWidget from '../CardWidget/CardWidget'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";

const NavBar = ()=>{
    return(
        <nav className="NavBar">
            <Link className="navbar-brand" to="/"><img src={logo} alt= 'logo del sitio' className='img-logo'/></Link>
            <div className='button-container'>
                <div className='linkContainer'>
                    <NavLink to={`/category/men's clothing`} className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>
                        Men's clothing
                    </NavLink>
                    <NavLink to={`/category/women's clothing`} className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>
                        Women's clothing
                    </NavLink>
                    <NavLink to={`/category/jewelery`} className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>
                        Jewelery
                    </NavLink>
                    <NavLink to={`/category/electronics`} className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}>
                        Electronics
                    </NavLink>
                </div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar