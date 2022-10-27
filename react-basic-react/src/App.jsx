//Importamos el paquete para generar las rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*=====================Importamos el Layout principal================================*/
import Layout from "./layout/Layout";

/*
=====================Importamos las páginas que vamos a enrutar====================*/

//Vista Administrador Inicio
import InicioAdministrador from "./pages/InicioAdministrador";

// //Vista Administrador-Lista de Productos
// import vistaAdministradorListaProductos from "./pages/vistaAdministradorListaProductos";

// //Vista Administrador-Modificar Productos
// import vistaAdministradorModificarProductos from "./pages/vistaAdministradorModificarProductos";

// //Vista Administrador-Reporte de Ventas
// import vistaAdministradorReporteVentas from "./pages/vistaAdministradorReporteVentas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element = {<InicioAdministrador/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
