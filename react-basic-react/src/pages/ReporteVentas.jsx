import React from "react";
import { Box, Heading, Flex, Stack } from "@chakra-ui/react";

const ReporteVentas = () => {
  return (
    <Box
      p="10px"
      borderRadius="5px"
      className="secciones-layout"
      bg="#82d9bd"
      height={400}
    >
      <Heading color="white">Reporte de Ventas</Heading>
      <Flex
        className="secciones-layout"
        alignItems="center"
        justifyContent="space-between"
      >
          <Stack isInline>
            <Box>grafico1</Box>
            <Box>grafico1</Box>
            <Box>grafico1</Box>
          </Stack>
      </Flex>
    </Box>
  );
};

export default ReporteVentas;
