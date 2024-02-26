import Navbar from "./NavBar"
import Itemlist from "./Itemlist"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Phones from "./telefonos";
import Laptops from "./laptops";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div> <center><Itemlist text={"Bienvenido a nuestra pagina web"}/> <h3>Oferton de CELULARES</h3> </center> <Phones /> </div>} />
          <Route path="/phones" element={ <Phones /> } />
          <Route path="/laptops" element={ <Laptops /> } />
          <Route path="*" element={<center><h3>404: Pagina no encontrada</h3></center>} />

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
