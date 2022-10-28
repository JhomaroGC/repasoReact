import React from "react";
import { Flex, Box, Stack, Text, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { List, Pencil, Cash } from "react-bootstrap-icons";
import { getCurrentDate } from "../utils/main";

const Navegacion = () => {
  return (
    <Flex
      className="secciones-layout"
      alignItems="center"
      justifyContent="space-between"
      bg="#f1c232"
      borderRadius="5px"
      p="10px"
      mb="10px"
    >
      <Flex>
        <Stack mb="0px">
          <Box>
            <Heading mb="0px" fontSize={24}>
              Bienvenido
            </Heading>
          </Box>
          <Box>
            <Text mt="0px" fontSize={20}>
              Hoy es {getCurrentDate()}
            </Text>
          </Box>
        </Stack>
      </Flex>
      <Flex>
        <Stack isInline>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="0px"
            rounded="5px"
            bg="#0076c9"
            color="white"
            alignContent="center"
          >
            <List fontSize={18} />
            <Box m="5px">
              <Link className="link-nav" to={"/productos"}>
                Catálogo de Productos
              </Link>
            </Box>
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="0px"
            rounded="5px"
            color="white"
            bg="#c90012"
          >
            <Pencil fontSize={18} />
            <Box m="5px">
              <Link className="link-nav" to="#">
                Modificar Productos
              </Link>
            </Box>
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="0px"
            rounded="5px"
            bg="#38761D"
            color="white"
          >
            <Cash fontSize={18} />
            <Box ml="5px">
              <Link className="link-nav" to="#">
                Reporte de Ventas
              </Link>
            </Box>
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Navegacion;
