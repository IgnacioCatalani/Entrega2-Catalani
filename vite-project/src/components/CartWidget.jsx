

function CartWidget() {
   const itemCount=3;
  return (
    <div className="cart-widget">
      <img src="/cart.svg" alt="" className="carrito1" />
      <span>{itemCount}</span>
    </div>
  )
}

export default CartWidget