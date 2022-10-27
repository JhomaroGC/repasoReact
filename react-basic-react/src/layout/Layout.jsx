import React from "react";
import { Box } from "@chakra-ui/react";

/*=============Importamos todos los componentes Que hacen parte de nuestro Layout===============*/
//Header
import Header from "../components/Header";
//Navegación
import Navegacion from "../components/Navegacion";
//Outlet
import { Outlet } from "react-router-dom";

//Footer
import Footer from "../components/Footer";


const Layout = () => {
  
  return (
    <Box maxWidth="1200px" mx="auto" pt="0px">
      <Header />
      <Navegacion />
      {/*============================Aqui va la parte dinámica de la SPA=================================*/}
      <Outlet />


      <Footer />
    </Box>
  );
};

export default Layout;
