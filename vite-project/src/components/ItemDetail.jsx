import React, { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector'; 
import { miContexto } from "./CartContext";
import { useContext } from "react";

function ItemDetail({ item }) {
    const [quantity, setQuantity] = useState(1); 
    const valorDelContexto = useContext(miContexto)
    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity); 
    };

    const handleAddToCart = () => {
      valorDelContexto.fn()
    };

    return (
        <div>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <ItemQuantitySelector onQuantityChange={handleQuantityChange} />
            <button onClick={handleAddToCart} className="addToCartButton">Agregar al carrito</button>
        </div>
    );
}

export default ItemDetail;




