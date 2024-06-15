function ItemDetail({ item }) {
    return (
      <div>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.title} />
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
      </div>
    );
  }
  
  export default ItemDetail;