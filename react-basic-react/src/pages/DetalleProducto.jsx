import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Stack, Image, Heading, Button, Text} from "@chakra-ui/react";

import styles from "../assets/css/styles.css";

const DetalleProducto = () => {
  const [producto, setProducto] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const respuesta = await fetch(
          `https://whispering-wildwood-03076.herokuapp.com/guitarras/${id}`
        );
        const resultados = await respuesta.json();
        setProducto(resultados);
      } catch (error) {
        console.log("Error: " + error.message);
      }
    };
    consultarApi();
  }, []);

  const { _id, nombre, descripcion, precio, imagen } = producto;

  return _id ? (
    <Box borderRadius="5px" bg="#fafafa" p="15px" >
      <Stack isInline justifyContent="space-between" alignItems="center">
        <Box m = '5px'> 
          <Image
            borderRadius="5px"
            w={100}
            h={200}
            src={imagen.url}
            alt={nombre}
          />
        </Box>

        <Stack >
          <Stack m = '15px'>
            <Heading>{`Producto: ${nombre}`}</Heading>
            <Text className = 'precio-text'>{`Precio: $${precio}`}</Text>
            <Text className = 'precio-text'>{`Descripción: ${descripcion}`}</Text>
          </Stack>

          <Button
            size="md"
            height="48px"
            width="200px"
            border="0px"
            rounded="5px"
            color="white"
            bg="#140e01"
          >
            <Box m="5px">
              <Link className="link-nav" to={"/productos"}>
                Regresar al Catálogo
              </Link>
            </Box>
          </Button>
        </Stack>
      </Stack>
    </Box>
  ) : (
    <p>No hay información del producto, itenta nuevamente</p>
  );
};

export default DetalleProducto;
