import React from "react";
import { Box } from "@chakra-ui/react";

/*============Importo los componentes requeridos=============*/
import ListaProductos from "./ListaProductos";

/*==========Este es el inicio dinámico de la página SPA================ */
const InicioAdministrador = () => {
  return (
    <Box><ListaProductos /></Box>   

  );
};

export default InicioAdministrador;