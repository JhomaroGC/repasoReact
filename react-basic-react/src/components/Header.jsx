import React from "react";
import { Box, Text, Stack, Flex, Image, Heading } from "@chakra-ui/react";
import { Whatsapp,Envelope } from "react-bootstrap-icons";

/*=================Importo Estilos personalizados=====================*/
import styles from "../assets/css/styles.css";

const Header = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      mb="20px"
      className="secciones-layout"
      bg="#5e5454"
      p="10px"
      borderRadius="5px"
      color="#dbebf7"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Image borderRadius="10px" src="src\assets\img\logo.png" alt = "logo" width={100} height={100} />
        </Box>

        <Box ml="10px">
          <Heading mb="0px" fontSize={28}>
            Tienda de Instrumentos Musicales
          </Heading>
          <Text mt="0px" fontWeight={600} fontSize={18}>
            El Perro de Cuerdas
          </Text>
        </Box>
      </Flex>
      
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Stack isInline>
            <Whatsapp fontSize={30} />
            <Heading fontSize={24}> (+57) 317-520-87-67</Heading>
          </Stack>
          <Stack isInline alignItems="center" justifyContent="space-between">
            <Envelope fontSize={30} />
            <Heading fontSize={24}> empresariar@gmail.com</Heading>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
