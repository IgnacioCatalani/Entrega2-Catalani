import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [mostrar, setMostrar] = useState(true)
  const params = useParams() 

  useEffect(() => {

    if (params.id) {
      fetch('https://fakestoreapi.com/products/categories' + params.id)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          
          setProductos(data.products)
        })
    } else {
      fetch('https://fakestoreapi.com/products')
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setProductos(data.products)
        })
    }

  }, [params.id])

  const mostrarProductos = () => {
    setMostrar(!mostrar)
  }

  if (mostrar) {
    return (
      <div>
        <button onClick={mostrarProductos}>mostrar productos</button>
        <ItemList productos={productos} />
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={mostrarProductos}>mostrar productos</button>
      </div>
    )
  }
}
export default ItemListContainer