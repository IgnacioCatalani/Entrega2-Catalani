import Button from "./Button"
import ItemListContainer from "./ItemListContainer"

function Main(){
  return (
    <main>
    <ItemListContainer bienvenida="Bienvenido a Zera!"/>
     <h2>Productos</h2>
    
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, repellat!</p>
     <Button texto="Agregar al carrito "/>   
     <Button texto="Detalle"/>   
    </main>
    
  )
}



export default Main