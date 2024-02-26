import Navbar from "./componets/Navbar/NavBar"
import Itemlist from "./componets/Itemlist"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Phones from "./componets/categorias/telefonos";
import Laptops from "./componets/categorias/laptops";

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
