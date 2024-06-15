import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar(props) {
  

  if (props.isHeader == true){
    return (
        <nav>
         <Link to="/">Inicio</Link>
         <Link to="/productos">Productos</Link>
         <Link to="/carrito">Carrito</Link>
         <CartWidget/>
        </nav>
      )
  }
 else{
    return (
        <nav>
         <Link to="/tyc">Terminos y Condiciones</Link>
         <Link to="/faq">F.A.Q</Link>
         <Link to="/contacto">Contactanos</Link>
        </nav>
      )
 }
  
  
   
}

export default NavBar