import { Link } from "react-router-dom";

function Item({ producto }) {
    return (
        <div className="grid-item">
            <article>
                <h2>{producto.title}</h2>
                <img src={producto.image} alt={producto.title} />
                <p>${producto.price}</p>
                <Link to={`/item/${producto.id}`}>
                    <button>Ver detalle</button>
                </Link>
            </article>
        </div>
    );
}

export default Item;
