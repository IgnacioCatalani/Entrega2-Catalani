import { createContext, useState } from "react"

export const miContexto=createContext()
const Provider= miContexto.Provider

function CartContext(props) {

    const [carritoCant, setcarritoCant] = useState(0)
   
    const valorDelContexto = {
        cant: carritoCant,
        loggedIn: false,
        fn: ()=> {
            setcarritoCant(carritoCant + 1)
        }
    }

  return (
    <Provider value={valorDelContexto}>
        {props.children}
    </Provider>
  )
}

export default CartContext 