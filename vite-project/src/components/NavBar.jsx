import CartWidget from "./CartWidget"

function NavBar(props) {
  

  if (props.isHeader == true){
    return (
        <nav>
         <a href="#">Inicio</a>
         <a href="#">Productos</a>
         <a href="#">Contacto</a>
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