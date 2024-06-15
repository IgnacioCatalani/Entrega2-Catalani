import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"


function Header(){
return (
  <header className="header">
    <img src="/Zera.png" alt="imagen" className="logo1" />
  <h1>Zera</h1>
  <Routes>
    <Route/>
</Routes>
  
  <NavBar isHeader={true} />
  </header>
) 
}


export default Header