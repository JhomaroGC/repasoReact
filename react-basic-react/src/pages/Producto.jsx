import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Text,
  Stack,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";

const Producto = ({ producto }) => {
  /*======A esto se le llama un deconstructor*/
  const { _id, nombre, descripcion, precio, imagen } = producto;

  return (
    <Box borderRadius="5px" bg="#fafafa" p="15px">
      <Stack isInline>
        <Box>
          <Image
            borderRadius="5px"
            w={100}
            h={200}
            src={imagen.url}
            alt={nombre}
          />
        </Box>

        <Stack justifyContent="space-between">
          <Stack m="10px">
            <Heading>{`Producto: ${nombre}`}</Heading>
            <Text className="precio-text">{`Precio: $${precio}`}</Text>
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
              <Link className="link-nav" to={`/detalle-producto/${_id}`}>
                Detalle Producto
              </Link>
            </Box>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Producto;

//Echele ojo a eso
// const handelClick = (e) =>{
//     console.log(e.target.name);

// };
