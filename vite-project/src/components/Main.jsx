import { Route, Routes } from "react-router-dom"
import Button from "./Button"
import ItemListContainer from "./ItemListContainer"
import CartWidget from "./CartWidget"

function Main(){
  return (
    <main>
     <Routes>
      <Route path="/" element={<p>Home</p>}/>
      <Route path="/categoria/:id" element={<ItemListContainer />} />
      <Route path="/productos" element={<ItemListContainer/>}/>
      <Route path="/carrito" element={<CartWidget/>}/>
     </Routes>
    </main>
    
  )
}



export default Main