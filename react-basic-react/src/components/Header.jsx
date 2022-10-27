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
      bg="#4d57db"
      p="10px"
      borderRadius="5px"
      color="#dbebf7"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Image borderRadius="10px" src="http://placekitten.com/100/80" />
        </Box>

        <Box ml="10px">
          <Heading mb="0px" fontSize={28}>
            Tienda de Mascotas
          </Heading>
          <Text mt="0px" fontWeight={600} fontSize={18}>
            {" "}
            Cuidamos a tus peludos
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
