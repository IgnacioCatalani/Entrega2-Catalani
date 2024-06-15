function ItemListContainer(greetings) {
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
  return (
    <p className="bienvenido">{greetings.bienvenida}</p>
  )
}

export default ItemListContainer