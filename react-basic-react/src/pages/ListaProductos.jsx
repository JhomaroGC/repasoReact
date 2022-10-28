import { useState, useEffect } from "react";
import { Stack, Box, SimpleGrid } from "@chakra-ui/react";

import styles from "../assets/css/styles.css";

/*================Importamos componentes necesarios============= */
import Producto from "./Producto";

const ListaProductos = () => {
  const [consulta, setConsulta] = useState([]);

  /*=========El useEffect escucha y trae la Información desde la Api===========*/
  useEffect(() => {
    const consultarApi = async () => {
      try {
        const respuesta = await fetch(
          "https://whispering-wildwood-03076.herokuapp.com/guitarras"
        );
        const resultados = await respuesta.json();
        setConsulta(resultados);
      } catch (error) {
        console.log("Error: " + error.message);
      }
    };
    consultarApi();
  }, []);

  return (
    <SimpleGrid columns = {3} p= '5px' spacing="15px" className="grid-text ">
      {consulta.length > 0 ? (
        /*=============Se hace un map sobre consulta que recogió la información en la const resultado======*/
        consulta.map((producto) => (
          /*======Notese que se va a renderizar  Producto como un componente========*/
          <Box>
            <Producto key={producto._id} producto={producto} />
          </Box>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </SimpleGrid>
  );
};

export default ListaProductos;
