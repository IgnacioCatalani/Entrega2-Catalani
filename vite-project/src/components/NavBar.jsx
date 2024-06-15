import { Link, NavLink  } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar(props) {


  if (props.isHeader == true){
    return (
        <nav>
         <NavLink to="/">Inicio</NavLink >
         <NavLink to="/productos">Productos</NavLink >
         <NavLink to="/categoria/jewelery">Joyeria</NavLink >
         <NavLink to="/categoria/electronics">Electrónica</NavLink >
         <NavLink to="/carrito">Carrito</NavLink >
         <CartWidget/>
        </nav>
      )
  }
 else{
    return (
        <nav>
         <a href="#">Terminos y Condiciones</a>
         <a href="#">F.A.Q</a>
         <a href="#">Contactanos</a>
        </nav>
      )
 }



}

export default NavBar