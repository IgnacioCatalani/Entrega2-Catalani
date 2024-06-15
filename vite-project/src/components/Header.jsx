import NavBar from "./NavBar"
import { Link, NavLink, Routes, Route } from "react-router-dom"

function Header(){
return (
  <header className="header">
    <img src="/Zera.png" alt="imagen" className="logo1" />
  <h1>Zera</h1>
  <Routes>
    <Route path="/productos" element={<input/>}/>
  </Routes>

  <NavBar isHeader={true} />
  </header>
) 
}


export default Header