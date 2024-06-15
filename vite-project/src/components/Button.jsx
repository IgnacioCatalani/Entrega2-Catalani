import { useState } from "react"


function Button(props) {
  const [miEstado, setmiEstado] = useState("valor inicial")

  const hacerClick = ()=>{
   setmiEstado("nuevo valor")
  }
  
  
    return (
    <button className="btn" onClick={hacerClick}>{miEstado}</button>
  )
}

export default Button

